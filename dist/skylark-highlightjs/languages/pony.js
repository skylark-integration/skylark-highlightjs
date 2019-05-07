/**
 * skylark-highlightjs - A version of highlightjs.js that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-highlightjs/
 * @license MIT
 */
define(["../highlight"],function(e){return{keywords:{keyword:"actor addressof and as be break class compile_error compile_intrinsic consume continue delegate digestof do else elseif embed end error for fun if ifdef in interface is isnt lambda let match new not object or primitive recover repeat return struct then trait try type until use var where while with xor",meta:"iso val tag trn box ref",literal:"this false true"},contains:[{className:"type",begin:"\\b_?[A-Z][\\w]*",relevance:0},{className:"string",begin:'"""',end:'"""',relevance:10},{className:"string",begin:'"',end:'"',contains:[e.BACKSLASH_ESCAPE]},{className:"string",begin:"'",end:"'",contains:[e.BACKSLASH_ESCAPE],relevance:0},{begin:e.IDENT_RE+"'",relevance:0},e.C_NUMBER_MODE,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]}});
//# sourceMappingURL=../sourcemaps/languages/pony.js.map
