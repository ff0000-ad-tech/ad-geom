/**
 * @npmpackage
 * @class SimpleNoise2D
 * @desc
 * SimpleNoise2D is a workaround for creating 2D noise with lightweight code.
 * It returns a {@link Vector2D} with x and y values between -0.5 - 0.5.
 * For a more sophisticated purpose, please use Perline Noise https://github.com/josephg/noisejs
 * <br>
 * Import from <a href="https://github.com/ff0000-ad-tech/ad-geom">ad-geom</a>
 * <codeblock>
 * import { SimpleNoise2D } from 'ad-geom'
 * </codeblock>
 */
import Vector2D from './Vector2D'

const rx = []
const ry = []
const MAX_VERTICES = 256
const MAX_VERTICES_MASK = 255 //MAX_VERTICES - 1

/**
 * @memberOf SimpleNoise2D
 * @method get
 * @param {number} x
 * 	number of location x of the desired noise value
 * @param {number} y
 * 	number of location y of the desired noise value
 * @returns {Vector2D}
 * 	2D Noise value in {@link Vector2D}
 * @example
 * var noiseVec = SimpleNoise2D.get(0, 5)
 */
export const get = (x, y) => {
	return new Vector2D(_getVal('x', x), _getVal('y', y))
}

const _init = () => {
	for (let i = 0; i < MAX_VERTICES; ++i) {
		if (i === MAX_VERTICES - 1) {
			rx.push(rx[0])
			ry.push(ry[0])
		}
		rx.push(Math.random() - 0.5)
		ry.push(Math.random() - 0.5)
	}
}

//a : min value, b: max value, t: step
const _lerp = (a, b, t) => {
	return a * (1 - t) + b * t
}

const _getVal = (axis, index) => {
	if (rx.length == 0) _init()

	const vals = axis === 'x' ? rx : ry

	index = index % MAX_VERTICES
	const t = index - ~~index
	const step = t * t * (3 - 2 * t)

	const min = ~~index & MAX_VERTICES_MASK
	const max = (min + 1) & MAX_VERTICES_MASK

	return _lerp(vals[min], vals[max], step)
}
