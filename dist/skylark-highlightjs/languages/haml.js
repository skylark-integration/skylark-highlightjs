/**
 * skylark-highlightjs - A version of highlightjs.js that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-highlightjs/
 * @license MIT
 */
define(["../highlight"],function(e){return{case_insensitive:!0,contains:[{className:"meta",begin:"^!!!( (5|1\\.1|Strict|Frameset|Basic|Mobile|RDFa|XML\\b.*))?$",relevance:10},e.COMMENT("^\\s*(!=#|=#|-#|/).*$",!1,{relevance:0}),{begin:"^\\s*(-|=|!=)(?!#)",starts:{end:"\\n",subLanguage:"ruby"}},{className:"tag",begin:"^\\s*%",contains:[{className:"selector-tag",begin:"\\w+"},{className:"selector-id",begin:"#[\\w-]+"},{className:"selector-class",begin:"\\.[\\w-]+"},{begin:"{\\s*",end:"\\s*}",contains:[{begin:":\\w+\\s*=>",end:",\\s+",returnBegin:!0,endsWithParent:!0,contains:[{className:"attr",begin:":\\w+"},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,{begin:"\\w+",relevance:0}]}]},{begin:"\\(\\s*",end:"\\s*\\)",excludeEnd:!0,contains:[{begin:"\\w+\\s*=",end:"\\s+",returnBegin:!0,endsWithParent:!0,contains:[{className:"attr",begin:"\\w+",relevance:0},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,{begin:"\\w+",relevance:0}]}]}]},{begin:"^\\s*[=~]\\s*"},{begin:"#{",starts:{end:"}",subLanguage:"ruby"}}]}});
//# sourceMappingURL=../sourcemaps/languages/haml.js.map
