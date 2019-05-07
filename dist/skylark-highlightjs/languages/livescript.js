/**
 * skylark-highlightjs - A version of highlightjs.js that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-highlightjs/
 * @license MIT
 */
define([],function(){"use strict";var e={},n={};function i(e){return"object"!=typeof e||Array.isArray(e)||!function(e){var n;for(n in e)return!1;return!0}(e)}return define(["../highlight"],function(e){var n={keyword:"in if for while finally new do return else break catch instanceof throw try this switch continue typeof delete debugger case default function var with then unless until loop of by when and or is isnt not it that otherwise from to til fallthrough super case default function var void const let enum export import native __hasProp __extends __slice __bind __indexOf",literal:"true false null undefined yes no on off it that void",built_in:"npm require console print module global window document"},i="[A-Za-z$_](?:-[0-9A-Za-z$_]|[0-9A-Za-z$_])*",s=e.inherit(e.TITLE_MODE,{begin:i}),a={className:"subst",begin:/#\{/,end:/}/,keywords:n},t={className:"subst",begin:/#[A-Za-z$_]/,end:/(?:\-[0-9A-Za-z$_]|[0-9A-Za-z$_])*/,keywords:n},r=[e.BINARY_NUMBER_MODE,{className:"number",begin:"(\\b0[xX][a-fA-F0-9_]+)|(\\b\\d(\\d|_\\d)*(\\.(\\d(\\d|_\\d)*)?)?(_*[eE]([-+]\\d(_\\d|\\d)*)?)?[_a-z]*)",relevance:0,starts:{end:"(\\s*/)?",relevance:0}},{className:"string",variants:[{begin:/'''/,end:/'''/,contains:[e.BACKSLASH_ESCAPE]},{begin:/'/,end:/'/,contains:[e.BACKSLASH_ESCAPE]},{begin:/"""/,end:/"""/,contains:[e.BACKSLASH_ESCAPE,a,t]},{begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,a,t]},{begin:/\\/,end:/(\s|$)/,excludeEnd:!0}]},{className:"regexp",variants:[{begin:"//",end:"//[gim]*",contains:[a,e.HASH_COMMENT_MODE]},{begin:/\/(?![ *])(\\\/|.)*?\/[gim]*(?=\W|$)/}]},{begin:"@"+i},{begin:"``",end:"``",excludeBegin:!0,excludeEnd:!0,subLanguage:"javascript"}];a.contains=r;var o={className:"params",begin:"\\(",returnBegin:!0,contains:[{begin:/\(/,end:/\)/,keywords:n,contains:["self"].concat(r)}]};return{aliases:["ls"],keywords:n,illegal:/\/\*/,contains:r.concat([e.COMMENT("\\/\\*","\\*\\/"),e.HASH_COMMENT_MODE,{className:"function",contains:[s,o],returnBegin:!0,variants:[{begin:"("+i+"\\s*(?:=|:=)\\s*)?(\\(.*\\))?\\s*\\B\\->\\*?",end:"\\->\\*?"},{begin:"("+i+"\\s*(?:=|:=)\\s*)?!?(\\(.*\\))?\\s*\\B[-~]{1,2}>\\*?",end:"[-~]{1,2}>\\*?"},{begin:"("+i+"\\s*(?:=|:=)\\s*)?(\\(.*\\))?\\s*\\B!?[-~]{1,2}>\\*?",end:"!?[-~]{1,2}>\\*?"}]},{className:"class",beginKeywords:"class",end:"$",illegal:/[:="\[\]]/,contains:[{beginKeywords:"extends",endsWithParent:!0,illegal:/[:="\[\]]/,contains:[s]},s]},{begin:i+":",end:":",returnBegin:!0,returnEnd:!0,relevance:0}])}}),i(n)?n:i(e)?e:void 0});
//# sourceMappingURL=../sourcemaps/languages/livescript.js.map
