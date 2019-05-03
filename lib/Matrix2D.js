/**
 * @npmpackage
 * @class Matrix2D
 * @desc
 * A 2D Matrix for transforming: translating, rotating, scaling, skewing <br>
 * Import from <a href="https://github.com/ff0000-ad-tech/ad-geom">ad-geom</a>
 * @example
 * import { Matrix2D } from 'ad-geom'
 *
 * const myMatrix = new Matrix2D()
 * myMatrix.rotate(0.785) // rotate 45 degrees
 * myMatrix.translate(30, 45) // x:30, y:45
 *
 * // get the matrix as a css string to assign to style.tranform
 * const cssString = myMatrix.getCss() // "matrix(0.7071, 0.7071, -0.7071, 0.7071, 30, 45)"
 *
 * // or get the transfrom from an element and apply to the matrix
 * const fromElemString = myDiv.style.transform // 'matrix(1,0,0,1,0,0)'
 * myMatrix.setFromCss(fromElemString)
 */

/*
 * TODO - convert to  a, c, b, d, tx, ty ?
 *		- inverse?
 */
import { cssToData } from './matrixUtils'

const Matrix2D = function() {
	const M = this
	// initial set identity base matrix array to data
	M.identity = new Float32Array([1, 0, 0, 0, 1, 0])
	M.data = new Float32Array(M.identity)
}

Matrix2D.prototype = {
	/** 
	 * @memberOf Matrix2D
	 * @method clear
	 * @desc
	 * 	Resets the matrix back to the identity starting point
	 */
	clear: function() {
		var M = this
		M.data = new Float32Array(M.identity)
	},

	/** 
	 * @memberOf Matrix2D
	 * @method rotate
	 * @param {number} radians
	 * 	The amount to rotate the matrix in radians
	 * @desc
	 * 	Rotates the matrix
	 * @returns {Matrix2D}
	 */
	rotate: function(radians) {
		var M = this
		// copy the identity to be modified
		var _m = new Float32Array(M.identity)

		var c = Math.cos(radians).toFixed(15)
		var s = Math.sin(radians).toFixed(15)

		_m[0] = c
		_m[1] = s
		_m[3] = -s
		_m[4] = c
		//  cos(rad),  sin(rad), 0,
		//  -sin(rad), cos(rad), 0,
		//  0,         0,        1

		M.multiply(_m, false)
		return M
	},

	/** 
	 * @memberOf Matrix2D
	 * @method rotate
	 * @param {number} x
	 * 	The amount to scale the matrix horizontally
	 * @param {number} y
	 * 	The amount to scale the matrix vertically
	 * @desc
	 * 	Scale the matrix
	 * @returns {Matrix2D}
	 */
	scale: function(x, y) {
		var M = this
		// copy the identity to be modified
		var _m = new Float32Array(M.identity)

		_m[0] = x
		_m[4] = y
		//  x, 0, 0,
		//  0, y, 0,
		//  0, 0, 1

		M.multiply(_m, false)
		return M
	},

	/** 
	 * @memberOf Matrix2D
	 * @method skew
	 * @param {number} ax
	 * 	The amount to skew / slant the matrix horizontally
	 * @param {number} ay
	 * 	The amount to skew / slant the matrix vertically
	 * @desc
	 * 	Skew the matrix.
	 * @returns {Matrix2D}
	*/
	skew: function(ax, ay) {
		var M = this
		// copy the identity to be modified
		var _m = new Float32Array(M.identity)

		_m[1] = Math.tan(ax)
		_m[3] = Math.tan(ay)
		//  1,       tan(ax), 0,
		//  tan(ay), 1,       0,
		//  0,       0,       1

		M.multiply(_m)
		return M
	},

	/** 
	 * @memberOf Matrix2D
	 * @method translate
	 * @param {number} x
	 * 	The amount to move the matrix horizontally
	 * @param {number} y
	 * 	The amount to move the matrix vertically
	 * @desc
	 * 	Move the matrix's position
	 * @returns {Matrix2D}
	*/
	translate: function(x, y) {
		var M = this
		// copy the identity to be modified
		var _m = new Float32Array(M.identity)

		_m[2] = x || 0
		_m[5] = y || 0
		//  1, 0, x,
		//  0, 1, y,
		//  0, 0, 1

		M.multiply(_m, true)
		return M
	},

	multiply: function(m, invert) {
		var M = this
		// copy the current matrix data into '_c'
		var _copy = new Float32Array(M.data)

		// translate multiply needs to be inverted, where others do not
		var a = invert ? m : _copy
		var b = invert ? _copy : m

		for (var i = 0; i < 6; i++) {
			var k = Math.floor(i / 3) * 3
			var q = i % 3
			//console.log( i, '-', a[_a], b[_b], a[_a+1], b[_b+3], a[_a+2], b[_b+6] )
			M.data[i] = a[k] * b[q] + a[k + 1] * b[q + 3]
		}
		M.data[2] += a[2]
		M.data[5] += a[5]

		// a[0] * b[0] + a[1] * b[3] + a[2] * 0
		// a[0] * b[1] + a[1] * b[4] + a[2] * 0
		// a[0] * b[2] + a[1] * b[5] + a[2] * 1
		// a[3] * b[0] + a[4] * b[3] + a[2] * 0
		// a[3] * b[1] + a[4] * b[4] + a[2] * 0
		// a[3] * b[2] + a[4] * b[5] + a[5] * 1
		// 0
		// 0
		// 1
	},

	// TODO - convert to static method?
	/** 
	 * @memberOf Matrix2D
	 * @method getCss
	 * @desc
	 * 	Retrieves the matrix information as a css tranfrom formatted string
	 * @returns {String}
	 * @example
	 * 	myMatrix.getCss() // matrix(1,0,0,1,0,0)
	 */
	getCss: function() {
		// a, c, tx
		// b, d, ty
		// 0, 0, 1
		// matrix(a, c, b, d, tx, ty)
		const d = this.data
		return `matrix(${d[0]},${d[1]},${d[3]},${d[4]},${d[2]},${d[5]})`
	},

	/** 
	 * @memberOf Matrix2D
	 * @method getX
	 * @desc
	 * 	Shorthand to retrieve the matrix's x position
	 * @returns {Number}
	 */
	getX: function() {
		return this.data[2]
	},

	/** 
	 * @memberOf Matrix2D
	 * @method getY
	 * @desc
	 * 	Shorthand to retrieve the matrix's y position
	 * @returns {Number}
	 */
	getY: function() {
		return this.data[5]
	},

	/** 
	 * @memberOf Matrix2D
	 * @method setFromCss
	 * @param {string} matrixString
	 * 	A css transfrom formatted string
	 * @desc
	 * 	Assign the matrix's values based on existing css string
	 * @example
	 * 	myMatrix.setFromCss('matrix(1,0,0,1,0,0)')
	 */
	setFromCss: function(matrixString) {
		// const cssMatrix = matrixString
		// 	.match(/\(([^\)]+)\)/)[1]
		// 	.replace(/\s/g, '')
		// 	.split(',')
		// 	.map(Number)
		const matrixArray = cssToData(matrixString)
		this.setFromArray(matrixArray)
	},

	setFromArray: function(matrixArray) {
		this.data = [matrixArray[0], matrixArray[1], matrixArray[4], matrixArray[2], matrixArray[3], matrixArray[5]]
	}
}

//http://www.wikihow.com/Inverse-a-3X3-Matrix
/*function getMatrixInverse (m){	
	var t = [
		m[0], m[3], m[6], 
		m[1], m[4], m[7],
		m[2], m[5], m[8]
	];

	// 0,  1,  2,
	// 3,  4,  5,
	// 6,  7,  8

	// a,  b,  0 
	// c,  d,  0
	// tx, ty, 1
	console.log( m );
	console.log( t );
	
	[
		m[4],	-m[1],	m[1] * m[5] - m[4] * m[2],
		-m[3],	m[0],	(m[0] * m[5] - m[3] * m[2]) * -1,
		0,		0,		m[0] * m[4] - m[3] * m[1]
	]

	var d11 = m[4]
	var d12 = - m[1]
	var d13 = m[1] * m[5] - m[4] * m[2]
	var d21 = - m[3]
	var d22 = m[0]
	var d23 = (m[0] * m[5] - m[3] * m[2]) * -1
	var d31 = 0 
	var d32 = 0
	var d33 = m[0] * m[4] - m[3] * m[1]

	var d11 = t[4]
	var d12 = - t[3]
	var d13 = t[3] * t[7] - t[4] * t[6]
	var d21 = - t[1]
	var d22 = t[0]
	var d23 = (t[0] * t[7] - t[1] * t[6]) * -1
	var d31 = 0 
	var d32 = 0
	var d33 = t[0] * t[4] - t[1] * t[3]

	var d11 = t[4] * t[8] - t[5] * t[7]
	var d12 = (t[3] * t[8] - t[5] * t[6]) * -1
	var d13 = t[3] * t[7] - t[4] * t[6]
	var d21 = (t[1] * t[8] - t[2] * t[7]) * -1
	var d22 = t[0] * t[8] - t[2] * t[6]
	var d23 = (t[0] * t[7] - t[1] * t[6]) * -1
	var d31 = t[1] * t[5] - t[2] * t[4]
	var d32 = (t[0] * t[5] - t[2] * t[3]) * -1
	var d33 = t[0] * t[4] - t[1] * t[3]



	return [ d11, d12, d13, d21, d22, d23, d31, d32, d33 ];
}*/

export default Matrix2D
