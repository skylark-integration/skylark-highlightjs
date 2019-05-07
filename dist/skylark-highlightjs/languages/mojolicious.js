/**
 * skylark-highlightjs - A version of highlightjs.js that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-highlightjs/
 * @license MIT
 */
define(["../highlight"],function(e){return{subLanguage:"xml",contains:[{className:"meta",begin:"^__(END|DATA)__$"},{begin:"^\\s*%{1,2}={0,2}",end:"$",subLanguage:"perl"},{begin:"<%{1,2}={0,2}",end:"={0,1}%>",subLanguage:"perl",excludeBegin:!0,excludeEnd:!0}]}});
//# sourceMappingURL=../sourcemaps/languages/mojolicious.js.map
