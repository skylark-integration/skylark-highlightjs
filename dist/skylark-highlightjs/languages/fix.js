/**
 * skylark-highlightjs - A version of highlightjs.js that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-highlightjs/
 * @license MIT
 */
define(["../highlight"],function(n){return{contains:[{begin:/[^\u2401\u0001]+/,end:/[\u2401\u0001]/,excludeEnd:!0,returnBegin:!0,returnEnd:!1,contains:[{begin:/([^\u2401\u0001=]+)/,end:/=([^\u2401\u0001=]+)/,returnEnd:!0,returnBegin:!1,className:"attr"},{begin:/=/,end:/([\u2401\u0001])/,excludeEnd:!0,excludeBegin:!0,className:"string"}]}],case_insensitive:!0}});
//# sourceMappingURL=../sourcemaps/languages/fix.js.map
