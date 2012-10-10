// TODO:
// - double or single quotes?
// - refine constructor and module definitions
// - repeat var in variable declarations?
//
// a lot of this is taken from: https://code.google.com/p/google-styleguide/

var arr = [1, 2, 3];  // No space after [ or before ].
var obj = {a: 1, b: 2, c: 3};  // No space after { or before }.

// naming conventions
var SYMBOLIC_CONSTANTS_LIKE_THIS = 42;
var variableNamesLikeThis = 'a variable';
var functionNamesLikeThis = function () {} // no semicolon after functions, if statements, and loops.
function ClassNamesLikeThis () {}
ClassNamesLikeThis.prototype.methodNamesLikeThis = function() {}


if (foo === true) {
	// statements
} else {
	// statements
}


for (var i = 0; i < 100; i++) {
	// statements
}


function fooFunc(requiredArgA, requiredArgN, options) {
	var foo = 'value';
	this.options = options || {};

	// all statements after the variables declarations.
}


// Module
(function( global ) {
	var Module = function() {
		var data = 'secret';
	}

	Module.prototype.getProperty = function() {
		// get the current value of `data`
		return data;
	}

	Module.prototype.setProperty: function( value ) {
		return ( data = value );
	}

	// expose our module to the global object
	global.Module = Module;

})( this );


// A Practical Constructor
(function( global ) {
	// booleans have 'is', 'has', ''
	var isActive = true;

	function Ctor( foo ) {
	this.foo = foo;
	return this;
	}

	Ctor.prototype.getNames = function() {
	return this.foo;
	};

	// private functions have underscore appended
	getPrivateFoo_ = function() {
	return this.foo;
	};

	// expose our constructor to the global object
	global.ctor = ctor;

})( this );