/**
 * skylark-highlightjs - A version of highlightjs.js that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-highlightjs/
 * @license MIT
 */
define(["../highlight"],function(n){return{contains:[{className:"attribute",begin:/</,end:/>/},{begin:/::=/,starts:{end:/$/,contains:[{begin:/</,end:/>/},n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE,n.APOS_STRING_MODE,n.QUOTE_STRING_MODE]}}]}});
//# sourceMappingURL=../sourcemaps/languages/bnf.js.map
