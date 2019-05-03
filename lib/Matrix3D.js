/**
 * @npmpackage
 * @class Matrix3D
 * @desc
 * A 3D Matrix for transforming: translating, rotating, scaling, skewing <br>
 * Import from <a href="https://github.com/ff0000-ad-tech/ad-geom">ad-geom</a>
 * @example
 * import { Matrix3D } from 'ad-geom'
 *
 * const myMatrix = new Matrix3D()
 * myMatrix.rotationY(0.785) // rotate 45 degrees
 * myMatrix.rotationZ(0.226) // rotate 13 degrees
 * myMatrix.translate(110, 30, 18) // x: 110, y: 30, z: 18
 *
 * // get the matrix as a css string to assign to style.tranform
 * const cssString = myMatrix.getCss() // 'matrix3d(0.688984, 0.159064, -0.707107, 0, -0.224951, 0.97437, 0, 0, 0.688984, 0.159064, 0.707107, 0, 110, 30, 18, 1)'
 *
 * // or get the transfrom from an element and apply to the matrix
 * const fromElemString = myDiv.style.transform // 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)'
 * myMatrix.setFromCss(fromElemString)
 */
import { cssToData } from './matrixUtils'

const Matrix3D = function() {
	const M = this
	// initial set identity base matrix array to data
	M.identity = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
	M.data = new Float32Array(M.identity)
}

Matrix3D.prototype = {
	/** 
	 * @memberOf Matrix3D
	 * @method clear
	 * @desc
	 * 	Resets the matrix back to the identity starting point
	 */
	clear: function() {
		var M = this
		M.data.set(M.identity)
	},

	/** 
	 * @memberOf Matrix3D
	 * @method rotateX
	 * @param {number} radians
	 * 	The amount to rotate the matrix in radians
	 * @desc
	 * 	Rotates the matrix pitch. eg. if fixed rotates forward/back
	 * @returns {Matrix3D}
	*/
	rotateX: function(radians) {
		var M = this
		var c = Math.cos(radians).toFixed(15)
		var s = Math.sin(radians).toFixed(15)

		// copy the identity to be modified
		var _m = new Float32Array(M.identity)
		_m[5] = c
		_m[6] = s
		_m[9] = -s
		_m[10] = c
		//  1, 0,        0,         0,
		//  0, cos(rad), sin(rad), 0,
		//  0, -sin(rad), cos(rad),  0,
		//  0, 0,        0,         1

		M.multiply(_m)
		return M
	},

	/** 
	 * @memberOf Matrix3D
	 * @method rotateY
	 * @param {number} radians
	 * 	The amount to rotate the matrix in radians
	 * @desc
	 * 	Rotates the matrix yaw. eg. if fixed rotates left/right
	 * @returns {Matrix3D}
	 */
	rotateY: function(radians) {
		var M = this
		var c = Math.cos(radians).toFixed(15)
		var s = Math.sin(radians).toFixed(15)

		// copy the identity to be modified
		var _m = new Float32Array(M.identity)
		_m[0] = c
		_m[2] = -s
		_m[8] = s
		_m[10] = c
		//  cos(rad),  0, -sin(rad), 0,
		//  0,         1, 0,        0,
		//  sin(rad), 0, cos(rad), 0,
		//  0,         0, 0,        1

		M.multiply(_m)
		return M
	},

	/** 
	 * @memberOf Matrix3D
	 * @method rotateY
	 * @param {number} radians
	 * 	The amount to rotate the matrix in radians
	 * @desc
	 * 	Rotates the matrix roll. eg. if fixed rotates clockwise
	 * @returns {Matrix3D}
	 */
	rotateZ: function(radians) {
		var M = this
		var c = Math.cos(radians).toFixed(15)
		var s = Math.sin(radians).toFixed(15)

		// copy the identity to be modified
		var _m = new Float32Array(M.identity)
		_m[0] = c
		_m[1] = s
		_m[4] = -s
		_m[5] = c
		//  cos(rad),  sin(rad), 0, 0,
		//  -sin(rad), cos(rad), 0, 0,
		//  0,         0,        1, 0,
		//  0,         0,        0, 1

		M.multiply(_m)
		return M
	},

	/** 
	 * @memberOf Matrix3D
	 * @method rotate
	 * @param {number} x
	 * 	The amount to scale the matrix horizontally
	 * @param {number} y
	 * 	The amount to scale the matrix vertically
	 * @desc
	 * 	Scale the matrix
	 * @returns {Matrix3D}
	 */
	scale: function(x, y) {
		var M = this
		// copy the identity to be modified
		var _m = new Float32Array(M.identity)
		_m[0] = x
		_m[5] = y
		//  x, 0, 0, 0,
		//  0, y, 0, 0,
		//  0, 0, 1, 0,
		//  0, 0, 0, 1

		M.multiply(_m)
		return M
	},

	/** 
	 * @memberOf Matrix3D
	 * @method skew
	 * @param {number} ax
	 * 	The amount to skew / slant the matrix horizontally
	 * @param {number} ay
	 * 	The amount to skew / slant the matrix vertically
	 * @desc
	 * 	Skew the matrix.
	 * @returns {Matrix3D}
	 */
	skew: function(ax, ay) {
		var M = this
		// copy the identity to be modified
		var _m = new Float32Array(M.identity)
		_m[1] = Math.tan(ay) || 0
		_m[4] = Math.tan(ax) || 0
		//  1,       tan(ay), 0, 0,
		//  tan(ax), 1,       0, 0,
		//  0,       0,       1, 0,
		//  0,       0,       0, 1

		M.multiply(_m)
		return M
	},

	/** 
	 * @memberOf Matrix3D
	 * @method translate
	 * @param {number} x
	 * 	The amount to move the matrix horizontally
	 * @param {number} y
	 * 	The amount to move the matrix vertically
	 * @param {number} z
	 * 	The amount to move the matrix in depth
	 * @desc
	 * 	Move the matrix's position
	 * @returns {Matrix3D}
	 */
	translate: function(x, y, z) {
		var M = this
		// copy the identity to be modified
		var _m = new Float32Array(M.identity)
		_m[12] = x || 0
		_m[13] = y || 0
		_m[14] = z || 0
		//  1, 0, 0, 0,
		//  0, 1, 0, 0,
		//  0, 0, 1, 0,
		//  x, y, z, 1

		M.multiply(_m)
		return this
	},

	multiply: function(m) {
		var M = this
		// copy the current matrix data into '_c'
		var _c = new Float32Array(M.data)

		for (var i = 0; i < 15; i++) {
			const q = Math.floor(i / 4) * 4
			const t = i % 3
			if ((i - 3) % 4) {
				M.data[i] = _c[q] * m[t] + _c[q + 1] * m[t + 4] + _c[q + 2] * m[t + 8]
				if (i > 11) {
					M.data[i] += m[i]
				}
			} else {
				M.data[i] = 0
			}
		}
		M.data[15] = 1

		// M.data[0] = _c[0] * m[0] + _c[1] * m[4] + _c[2] * m[8]
		// M.data[1] = _c[0] * m[1] + _c[1] * m[5] + _c[2] * m[9]
		// M.data[2] = _c[0] * m[2] + _c[1] * m[6] + _c[2] * m[10]
		// M.data[3] = 0
		// M.data[4] = _c[4] * m[0] + _c[5] * m[4] + _c[6] * m[8]
		// M.data[5] = _c[4] * m[1] + _c[5] * m[5] + _c[6] * m[9]
		// M.data[6] = _c[4] * m[2] + _c[5] * m[6] + _c[6] * m[10]
		// M.data[7] = 0
		// M.data[8] = _c[8] * m[0] + _c[9] * m[4] + _c[10] * m[8]
		// M.data[9] = _c[8] * m[1] + _c[9] * m[5] + _c[10] * m[9]
		// M.data[10] = _c[8] * m[2] + _c[9] * m[6] + _c[10] * m[10]
		// M.data[11] = 0
		// M.data[12] = _c[12] * m[0] + _c[13] * m[4] + _c[14] * m[8] + m[12]
		// M.data[13] = _c[12] * m[1] + _c[13] * m[5] + _c[14] * m[9] + m[13]
		// M.data[14] = _c[12] * m[2] + _c[13] * m[6] + _c[14] * m[10] + m[14]
		// M.data[15] = 1
	},

	/** 
	 * @memberOf Matrix3D
	 * @method getCss
	 * @desc
	 * 	Retrieves the matrix information as a css tranfrom formatted string
	 * @returns {String}
	 * @example
	 * 	myMatrix.getCss() // matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
	 */
	getCss: function() {
		return `matrix3d(${this.data.join(',')})`
	},

	/** 
	 * @memberOf Matrix3D
	 * @method getX
	 * @desc
	 * 	Shorthand to retrieve the matrix's x position
	 * @returns {Number}
	 */
	getX: function() {
		return this.data[12]
	},

	/** 
	 * @memberOf Matrix3D
	 * @method getY
	 * @desc
	 * 	Shorthand to retrieve the matrix's y position
	 * @returns {Number}
	 */
	getY: function() {
		return this.data[13]
	},

	/** 
	 * @memberOf Matrix3D
	 * @method getY
	 * @desc
	 * 	Shorthand to retrieve the matrix's z position
	 * @returns {Number}
	 */
	getZ: function() {
		return this.data[14]
	},

	/** 
	 * @memberOf Matrix3D
	 * @method setFromCss
	 * @param {string} matrixString
	 * 	A css transfrom formatted string
	 * @desc
	 * 	Assign the matrix's values based on existing css string
	 * @example
	 * 	myMatrix.setFromCss('matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)')
	 */
	setFromCss: function(matrixString) {
		const matrixArray = cssToData(matrixString)
		this.setFromArray(matrixArray)
	},

	setFromArray: function(matrixArray) {
		const M = this
		// check for transform: translate3d(0px, 45px, -100px) format
		// only happens when only changing Z with no rotation or skew
		if (matrixArray.length === 3) {
			M.translate.apply(M, matrixArray)
		} else {
			M.data = new Float32Array(matrixArray)
		}
	}
}

export default Matrix3D
