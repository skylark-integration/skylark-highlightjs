/**
 * skylark-highlightjs - A version of highlightjs.js that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-highlightjs/
 * @license MIT
 */
define([],function(){"use strict";var e={},n={};function i(e){return"object"!=typeof e||Array.isArray(e)||!function(e){var n;for(n in e)return!1;return!0}(e)}return define(["../highlight"],function(e){return{keywords:{keyword:"namespace const typedef struct enum service exception void oneway set list map required optional",built_in:"bool byte i16 i32 i64 double string binary",literal:"true false"},contains:[e.QUOTE_STRING_MODE,e.NUMBER_MODE,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,{className:"class",beginKeywords:"struct enum service exception",end:/\{/,illegal:/\n/,contains:[e.inherit(e.TITLE_MODE,{starts:{endsWithParent:!0,excludeEnd:!0}})]},{begin:"\\b(set|list|map)\\s*<",end:">",keywords:"bool byte i16 i32 i64 double string binary",contains:["self"]}]}}),i(n)?n:i(e)?e:void 0});
//# sourceMappingURL=../sourcemaps/languages/thrift.js.map
