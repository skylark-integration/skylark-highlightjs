/**
 * skylark-highlightjs - A version of highlightjs.js that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-highlightjs/
 * @license MIT
 */
define([],function(){"use strict";var e={},n={};function a(e){return"object"!=typeof e||Array.isArray(e)||!function(e){var n;for(n in e)return!1;return!0}(e)}return define(["../highlight"],function(e){var n={keyword:"if then not for in while do return else elseif break continue switch and or unless when class extends super local import export from using",literal:"true false nil",built_in:"_G _VERSION assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstring module next pairs pcall print rawequal rawget rawset require select setfenv setmetatable tonumber tostring type unpack xpcall coroutine debug io math os package string table"},a="[A-Za-z$_][0-9A-Za-z$_]*",i={className:"subst",begin:/#\{/,end:/}/,keywords:n},s=[e.inherit(e.C_NUMBER_MODE,{starts:{end:"(\\s*/)?",relevance:0}}),{className:"string",variants:[{begin:/'/,end:/'/,contains:[e.BACKSLASH_ESCAPE]},{begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,i]}]},{className:"built_in",begin:"@__"+e.IDENT_RE},{begin:"@"+e.IDENT_RE},{begin:e.IDENT_RE+"\\\\"+e.IDENT_RE}];i.contains=s;var t=e.inherit(e.TITLE_MODE,{begin:a}),r={className:"params",begin:"\\([^\\(]",returnBegin:!0,contains:[{begin:/\(/,end:/\)/,keywords:n,contains:["self"].concat(s)}]};return{aliases:["moon"],keywords:n,illegal:/\/\*/,contains:s.concat([e.COMMENT("--","$"),{className:"function",begin:"^\\s*"+a+"\\s*=\\s*(\\(.*\\))?\\s*\\B[-=]>",end:"[-=]>",returnBegin:!0,contains:[t,r]},{begin:/[\(,:=]\s*/,relevance:0,contains:[{className:"function",begin:"(\\(.*\\))?\\s*\\B[-=]>",end:"[-=]>",returnBegin:!0,contains:[r]}]},{className:"class",beginKeywords:"class",end:"$",illegal:/[:="\[\]]/,contains:[{beginKeywords:"extends",endsWithParent:!0,illegal:/[:="\[\]]/,contains:[t]},t]},{className:"name",begin:a+":",end:":",returnBegin:!0,returnEnd:!0,relevance:0}])}}),a(n)?n:a(e)?e:void 0});
//# sourceMappingURL=../sourcemaps/languages/moonscript.js.map