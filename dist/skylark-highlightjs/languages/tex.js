/**
 * skylark-highlightjs - A version of highlightjs.js that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-highlightjs/
 * @license MIT
 */
define(["../highlight"],function(e){var n={className:"tag",begin:/\\/,relevance:0,contains:[{className:"name",variants:[{begin:/[a-zA-Z\u0430-\u044f\u0410-\u042f]+[*]?/},{begin:/[^a-zA-Z\u0430-\u044f\u0410-\u042f0-9]/}],starts:{endsWithParent:!0,relevance:0,contains:[{className:"string",variants:[{begin:/\[/,end:/\]/},{begin:/\{/,end:/\}/}]},{begin:/\s*=\s*/,endsWithParent:!0,relevance:0,contains:[{className:"number",begin:/-?\d*\.?\d+(pt|pc|mm|cm|in|dd|cc|ex|em)?/}]}]}}]};return{contains:[n,{className:"formula",contains:[n],relevance:0,variants:[{begin:/\$\$/,end:/\$\$/},{begin:/\$/,end:/\$/}]},e.COMMENT("%","$",{relevance:0})]}});
//# sourceMappingURL=../sourcemaps/languages/tex.js.map
