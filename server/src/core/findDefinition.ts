import { Location, TextDocument, SymbolInformation } from "vscode-languageserver/lib/main";
import { getCSSLanguageService, getSCSSLanguageService, getLESSLanguageService, LanguageService } from 'vscode-css-languageservice';

import { Selector, StylesheetMap } from "../types";
import { console } from './../logger'

let languageServices: { [id: string]: LanguageService } = {
	css: getCSSLanguageService(),
	scss: getSCSSLanguageService(),
	less: getLESSLanguageService()
};

export function getLanguageService(document: TextDocument) {
	let service = languageServices[document.languageId];
	if (!service) {
		console.log('Document type is ' + document.languageId + ', using css instead.');
		service = languageServices['css'];
	}
	return service;
}

function getSelection(selector: Selector): string {
  switch(selector.attribute) {
    case 'id':
      return '#' + selector.value;
    case 'class':
      return '.' + selector.value;
    default:
      return selector.value;
  }
}

export function findDefinition(selector: Selector, stylesheetMap: StylesheetMap): Location[] {
  console.log('Searching for definition')
  const locations: Location[] = [];
  
  let selection = getSelection(selector);
  const classOrIdSelector = selector.attribute === 'class' || selector.attribute === 'id';
  
  if (selection[0] === ".") {
    selection = "\\" + selection;
  }
  
  if (!classOrIdSelector) {
    // Tag selectors must have nothing, whitespace, or a combinator before it.
    selection = "(^|[\\s>+~])" + selection;
  }
  
  const re = new RegExp(selection + "(\\[[^\\]]*\\]|:{1,2}[\\w-()]+|\\.[\\w-]+|#[\\w-]+)*\\s*$", classOrIdSelector ? "" : "i");
  Object.keys(stylesheetMap)
    .forEach(uri => {
      const { document, stylesheet } = stylesheetMap[uri];
      const symbols = getLanguageService(document).findDocumentSymbols(document, stylesheet);
      console.log('Found ' + symbols.length + ' symbols in ' + uri);


      symbols.forEach((symbol: SymbolInformation) => {
        if(symbol.name.indexOf("&") !== -1) {
          // TODO: Handle nesting
        }

        if(symbol.name.search(re) !== -1) {
          locations.push(symbol.location)
        } else if (!classOrIdSelector) {
          // Special case for tag selectors - match "*" as the rightmost character
          if (/\*\s*$/.test(symbol.name)) {
            locations.push(symbol.location);
          }
        }
      })
    })

  return locations
}