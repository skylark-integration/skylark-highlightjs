/**
 * skylark-highlightjs - A version of highlightjs.js that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-highlightjs/
 * @license MIT
 */
define([],function(){"use strict";var exports={},e={};function t(e){return"object"!=typeof e||Array.isArray(e)||!function(e){var t;for(t in e)return!1;return!0}(e)}return define(["../highlight"],function(e){return{keywords:{keyword:"char uchar unichar int uint long ulong short ushort int8 int16 int32 int64 uint8 uint16 uint32 uint64 float double bool struct enum string void weak unowned owned async signal static abstract interface override virtual delegate if while do for foreach else switch case break default return try catch public private protected internal using new this get set const stdout stdin stderr var",built_in:"DBus GLib CCode Gee Object Gtk Posix",literal:"false true null"},contains:[{className:"class",beginKeywords:"class interface namespace",end:"{",excludeEnd:!0,illegal:"[^,:\\n\\s\\.]",contains:[e.UNDERSCORE_TITLE_MODE]},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,{className:"string",begin:'"""',end:'"""',relevance:5},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,e.C_NUMBER_MODE,{className:"meta",begin:"^#",end:"$",relevance:2}]}}),t(e)?e:t(exports)?exports:void 0});
//# sourceMappingURL=../sourcemaps/languages/vala.js.map
