/**
 * skylark-highlightjs - A version of highlightjs.js that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-highlightjs/
 * @license MIT
 */
define(["../highlight"],function(e){var n="[a-zA-Z_\\-\\+\\*\\/\\<\\=\\>\\&\\#][a-zA-Z0-9_\\-\\+\\*\\/\\<\\=\\>\\&\\#!]*",i="(\\-|\\+)?\\d+(\\.\\d+|\\/\\d+)?((d|e|f|l|s|D|E|F|L|S)(\\+|\\-)?\\d+)?",a={className:"literal",begin:"\\b(t{1}|nil)\\b"},b={className:"number",variants:[{begin:i,relevance:0},{begin:"#(b|B)[0-1]+(/[0-1]+)?"},{begin:"#(o|O)[0-7]+(/[0-7]+)?"},{begin:"#(x|X)[0-9a-fA-F]+(/[0-9a-fA-F]+)?"},{begin:"#(c|C)\\("+i+" +"+i,end:"\\)"}]},s=e.inherit(e.QUOTE_STRING_MODE,{illegal:null}),g=e.COMMENT(";","$",{relevance:0}),l={begin:"\\*",end:"\\*"},t={className:"symbol",begin:"[:&]"+n},c={begin:n,relevance:0},r={begin:"\\|[^]*?\\|"},d={contains:[b,s,l,t,{begin:"\\(",end:"\\)",contains:["self",a,s,b,c]},c],variants:[{begin:"['`]\\(",end:"\\)"},{begin:"\\(quote ",end:"\\)",keywords:{name:"quote"}},{begin:"'\\|[^]*?\\|"}]},o={variants:[{begin:"'"+n},{begin:"#'"+n+"(::"+n+")*"}]},m={begin:"\\(\\s*",end:"\\)"},v={endsWithParent:!0,relevance:0};return m.contains=[{className:"name",variants:[{begin:n},{begin:"\\|[^]*?\\|"}]},v],v.contains=[d,o,m,a,b,s,g,l,t,r,c],{illegal:/\S/,contains:[b,{className:"meta",begin:"^#!",end:"$"},a,s,g,d,o,m,c]}});
//# sourceMappingURL=../sourcemaps/languages/lisp.js.map
