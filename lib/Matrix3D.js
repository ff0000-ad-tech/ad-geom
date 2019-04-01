/**
	@npmpackage
	@class Matrix3D
	@desc
		Import from <a href="https://github.com/ff0000-ad-tech/ad-geom">ad-geom</a>
		<br>
		<codeblock>
			// importing into an ES6 class
			import { Matrix3D } from 'ad-geom'
		</codeblock>
		<br><br>
*/
import { cssToData } from './matrixUtils'

const Matrix3D = function() {
	const M = this
	// initial set identity base matrix array to data
	M.identity = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
	M.data = new Float32Array(M.identity)
}

Matrix3D.prototype = {
	clear: function() {
		var M = this
		M.data.set(M.identity)
	},

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

	getCss: function() {
		return `matrix3d(${this.data.join(',')})`
	},

	getX: function() {
		return this.data[12]
	},

	getY: function() {
		return this.data[13]
	},

	getZ: function() {
		return this.data[14]
	},

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
