/**
 * skylark-highlightjs - A version of highlightjs.js that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-highlightjs/
 * @license MIT
 */
define(["../highlight"],function(e){return{contains:[{className:"number",begin:"\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b"},{className:"number",begin:"\\b\\d+\\b",relevance:0},{className:"string",begin:'"(GET|POST|HEAD|PUT|DELETE|CONNECT|OPTIONS|PATCH|TRACE)',end:'"',keywords:"GET POST HEAD PUT DELETE CONNECT OPTIONS PATCH TRACE",illegal:"\\n",relevance:10},{className:"string",begin:/\[/,end:/\]/,illegal:"\\n"},{className:"string",begin:'"',end:'"',illegal:"\\n"}]}});
//# sourceMappingURL=../sourcemaps/languages/accesslog.js.map
