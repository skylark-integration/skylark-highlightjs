define([], function () {
    'use strict';
    var exports = {};
    var module = { exports: {} };
    define(['../highlight'], function (hljs) {
        var IDENT_RE = '([a-zA-Z]|\\.[a-zA-Z.])[a-zA-Z0-9._]*';
        return {
            contains: [
                hljs.HASH_COMMENT_MODE,
                {
                    begin: IDENT_RE,
                    lexemes: IDENT_RE,
                    keywords: {
                        keyword: 'function if in break next repeat else for return switch while try tryCatch ' + 'stop warning require library attach detach source setMethod setGeneric ' + 'setGroupGeneric setClass ...',
                        literal: 'NULL NA TRUE FALSE T F Inf NaN NA_integer_|10 NA_real_|10 NA_character_|10 ' + 'NA_complex_|10'
                    },
                    relevance: 0
                },
                {
                    className: 'number',
                    begin: '0[xX][0-9a-fA-F]+[Li]?\\b',
                    relevance: 0
                },
                {
                    className: 'number',
                    begin: '\\d+(?:[eE][+\\-]?\\d*)?L\\b',
                    relevance: 0
                },
                {
                    className: 'number',
                    begin: '\\d+\\.(?!\\d)(?:i\\b)?',
                    relevance: 0
                },
                {
                    className: 'number',
                    begin: '\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d*)?i?\\b',
                    relevance: 0
                },
                {
                    className: 'number',
                    begin: '\\.\\d+(?:[eE][+\\-]?\\d*)?i?\\b',
                    relevance: 0
                },
                {
                    begin: '`',
                    end: '`',
                    relevance: 0
                },
                {
                    className: 'string',
                    contains: [hljs.BACKSLASH_ESCAPE],
                    variants: [
                        {
                            begin: '"',
                            end: '"'
                        },
                        {
                            begin: "'",
                            end: "'"
                        }
                    ]
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