define([], function () {
    'use strict';
    var exports = {};
    var module = { exports: {} };
    define(['../highlight'], function (hljs) {
        var BUILT_IN_TYPES = 'bool byte i16 i32 i64 double string binary';
        return {
            keywords: {
                keyword: 'namespace const typedef struct enum service exception void oneway set list map required optional',
                built_in: BUILT_IN_TYPES,
                literal: 'true false'
            },
            contains: [
                hljs.QUOTE_STRING_MODE,
                hljs.NUMBER_MODE,
                hljs.C_LINE_COMMENT_MODE,
                hljs.C_BLOCK_COMMENT_MODE,
                {
                    className: 'class',
                    beginKeywords: 'struct enum service exception',
                    end: /\{/,
                    illegal: /\n/,
                    contains: [hljs.inherit(hljs.TITLE_MODE, {
                            starts: {
                                endsWithParent: true,
                                excludeEnd: true
                            }
                        })]
                },
                {
                    begin: '\\b(set|list|map)\\s*<',
                    end: '>',
                    keywords: BUILT_IN_TYPES,
                    contains: ['self']
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