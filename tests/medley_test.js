'use strict';

// Require the built script
var
_          = require( '../tmp/test-script.built.js' ),
oneToThree = [ 1, 2, 3 ],
fourToSix  = [ 4, 5, 6 ],
sixToEight = [ 6, 7, 8 ],
sixToTen   = [ 6, 7, 8, 9, 10 ],
someObj    = {
  one: true,
  two: false
},
someOtherObj = {
  one: true,
  three: true
},
unsetVar;

exports.medley = {

  containsAny: function( test ) {

    test.expect( 4 );

    test.ok( !_.containsAny(someObj, someOtherObj), "containsAny doesn't work on objects" );
    test.ok( !_.containsAny(oneToThree, fourToSix), "4-6 isn't contained within 1-3" );
    test.ok( _.containsAny(fourToSix, sixToEight), "4-6 should be contained within 6-8" );
    test.ok( _.containsAny(sixToEight, sixToTen), "6-10 should be found within 6-8" );
    
    test.done();

  },

  containsAll: function( test ) {

    test.expect( 3 );

    test.ok( !_.containsAll(fourToSix, sixToEight), "6-8 doesn't contain all of 4-6" );
    test.ok( !_.containsAll(sixToEight, sixToTen), "6-8 doesn't contain all of 6-10" );
    test.ok( _.containsAll(sixToTen, sixToEight), "6-8 should be found within 6-10");

    test.done();

  },

  isSet: function( test ) {

    test.expect( 4 );

    test.ok( !_.isSet( null ), "Null should not be evaluated as set" );
    test.ok( !_.isSet( undefined ), "Undefined should not be evaluated as set" );
    test.ok( !_.isSet( unsetVar ), "unsetVar isn't set" );
    test.ok( _.isSet( oneToThree ), "oneToThree is actually set" );

    test.done();

  }

};