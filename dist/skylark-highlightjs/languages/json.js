/**
 * skylark-highlightjs - A version of highlightjs.js that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-highlightjs/
 * @license MIT
 */
define(["../highlight"],function(n){var e={literal:"true false null"},i=[n.QUOTE_STRING_MODE,n.C_NUMBER_MODE],l={end:",",endsWithParent:!0,excludeEnd:!0,contains:i,keywords:e},t={begin:"{",end:"}",contains:[{className:"attr",begin:/"/,end:/"/,contains:[n.BACKSLASH_ESCAPE],illegal:"\\n"},n.inherit(l,{begin:/:/})],illegal:"\\S"},a={begin:"\\[",end:"\\]",contains:[n.inherit(l)],illegal:"\\S"};return i.splice(i.length,0,t,a),{contains:i,keywords:e,illegal:"\\S"}});
//# sourceMappingURL=../sourcemaps/languages/json.js.map
