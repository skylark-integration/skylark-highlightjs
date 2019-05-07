define([], function () {
    'use strict';
    var exports = {};
    var module = { exports: {} };
    define(['../highlight'], function (hljs) {
        var INTEGER_RE = '\\d(_|\\d)*';
        var EXPONENT_RE = '[eE][-+]?' + INTEGER_RE;
        var DECIMAL_LITERAL_RE = INTEGER_RE + '(\\.' + INTEGER_RE + ')?' + '(' + EXPONENT_RE + ')?';
        var BASED_INTEGER_RE = '\\w+';
        var BASED_LITERAL_RE = INTEGER_RE + '#' + BASED_INTEGER_RE + '(\\.' + BASED_INTEGER_RE + ')?' + '#' + '(' + EXPONENT_RE + ')?';
        var NUMBER_RE = '\\b(' + BASED_LITERAL_RE + '|' + DECIMAL_LITERAL_RE + ')';
        var ID_REGEX = '[A-Za-z](_?[A-Za-z0-9.])*';
        var BAD_CHARS = '[]{}%#\'"';
        var COMMENTS = hljs.COMMENT('--', '$');
        var VAR_DECLS = {
            begin: '\\s+:\\s+',
            end: '\\s*(:=|;|\\)|=>|$)',
            illegal: BAD_CHARS,
            contains: [
                {
                    beginKeywords: 'loop for declare others',
                    endsParent: true
                },
                {
                    className: 'keyword',
                    beginKeywords: 'not null constant access function procedure in out aliased exception'
                },
                {
                    className: 'type',
                    begin: ID_REGEX,
                    endsParent: true,
                    relevance: 0
                }
            ]
        };
        return {
            case_insensitive: true,
            keywords: {
                keyword: 'abort else new return abs elsif not reverse abstract end ' + 'accept entry select access exception of separate aliased exit or some ' + 'all others subtype and for out synchronized array function overriding ' + 'at tagged generic package task begin goto pragma terminate ' + 'body private then if procedure type case in protected constant interface ' + 'is raise use declare range delay limited record when delta loop rem while ' + 'digits renames with do mod requeue xor',
                literal: 'True False'
            },
            contains: [
                COMMENTS,
                {
                    className: 'string',
                    begin: /"/,
                    end: /"/,
                    contains: [{
                            begin: /""/,
                            relevance: 0
                        }]
                },
                {
                    className: 'string',
                    begin: /'.'/
                },
                {
                    className: 'number',
                    begin: NUMBER_RE,
                    relevance: 0
                },
                {
                    className: 'symbol',
                    begin: "'" + ID_REGEX
                },
                {
                    className: 'title',
                    begin: '(\\bwith\\s+)?(\\bprivate\\s+)?\\bpackage\\s+(\\bbody\\s+)?',
                    end: '(is|$)',
                    keywords: 'package body',
                    excludeBegin: true,
                    excludeEnd: true,
                    illegal: BAD_CHARS
                },
                {
                    begin: '(\\b(with|overriding)\\s+)?\\b(function|procedure)\\s+',
                    end: '(\\bis|\\bwith|\\brenames|\\)\\s*;)',
                    keywords: 'overriding function procedure with is renames return',
                    returnBegin: true,
                    contains: [
                        COMMENTS,
                        {
                            className: 'title',
                            begin: '(\\bwith\\s+)?\\b(function|procedure)\\s+',
                            end: '(\\(|\\s+|$)',
                            excludeBegin: true,
                            excludeEnd: true,
                            illegal: BAD_CHARS
                        },
                        VAR_DECLS,
                        {
                            className: 'type',
                            begin: '\\breturn\\s+',
                            end: '(\\s+|;|$)',
                            keywords: 'return',
                            excludeBegin: true,
                            excludeEnd: true,
                            endsParent: true,
                            illegal: BAD_CHARS
                        }
                    ]
                },
                {
                    className: 'type',
                    begin: '\\b(sub)?type\\s+',
                    end: '\\s+',
                    keywords: 'type',
                    excludeBegin: true,
                    illegal: BAD_CHARS
                },
                VAR_DECLS
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