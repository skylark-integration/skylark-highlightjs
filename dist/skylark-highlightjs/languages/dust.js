/**
 * skylark-highlightjs - A version of highlightjs.js that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-highlightjs/
 * @license MIT
 */
define(["../highlight"],function(e){return{aliases:["dst"],case_insensitive:!0,subLanguage:"xml",contains:[{className:"template-tag",begin:/\{[#\/]/,end:/\}/,illegal:/;/,contains:[{className:"name",begin:/[a-zA-Z\.-]+/,starts:{endsWithParent:!0,relevance:0,contains:[e.QUOTE_STRING_MODE]}}]},{className:"template-variable",begin:/\{/,end:/\}/,illegal:/;/,keywords:"if eq ne lt lte gt gte select default math sep"}]}});
//# sourceMappingURL=../sourcemaps/languages/dust.js.map
