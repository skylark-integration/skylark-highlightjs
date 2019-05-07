/**
 * skylark-highlightjs - A version of highlightjs.js that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-highlightjs/
 * @license MIT
 */
define(["../highlight"],function(e){var a={"builtin-name":"each in with if else unless bindattr action collection debugger log outlet template unbound view yield"};return{aliases:["hbs","html.hbs","html.handlebars"],case_insensitive:!0,subLanguage:"xml",contains:[e.COMMENT("{{!(--)?","(--)?}}"),{className:"template-tag",begin:/\{\{[#\/]/,end:/\}\}/,contains:[{className:"name",begin:/[a-zA-Z\.-]+/,keywords:a,starts:{endsWithParent:!0,relevance:0,contains:[e.QUOTE_STRING_MODE]}}]},{className:"template-variable",begin:/\{\{/,end:/\}\}/,keywords:a}]}});
//# sourceMappingURL=../sourcemaps/languages/handlebars.js.map
