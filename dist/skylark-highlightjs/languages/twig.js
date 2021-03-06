/**
 * skylark-highlightjs - A version of highlightjs.js that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-highlightjs/
 * @license MIT
 */
define(["../highlight"],function(e){var a="attribute block constant cycle date dump include max min parent random range source template_from_string",n={beginKeywords:a,keywords:{name:a},relevance:0,contains:[{className:"params",begin:"\\(",end:"\\)"}]},t={begin:/\|[A-Za-z_]+:?/,keywords:"abs batch capitalize convert_encoding date date_modify default escape first format join json_encode keys last length lower merge nl2br number_format raw replace reverse round slice sort split striptags title trim upper url_encode",contains:[n]},s="autoescape block do embed extends filter flush for if import include macro sandbox set spaceless use verbatim";return s=s+" "+s.split(" ").map(function(e){return"end"+e}).join(" "),{aliases:["craftcms"],case_insensitive:!0,subLanguage:"xml",contains:[e.COMMENT(/\{#/,/#}/),{className:"template-tag",begin:/\{%/,end:/%}/,contains:[{className:"name",begin:/\w+/,keywords:s,starts:{endsWithParent:!0,contains:[t,n],relevance:0}}]},{className:"template-variable",begin:/\{\{/,end:/}}/,contains:["self",t,n]}]}});
//# sourceMappingURL=../sourcemaps/languages/twig.js.map
