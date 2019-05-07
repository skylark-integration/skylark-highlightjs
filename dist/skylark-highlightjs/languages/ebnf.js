/**
 * skylark-highlightjs - A version of highlightjs.js that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-highlightjs/
 * @license MIT
 */
define(["../highlight"],function(a){var e=a.COMMENT(/\(\*/,/\*\)/);return{illegal:/\S/,contains:[e,{className:"attribute",begin:/^[ ]*[a-zA-Z][a-zA-Z-]*([\s-]+[a-zA-Z][a-zA-Z]*)*/},{begin:/=/,end:/;/,contains:[e,{className:"meta",begin:/\?.*\?/},a.APOS_STRING_MODE,a.QUOTE_STRING_MODE]}]}});
//# sourceMappingURL=../sourcemaps/languages/ebnf.js.map
