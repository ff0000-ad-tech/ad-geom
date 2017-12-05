/** 
	@class Vector2D
	@param {number} x
	@param {number} y
	@desc
		A simple 2D Vector classs 
	@example
		var myVector1 = new Vector2D( 0, 320 );
		var myVector2 = new Vector2D( -3, 5.5 );
*/
import { MathUtils } from 'ad-utils'

var Vector2D = function ( x, y ) {
	this.x = x || 0;
	this.y = y || 0;
};

Vector2D.prototype = {
	/** 
		@memberOf Vector2D
		@method add
		@param {Vector2D} v
		@returns {Vector2D}
		@desc
			Adds another vector to itself
		@example
	        	myVector1.add( myVector2 );
	*/
	add: function ( v ) {
		this.x += v.x;
		this.y += v.y;
		return this;
	},


	/** 
		@memberOf Vector2D
		@method sub
		@param {Vector2D} v
		@returns {Vector2D}
		@desc
			Subtracts another vector from itself
 		@example
	        	myVector1.sub( myVector2 );
    */
	sub: function ( v ) {
		this.x -= v.x;
		this.y -= v.y;
		return this;
	},


	/** 
		@memberOf Vector2D
		@method dist
		@param {Vector2D} v
		@returns {number} The distance between two vectors as locations
		@example
	        	var distance = myVector.dist( myVector2 );
    */
	dist: function ( v ) {
		var x = this.x - v.x;
		var y = this.y - v.y;
		return Math.sqrt( x * x + y * y );
	},


	/** 
		@memberOf Vector2D
		@method mult
		@param {number} s 
		@desc
			Multiplies X and Y of the vector by s
		@example
	        	myVector.mult( 10.3 );
    */
	mult: function ( s ) { 
		this.x *= s;
		this.y *= s;
		return this;
	},


	/** 
		@memberOf Vector2D
		@method div
		@param {number} s
		@returns {Vector2D}
		@desc
			Divides X and Y of the vector by s
		@example
	        	myVector.div( 2 );
    */
	div: function ( s ) {
		this.x /= s;
		this.y /= s;
		return this;
	},


	/** 
		@memberOf Vector2D
		@method limit
		@param {number} s
		@returns {Vector2D}
		@desc
			Limits the length of the vector if it's longer than s
		@example
	        	myVector.limit( 18.2 );
    */
	limit: function ( s ) {
		var m = this.length();
		if( m > s ) {
			this.mult( s / m );
		}
		return this;
	},


	/** 
		@memberOf Vector2D
		@method length
		@returns {number} The length of the vector.
		@example
	        	var length = myVector.length();
    */
	length: function () {
		return Math.sqrt( this.x * this.x + this.y * this.y );
	},


	/** 
		@memberOf Vector2D
		@method normalize
		@returns {Vector2D}
		@desc
			Normalizes the vector( ie scale the vector to length of 1 )
		@example
	        	myVector.normalize();
    */
	normalize: function () {
		var ratio = 1 / this.length();
		return this.mult( ratio );
	},


	/** 
		@memberOf Vector2D
		@method clone
		@returns {Vector2D}
		@desc
			Creates a new Vector2D with and same x and y
		@example
	        	var newVecotor = myVector.clone();
    */
	clone: function () {
		return new Vector2D( this.x, this.y );
	}

};


/** 
	@memberOf Vector2D
	@method degreeToVector
	@returns {Vector2D}
	@desc
		Converts a degree 0 - 360 to a normalized vector
	@example
	    	var myVecotor = Vector2D.degreeToVector( 45 );
*/
Vector2D.degreeToVector = function ( d ) {
	var theta = MathUtils.toRadians( d );
	return new Vector2D( Math.cos( theta ), Math.sin( theta ));
}


/** 
	@memberOf Vector2D
	@method random
	@param {number} degreeIncrement
		Optional, the degree increment of the random vector, defaults to 0.01
	@returns {Vector2D}
	@desc
		Returns a random normalized vector 
	@example
		var myVecotor1 = Vector2D.random();
		var myVecotor2 = Vector2D.random( 1 );
*/
Vector2D.random = function ( degreeIncrement ) {
	var inc = degreeIncrement || 0.01;
	return Vector2D.degreeToVector( MathUtils.random( 0, 360, inc ));
};

export default Vector2D