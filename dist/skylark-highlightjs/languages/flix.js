/**
 * skylark-highlightjs - A version of highlightjs.js that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-highlightjs/
 * @license MIT
 */
define(["../highlight"],function(e){var n={className:"function",beginKeywords:"def",end:/[:={\[(\n;]/,excludeEnd:!0,contains:[{className:"title",begin:/[^0-9\n\t "'(),.`{}\[\]:;][^\n\t "'(),.`{}\[\]:;]+|[^0-9\n\t "'(),.`{}\[\]:;=]/}]};return{keywords:{literal:"true false",keyword:"case class def else enum if impl import in lat rel index let match namespace switch type yield with"},contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,{className:"string",begin:/'(.|\\[xXuU][a-zA-Z0-9]+)'/},{className:"string",variants:[{begin:'"',end:'"'}]},n,e.C_NUMBER_MODE]}});
//# sourceMappingURL=../sourcemaps/languages/flix.js.map
