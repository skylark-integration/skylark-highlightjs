/*
Language: LDIF
Contributors: Jacob Childress <jacobc@gmail.com>
Category: enterprise, config
*/
define([
  "../highlight"
],function(hljs){
  return {
    contains: [
      {
        className: 'attribute',
        begin: '^dn', end: ': ', excludeEnd: true,
        starts: {end: '$', relevance: 0},
        relevance: 10
      },
      {
        className: 'attribute',
        begin: '^\\w', end: ': ', excludeEnd: true,
        starts: {end: '$', relevance: 0}
      },
      {
        className: 'literal',
        begin: '^-', end: '$'
      },
      hljs.HASH_COMMENT_MODE
    ]
  };
});