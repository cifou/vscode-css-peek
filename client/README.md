[![Build Status](https://travis-ci.org/pranaygp/vscode-css-peek.svg?branch=master)](https://travis-ci.org/pranaygp/vscode-css-peek)
[![Installs](https://vsmarketplacebadge.apphb.com/installs-short/pranaygp.vscode-css-peek.svg)](https://marketplace.visualstudio.com/items?itemName=pranaygp.vscode-css-peek)
[![Version](https://vsmarketplacebadge.apphb.com/version/pranaygp.vscode-css-peek.svg)](https://marketplace.visualstudio.com/items?itemName=pranaygp.vscode-css-peek)
[![codecov](https://codecov.io/gh/pranaygp/vscode-css-peek/branch/master/graph/badge.svg)](https://codecov.io/gh/pranaygp/vscode-css-peek)

# Functionality

This extension extends HTML and ejs code editing with `Go To Definition` support for css (classes and IDs) found in strings within the source code.

This was heavily inspired by a similar feature in [Brackets](http://brackets.io/) called CSS Inline Editors.

![working](working.gif)

The extension supports all the normal capabilities of symbol definition tracking, but does it for css selectors (classes and IDs). This includes:

 * Peek: load the css file inline and make quick edits right there. (`Ctrl+Shift+F12`)
 * Go To: jump directly to the css file or open it in a new editor (`F12`)
 * Hover: show the definition in a hover over the symbol (`Ctrl+hover`)

See editor docs for more details
 * [Visual Studio Code: Goto Definition](https://code.visualstudio.com/docs/editor/editingevolved#_go-to-definition)
 * [Visual Studio Code: Peek](https://code.visualstudio.com/docs/editor/editingevolved#_peek)

# Contributing

Contributions are greatly appreciated.  Please fork the repository and submit a pull request.

# Changelog

## 2.0.2

  * Fix bug that limited the language support only to HTML. Now supports all languages provided by "activeLanguages" config
## 2.0.1

  * Fix an error wherby the Overview was missing on the Visual Studio Marketplace

## 2.0.0

  * A complete rewrite featuring the new [Language Server Protocol](https://github.com/Microsoft/language-server-protocol)
  * Added scss support
  * Added multi definition support (provides all CSS rules matching the selector)
  * Added support for HTML tag selectors

## 1.3.3

  * New Logo

## 1.3.0

  * Add configuration option to ignore file from CSS lookup

## 1.2.4

  * Crucial bug fix

## 1.2.3

  * Workaround for bug if large number of files exist

## 1.2.2

  * Better recognition of CSS selector word from cursor position
  * Optimize code for fewer file lookups

## 1.2.1

  * Fix README typo

## 1.2.0
    
  * Add `less` support
  * Configure search file extensions using "css_peek.searchFileExtensions"

## 1.1.0
    
  * Update Icon

## 1.0.0

  * Shamelessly copied code from [https://github.com/abierbaum/vscode-file-peek](https://github.com/abierbaum/vscode-file-peek)
