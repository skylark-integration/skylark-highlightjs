/**
 * skylark-highlightjs - A version of highlightjs.js that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-highlightjs/
 * @license MIT
 */
define(["../highlight"],function(e){return{aliases:["i7"],case_insensitive:!0,keywords:{keyword:"thing room person man woman animal container supporter backdrop door scenery open closed locked inside gender is are say understand kind of rule"},contains:[{className:"string",begin:'"',end:'"',relevance:0,contains:[{className:"subst",begin:"\\[",end:"\\]"}]},{className:"section",begin:/^(Volume|Book|Part|Chapter|Section|Table)\b/,end:"$"},{begin:/^(Check|Carry out|Report|Instead of|To|Rule|When|Before|After)\b/,end:":",contains:[{begin:"\\(This",end:"\\)"}]},{className:"comment",begin:"\\[",end:"\\]",contains:["self"]}]}});
//# sourceMappingURL=../sourcemaps/languages/inform7.js.map
