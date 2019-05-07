/**
 * skylark-highlightjs - A version of highlightjs.js that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-highlightjs/
 * @license MIT
 */
define(["../highlight"],function(e){return{contains:[e.C_NUMBER_MODE,{begin:"[a-zA-Z_][\\da-zA-Z_]+\\.[\\da-zA-Z_]{1,3}",end:":",excludeEnd:!0},{begin:"(ncalls|tottime|cumtime)",end:"$",keywords:"ncalls tottime|10 cumtime|10 filename",relevance:10},{begin:"function calls",end:"$",contains:[e.C_NUMBER_MODE],relevance:10},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,{className:"string",begin:"\\(",end:"\\)$",excludeBegin:!0,excludeEnd:!0,relevance:0}]}});
//# sourceMappingURL=../sourcemaps/languages/profile.js.map
