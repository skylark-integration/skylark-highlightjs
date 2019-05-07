/**
 * skylark-highlightjs - A version of highlightjs.js that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-highlightjs/
 * @license MIT
 */
define(["../highlight"],function(e){var n={className:"string",begin:"\\$.{1}"},a={className:"symbol",begin:"#"+e.UNDERSCORE_IDENT_RE};return{aliases:["st"],keywords:"self super nil true false thisContext",contains:[e.COMMENT('"','"'),e.APOS_STRING_MODE,{className:"type",begin:"\\b[A-Z][A-Za-z0-9_]*",relevance:0},{begin:"[a-z][a-zA-Z0-9_]*:",relevance:0},e.C_NUMBER_MODE,a,n,{begin:"\\|[ ]*[a-z][a-zA-Z0-9_]*([ ]+[a-z][a-zA-Z0-9_]*)*[ ]*\\|",returnBegin:!0,end:/\|/,illegal:/\S/,contains:[{begin:"(\\|[ ]*)?[a-z][a-zA-Z0-9_]*"}]},{begin:"\\#\\(",end:"\\)",contains:[e.APOS_STRING_MODE,n,e.C_NUMBER_MODE,a]}]}});
//# sourceMappingURL=../sourcemaps/languages/smalltalk.js.map
