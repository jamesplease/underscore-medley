// A collection of mixins for Underscore

_.mixin({

  // Determine is any elements of `containees` is in `container`
  containsAny: function( container, containees ) {

    return _.intersection( container, containees ).length;

  },

  // True when `containees` is wholly contained in `container`
  containsAll: function( container, containees ) {

    var intersect = _.intersection( container, containees );

    return ( intersect.length === containees.length );

  },

  // Whether or not it's okay to access a variable's properties
  isSet: function( thing ) {

    return (thing !== null && thing !== undefined);

  }

});