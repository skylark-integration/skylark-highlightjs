/**
 * skylark-highlightjs - A version of highlightjs.js that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-highlightjs/
 * @license MIT
 */
define(["../highlight"],function(e){var a=e.COMMENT("{","}",{contains:["self"]});return{subLanguage:"xml",relevance:0,contains:[e.COMMENT("^#","$"),e.COMMENT("\\^rem{","}",{relevance:10,contains:[a]}),{className:"meta",begin:"^@(?:BASE|USE|CLASS|OPTIONS)$",relevance:10},{className:"title",begin:"@[\\w\\-]+\\[[\\w^;\\-]*\\](?:\\[[\\w^;\\-]*\\])?(?:.*)$"},{className:"variable",begin:"\\$\\{?[\\w\\-\\.\\:]+\\}?"},{className:"keyword",begin:"\\^[\\w\\-\\.\\:]+"},{className:"number",begin:"\\^#[0-9a-fA-F]+"},e.C_NUMBER_MODE]}});
//# sourceMappingURL=../sourcemaps/languages/parser3.js.map
