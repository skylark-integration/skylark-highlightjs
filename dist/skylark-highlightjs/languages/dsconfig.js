/**
 * skylark-highlightjs - A version of highlightjs.js that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-highlightjs/
 * @license MIT
 */
define(["../highlight"],function(e){return{keywords:"dsconfig",contains:[{className:"keyword",begin:"^dsconfig",end:"\\s",excludeEnd:!0,relevance:10},{className:"built_in",begin:"(list|create|get|set|delete)-(\\w+)",end:"\\s",excludeEnd:!0,illegal:"!@#$%^&*()",relevance:10},{className:"built_in",begin:"--(\\w+)",end:"\\s",excludeEnd:!0},{className:"string",begin:/"/,end:/"/},{className:"string",begin:/'/,end:/'/},{className:"string",begin:"[\\w-?]+:\\w+",end:"\\W",relevance:0},{className:"string",begin:"\\w+-?\\w+",end:"\\W",relevance:0},e.HASH_COMMENT_MODE]}});
//# sourceMappingURL=../sourcemaps/languages/dsconfig.js.map
