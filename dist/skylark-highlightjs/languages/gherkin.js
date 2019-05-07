/**
 * skylark-highlightjs - A version of highlightjs.js that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-highlightjs/
 * @license MIT
 */
define(["../highlight"],function(e){return{aliases:["feature"],keywords:"Feature Background Ability Business Need Scenario Scenarios Scenario Outline Scenario Template Examples Given And Then But When",contains:[{className:"symbol",begin:"\\*",relevance:0},{className:"meta",begin:"@[^@\\s]+"},{begin:"\\|",end:"\\|\\w*$",contains:[{className:"string",begin:"[^|]+"}]},{className:"variable",begin:"<",end:">"},e.HASH_COMMENT_MODE,{className:"string",begin:'"""',end:'"""'},e.QUOTE_STRING_MODE]}});
//# sourceMappingURL=../sourcemaps/languages/gherkin.js.map
