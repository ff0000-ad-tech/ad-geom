/**
    @npmpackage
    @class SimpleNoise2D
	@desc
		Import from <a href="https://github.com/ff0000-ad-tech/ad-geom">ad-geom</a>
        <br>
		<codeblock>
			// importing into an ES6 class
			import { SimpleNoise2D } from 'ad-geom'
		</codeblock>
		<br><br>
        
        SimpleNoise2D is a workaround for creating 2D noise with lightweight code. 
        It returns a {@link Vector2D} with x and y values between -0.5 - 0.5.
        For a more sophisticated purpose, please use Perline Noise https://github.com/josephg/noisejs
*/
import Vector2D from './Vector2D'

class SimpleNoise2D {
	
	static rx = []
	static ry = []
	static MAX_VERTICES = 256
	static MAX_VERTICES_MASK = 255 //SimpleNoise2D.MAX_VERTICES - 1
	
	/** 
        @memberOf SimpleNoise2D
        @method get
        @param {number} x
            number of location x of the desired noise value
        @param {number} y
            number of location y of the desired noise value
        @returns
            2D Noise value in {@link Vector2D}

        @example
            var noiseVec = SimpleNoise2D.get( 0, 5 );
    */
	static get = (x, y) => {
		return new Vector2D(SimpleNoise2D._getVal('x', x), SimpleNoise2D._getVal('y', y))
	}

	static _init = () => {
		for (let i = 0; i < SimpleNoise2D.MAX_VERTICES; ++i) {
			if (i === SimpleNoise2D.MAX_VERTICES - 1) {
				SimpleNoise2D.rx.push(SimpleNoise2D.rx[0])
				SimpleNoise2D.ry.push(SimpleNoise2D.ry[0])
			}
			SimpleNoise2D.rx.push(Math.random() - 0.5)
			SimpleNoise2D.ry.push(Math.random() - 0.5)
		}
	}

	//a : min value, b: max value, t: step
	static _lerp = (a, b, t) => {
		return a * (1 - t) + b * t
	}

	static _getVal = (axis, index) => {
		if (SimpleNoise2D.rx.length == 0) SimpleNoise2D._init()
		
		const vals = axis === 'x' ? SimpleNoise2D.rx : SimpleNoise2D.ry

		index = index % SimpleNoise2D.MAX_VERTICES
		const t = index - ~~index
		const step = t * t * (3 - 2 * t)

		const min = ~~index & SimpleNoise2D.MAX_VERTICES_MASK
		const max = (min + 1) & SimpleNoise2D.MAX_VERTICES_MASK

		return SimpleNoise2D._lerp(vals[min], vals[max], step)
	}
}

export default SimpleNoise2D
