/**
 * skylark-highlightjs - A version of highlightjs.js that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-highlightjs/
 * @license MIT
 */
define(["../highlight"],function(e){return{contains:[{className:"function",begin:"#+[A-Za-z_0-9]*\\(",end:" {",returnBegin:!0,excludeEnd:!0,contains:[{className:"keyword",begin:"#+"},{className:"title",begin:"[A-Za-z_][A-Za-z_0-9]*"},{className:"params",begin:"\\(",end:"\\)",endsParent:!0,contains:[{className:"string",begin:'"',end:'"'},{className:"variable",begin:"[A-Za-z_][A-Za-z_0-9]*"}]}]}]}});
//# sourceMappingURL=../sourcemaps/languages/leaf.js.map
