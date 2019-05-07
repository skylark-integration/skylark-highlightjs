/**
 * skylark-highlightjs - A version of highlightjs.js that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-highlightjs/
 * @license MIT
 */
define(["../highlight"],function(e){var n={className:"keyword",begin:"\\$(f[asn]|t|vp[rtd]|children)"},r={className:"number",begin:"\\b\\d+(\\.\\d+)?(e-?\\d+)?",relevance:0},i=e.inherit(e.QUOTE_STRING_MODE,{illegal:null}),s={className:"function",beginKeywords:"module function",end:"\\=|\\{",contains:[{className:"params",begin:"\\(",end:"\\)",contains:["self",r,i,n,{className:"literal",begin:"false|true|PI|undef"}]},e.UNDERSCORE_TITLE_MODE]};return{aliases:["scad"],keywords:{keyword:"function module include use for intersection_for if else \\%",literal:"false true PI undef",built_in:"circle square polygon text sphere cube cylinder polyhedron translate rotate scale resize mirror multmatrix color offset hull minkowski union difference intersection abs sign sin cos tan acos asin atan atan2 floor round ceil ln log pow sqrt exp rands min max concat lookup str chr search version version_num norm cross parent_module echo import import_dxf dxf_linear_extrude linear_extrude rotate_extrude surface projection render children dxf_cross dxf_dim let assign"},contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,r,{className:"meta",keywords:{"meta-keyword":"include use"},begin:"include|use <",end:">"},i,n,{begin:"[*!#%]",relevance:0},s]}});
//# sourceMappingURL=../sourcemaps/languages/openscad.js.map
