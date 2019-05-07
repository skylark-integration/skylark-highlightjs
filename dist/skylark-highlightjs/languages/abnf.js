/**
 * skylark-highlightjs - A version of highlightjs.js that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-highlightjs/
 * @license MIT
 */
define(["../highlight"],function(e){var n="^[a-zA-Z][a-zA-Z0-9-]*",s="[!@#$^&',?+~`|:]",a=e.COMMENT(";","$"),i={begin:n+"\\s*=",returnBegin:!0,end:/=/,relevance:0,contains:[{className:"attribute",begin:n}]};return{illegal:s,keywords:["ALPHA","BIT","CHAR","CR","CRLF","CTL","DIGIT","DQUOTE","HEXDIG","HTAB","LF","LWSP","OCTET","SP","VCHAR","WSP"].join(" "),contains:[i,a,{className:"symbol",begin:/%b[0-1]+(-[0-1]+|(\.[0-1]+)+){0,1}/},{className:"symbol",begin:/%d[0-9]+(-[0-9]+|(\.[0-9]+)+){0,1}/},{className:"symbol",begin:/%x[0-9A-F]+(-[0-9A-F]+|(\.[0-9A-F]+)+){0,1}/},{className:"symbol",begin:/%[si]/},e.QUOTE_STRING_MODE,e.NUMBER_MODE]}});
//# sourceMappingURL=../sourcemaps/languages/abnf.js.map
