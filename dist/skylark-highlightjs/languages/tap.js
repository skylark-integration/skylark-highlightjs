/**
 * skylark-highlightjs - A version of highlightjs.js that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-highlightjs/
 * @license MIT
 */
define(["../highlight"],function(e){return{case_insensitive:!0,contains:[e.HASH_COMMENT_MODE,{className:"meta",variants:[{begin:"^TAP version (\\d+)$"},{begin:"^1\\.\\.(\\d+)$"}]},{begin:"(s+)?---$",end:"\\.\\.\\.$",subLanguage:"yaml",relevance:0},{className:"number",begin:" (\\d+) "},{className:"symbol",variants:[{begin:"^ok"},{begin:"^not ok"}]}]}});
//# sourceMappingURL=../sourcemaps/languages/tap.js.map
