/**
 * skylark-highlightjs - A version of highlightjs.js that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-highlightjs/
 * @license MIT
 */
define(["../highlight"],function(e){return{contains:[{className:"comment",begin:/\$noop\(/,end:/\)/,contains:[{begin:/\(/,end:/\)/,contains:["self",{begin:/\\./}]}],relevance:10},{className:"keyword",begin:/\$(?!noop)[a-zA-Z][_a-zA-Z0-9]*/,end:/\(/,excludeEnd:!0},{className:"variable",begin:/%[_a-zA-Z0-9:]*/,end:"%"},{className:"symbol",begin:/\\./}]}});
//# sourceMappingURL=../sourcemaps/languages/taggerscript.js.map
