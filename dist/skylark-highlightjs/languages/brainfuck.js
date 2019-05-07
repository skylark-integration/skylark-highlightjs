/**
 * skylark-highlightjs - A version of highlightjs.js that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-highlightjs/
 * @license MIT
 */
define(["../highlight"],function(e){var n={className:"literal",begin:"[\\+\\-]",relevance:0};return{aliases:["bf"],contains:[e.COMMENT("[^\\[\\]\\.,\\+\\-<> \r\n]","[\\[\\]\\.,\\+\\-<> \r\n]",{returnEnd:!0,relevance:0}),{className:"title",begin:"[\\[\\]]",relevance:0},{className:"string",begin:"[\\.,]",relevance:0},{begin:/\+\+|\-\-/,returnBegin:!0,contains:[n]},n]}});
//# sourceMappingURL=../sourcemaps/languages/brainfuck.js.map
