/**
 * skylark-highlightjs - A version of highlightjs.js that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-highlightjs/
 * @license MIT
 */
define(["../highlight"],function(e){var a={className:"params",begin:/\(/,end:/\)/,contains:[{begin:/[\w-]+ *=/,returnBegin:!0,relevance:0,contains:[{className:"attr",begin:/[\w-]+/}]}],relevance:0};return{aliases:["wildfly-cli"],lexemes:"[a-z-]+",keywords:{keyword:"alias batch cd clear command connect connection-factory connection-info data-source deploy deployment-info deployment-overlay echo echo-dmr help history if jdbc-driver-info jms-queue|20 jms-topic|20 ls patch pwd quit read-attribute read-operation reload rollout-plan run-batch set shutdown try unalias undeploy unset version xa-data-source",literal:"true false"},contains:[e.HASH_COMMENT_MODE,e.QUOTE_STRING_MODE,{className:"params",begin:/--[\w\-=\/]+/},{className:"function",begin:/:[\w\-.]+/,relevance:0},{className:"string",begin:/\B(([\/.])[\w\-.\/=]+)+/},a]}});
//# sourceMappingURL=../sourcemaps/languages/jboss-cli.js.map
