define([], function () {
    'use strict';
    var exports = {};
    var module = { exports: {} };
    define(['../highlight'], function (hljs) {
        var JAVA_IDENT_RE = '[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*';
        var GENERIC_IDENT_RE = JAVA_IDENT_RE + '(<' + JAVA_IDENT_RE + '(\\s*,\\s*' + JAVA_IDENT_RE + ')*>)?';
        var KEYWORDS = 'false synchronized int abstract float private char boolean var static null if const ' + 'for true while long strictfp finally protected import native final void ' + 'enum else break transient catch instanceof byte super volatile case assert short ' + 'package default double public try this switch continue throws protected public private ' + 'module requires exports do';
        var JAVA_NUMBER_RE = '\\b' + '(' + '0[bB]([01]+[01_]+[01]+|[01]+)' + '|' + '0[xX]([a-fA-F0-9]+[a-fA-F0-9_]+[a-fA-F0-9]+|[a-fA-F0-9]+)' + '|' + '(' + '([\\d]+[\\d_]+[\\d]+|[\\d]+)(\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))?' + '|' + '\\.([\\d]+[\\d_]+[\\d]+|[\\d]+)' + ')' + '([eE][-+]?\\d+)?' + ')' + '[lLfF]?';
        var JAVA_NUMBER_MODE = {
            className: 'number',
            begin: JAVA_NUMBER_RE,
            relevance: 0
        };
        return {
            aliases: ['jsp'],
            keywords: KEYWORDS,
            illegal: /<\/|#/,
            contains: [
                hljs.COMMENT('/\\*\\*', '\\*/', {
                    relevance: 0,
                    contains: [
                        {
                            begin: /\w+@/,
                            relevance: 0
                        },
                        {
                            className: 'doctag',
                            begin: '@[A-Za-z]+'
                        }
                    ]
                }),
                hljs.C_LINE_COMMENT_MODE,
                hljs.C_BLOCK_COMMENT_MODE,
                hljs.APOS_STRING_MODE,
                hljs.QUOTE_STRING_MODE,
                {
                    className: 'class',
                    beginKeywords: 'class interface',
                    end: /[{;=]/,
                    excludeEnd: true,
                    keywords: 'class interface',
                    illegal: /[:"\[\]]/,
                    contains: [
                        { beginKeywords: 'extends implements' },
                        hljs.UNDERSCORE_TITLE_MODE
                    ]
                },
                {
                    beginKeywords: 'new throw return else',
                    relevance: 0
                },
                {
                    className: 'function',
                    begin: '(' + GENERIC_IDENT_RE + '\\s+)+' + hljs.UNDERSCORE_IDENT_RE + '\\s*\\(',
                    returnBegin: true,
                    end: /[{;=]/,
                    excludeEnd: true,
                    keywords: KEYWORDS,
                    contains: [
                        {
                            begin: hljs.UNDERSCORE_IDENT_RE + '\\s*\\(',
                            returnBegin: true,
                            relevance: 0,
                            contains: [hljs.UNDERSCORE_TITLE_MODE]
                        },
                        {
                            className: 'params',
                            begin: /\(/,
                            end: /\)/,
                            keywords: KEYWORDS,
                            relevance: 0,
                            contains: [
                                hljs.APOS_STRING_MODE,
                                hljs.QUOTE_STRING_MODE,
                                hljs.C_NUMBER_MODE,
                                hljs.C_BLOCK_COMMENT_MODE
                            ]
                        },
                        hljs.C_LINE_COMMENT_MODE,
                        hljs.C_BLOCK_COMMENT_MODE
                    ]
                },
                JAVA_NUMBER_MODE,
                {
                    className: 'meta',
                    begin: '@[A-Za-z]+'
                }
            ]
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