/**
 * skylark-highlightjs - A version of highlightjs.js that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-highlightjs/
 * @license MIT
 */
define([],function(){"use strict";var e={},n={};function r(e){return"object"!=typeof e||Array.isArray(e)||!function(e){var n;for(n in e)return!1;return!0}(e)}return define(["../highlight"],function(e){var n="([a-zA-Z]|\\.[a-zA-Z.])[a-zA-Z0-9._]*";return{contains:[e.HASH_COMMENT_MODE,{begin:n,lexemes:n,keywords:{keyword:"function if in break next repeat else for return switch while try tryCatch stop warning require library attach detach source setMethod setGeneric setGroupGeneric setClass ...",literal:"NULL NA TRUE FALSE T F Inf NaN NA_integer_|10 NA_real_|10 NA_character_|10 NA_complex_|10"},relevance:0},{className:"number",begin:"0[xX][0-9a-fA-F]+[Li]?\\b",relevance:0},{className:"number",begin:"\\d+(?:[eE][+\\-]?\\d*)?L\\b",relevance:0},{className:"number",begin:"\\d+\\.(?!\\d)(?:i\\b)?",relevance:0},{className:"number",begin:"\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d*)?i?\\b",relevance:0},{className:"number",begin:"\\.\\d+(?:[eE][+\\-]?\\d*)?i?\\b",relevance:0},{begin:"`",end:"`",relevance:0},{className:"string",contains:[e.BACKSLASH_ESCAPE],variants:[{begin:'"',end:'"'},{begin:"'",end:"'"}]}]}}),r(n)?n:r(e)?e:void 0});
//# sourceMappingURL=../sourcemaps/languages/r.js.map
