/**
 * skylark-highlightjs - A version of highlightjs.js that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-highlightjs/
 * @license MIT
 */
define(["../highlight"],function(e){var n={className:"string",contains:[e.BACKSLASH_ESCAPE],variants:[{begin:"'''",end:"'''",relevance:10},{begin:'"""',end:'"""',relevance:10},{begin:'"',end:'"'},{begin:"'",end:"'"}]};return{aliases:["toml"],case_insensitive:!0,illegal:/\S/,contains:[e.COMMENT(";","$"),e.HASH_COMMENT_MODE,{className:"section",begin:/^\s*\[+/,end:/\]+/},{begin:/^[a-z0-9\[\]_\.-]+\s*=\s*/,end:"$",returnBegin:!0,contains:[{className:"attr",begin:/[a-z0-9\[\]_\.-]+/},{begin:/=/,endsWithParent:!0,relevance:0,contains:[{className:"literal",begin:/\bon|off|true|false|yes|no\b/},{className:"variable",variants:[{begin:/\$[\w\d"][\w\d_]*/},{begin:/\$\{(.*?)}/}]},n,{className:"number",begin:/([\+\-]+)?[\d]+_[\d_]+/},e.NUMBER_MODE]}]}]}});
//# sourceMappingURL=../sourcemaps/languages/ini.js.map
