// This template generates the file we can run tests on.
// It sets up underscore, then extends it with the medley.
// The compiled script is placed in `../tmp/`

var _ = module.exports = require( 'underscore' );

var _ = require('underscore');

_.mixin({

  containsAny: function( container, containees ) {

    return _.intersection( container, containees ).length;

  },

  containsAll: function( container, containees ) {

    var intersect = _.intersection( container, containees );

    return ( intersect.length === containees.length );

  },

  isSet: function( thing ) {

    return (thing !== null && thing !== undefined);

  }

});

