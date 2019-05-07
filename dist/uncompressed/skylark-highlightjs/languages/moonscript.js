define([], function () {
    'use strict';
    var exports = {};
    var module = { exports: {} };
    define(['../highlight'], function (hljs) {
        var KEYWORDS = {
            keyword: 'if then not for in while do return else elseif break continue switch and or ' + 'unless when class extends super local import export from using',
            literal: 'true false nil',
            built_in: '_G _VERSION assert collectgarbage dofile error getfenv getmetatable ipairs load ' + 'loadfile loadstring module next pairs pcall print rawequal rawget rawset require ' + 'select setfenv setmetatable tonumber tostring type unpack xpcall coroutine debug ' + 'io math os package string table'
        };
        var JS_IDENT_RE = '[A-Za-z$_][0-9A-Za-z$_]*';
        var SUBST = {
            className: 'subst',
            begin: /#\{/,
            end: /}/,
            keywords: KEYWORDS
        };
        var EXPRESSIONS = [
            hljs.inherit(hljs.C_NUMBER_MODE, {
                starts: {
                    end: '(\\s*/)?',
                    relevance: 0
                }
            }),
            {
                className: 'string',
                variants: [
                    {
                        begin: /'/,
                        end: /'/,
                        contains: [hljs.BACKSLASH_ESCAPE]
                    },
                    {
                        begin: /"/,
                        end: /"/,
                        contains: [
                            hljs.BACKSLASH_ESCAPE,
                            SUBST
                        ]
                    }
                ]
            },
            {
                className: 'built_in',
                begin: '@__' + hljs.IDENT_RE
            },
            { begin: '@' + hljs.IDENT_RE },
            { begin: hljs.IDENT_RE + '\\\\' + hljs.IDENT_RE }
        ];
        SUBST.contains = EXPRESSIONS;
        var TITLE = hljs.inherit(hljs.TITLE_MODE, { begin: JS_IDENT_RE });
        var PARAMS_RE = '(\\(.*\\))?\\s*\\B[-=]>';
        var PARAMS = {
            className: 'params',
            begin: '\\([^\\(]',
            returnBegin: true,
            contains: [{
                    begin: /\(/,
                    end: /\)/,
                    keywords: KEYWORDS,
                    contains: ['self'].concat(EXPRESSIONS)
                }]
        };
        return {
            aliases: ['moon'],
            keywords: KEYWORDS,
            illegal: /\/\*/,
            contains: EXPRESSIONS.concat([
                hljs.COMMENT('--', '$'),
                {
                    className: 'function',
                    begin: '^\\s*' + JS_IDENT_RE + '\\s*=\\s*' + PARAMS_RE,
                    end: '[-=]>',
                    returnBegin: true,
                    contains: [
                        TITLE,
                        PARAMS
                    ]
                },
                {
                    begin: /[\(,:=]\s*/,
                    relevance: 0,
                    contains: [{
                            className: 'function',
                            begin: PARAMS_RE,
                            end: '[-=]>',
                            returnBegin: true,
                            contains: [PARAMS]
                        }]
                },
                {
                    className: 'class',
                    beginKeywords: 'class',
                    end: '$',
                    illegal: /[:="\[\]]/,
                    contains: [
                        {
                            beginKeywords: 'extends',
                            endsWithParent: true,
                            illegal: /[:="\[\]]/,
                            contains: [TITLE]
                        },
                        TITLE
                    ]
                },
                {
                    className: 'name',
                    begin: JS_IDENT_RE + ':',
                    end: ':',
                    returnBegin: true,
                    returnEnd: true,
                    relevance: 0
                }
            ])
        };
    });
    function __isEmptyObject(obj) {
        var attr;
        for (attr in obj)
            return !1;
        return !0;
    }
    function __isValidToReturn(obj) {
        return typeof obj != 'object' || Array.isArray(obj) || !__isEmptyObject(obj);
    }
    if (__isValidToReturn(module.exports))
        return module.exports;
    else if (__isValidToReturn(exports))
        return exports;
});