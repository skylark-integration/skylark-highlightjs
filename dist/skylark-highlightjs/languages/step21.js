/**
 * skylark-highlightjs - A version of highlightjs.js that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-highlightjs/
 * @license MIT
 */
define(["../highlight"],function(e){return{aliases:["p21","step","stp"],case_insensitive:!0,lexemes:"[A-Z_][A-Z0-9_.]*",keywords:{keyword:"HEADER ENDSEC DATA"},contains:[{className:"meta",begin:"ISO-10303-21;",relevance:10},{className:"meta",begin:"END-ISO-10303-21;",relevance:10},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.COMMENT("/\\*\\*!","\\*/"),e.C_NUMBER_MODE,e.inherit(e.APOS_STRING_MODE,{illegal:null}),e.inherit(e.QUOTE_STRING_MODE,{illegal:null}),{className:"string",begin:"'",end:"'"},{className:"symbol",variants:[{begin:"#",end:"\\d+",illegal:"\\W"}]}]}});
//# sourceMappingURL=../sourcemaps/languages/step21.js.map
