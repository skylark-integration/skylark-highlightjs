/**
 * skylark-highlightjs - A version of highlightjs.js that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-highlightjs/
 * @license MIT
 */
define(["../highlight"],function(e){var n={keyword:"rec with let in inherit assert if else then",literal:"true false or and null",built_in:"import abort baseNameOf dirOf isNull builtins map removeAttrs throw toString derivation"},i={className:"subst",begin:/\$\{/,end:/}/,keywords:n},t={className:"string",contains:[i],variants:[{begin:"''",end:"''"},{begin:'"',end:'"'}]},s=[e.NUMBER_MODE,e.HASH_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,t,{begin:/[a-zA-Z0-9-_]+(\s*=)/,returnBegin:!0,relevance:0,contains:[{className:"attr",begin:/\S+/}]}];return i.contains=s,{aliases:["nixos"],keywords:n,contains:s}});
//# sourceMappingURL=../sourcemaps/languages/nix.js.map
