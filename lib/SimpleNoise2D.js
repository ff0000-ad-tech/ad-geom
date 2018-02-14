/**
    @class SimpleNoise2D
	@desc
		<a href="https://github.com/ff0000-ad-tech/ad-geom">Github repo</a>
        <br><br>
        
        SimpleNoise2D is a workaround for creating 2D noise with lightweight code. 
        It returns a {@link Vector2D} with x and y values between -0.5 - 0.5.
        For a more sophisticated purpose, please use Perline Noise https://github.com/josephg/noisejs
*/
import Vector2D from './Vector2D'

class SimpleNoise2D {

	constructor() {
		this.MAX_VERTICES = 256
		this.MAX_VERTICES_MASK = this.MAX_VERTICES - 1
	
		this.rx = []
		this.ry = []
	
		for (let i = 0; i < this.MAX_VERTICES; ++i) {
			if (i === this.MAX_VERTICES - 1) {
				this.rx.push(this.rx[0])
				this.ry.push(this.ry[0])
			}
			this.rx.push(Math.random() - 0.5)
			this.ry.push(Math.random() - 0.5)
		}
	}

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
	get = (x, y) => {
		return new Vector2D(this._getVal('x', x), this._getVal('y', y))
	}

	//a : min value, b: max value, t: step
	_lerp = (a, b, t) => {
		return a * (1 - t) + b * t
	}

	_getVal = (axis, index) => {
		const vals = axis === 'x' ? this.rx : this.ry

		index = index % this.MAX_VERTICES
		const t = index - ~~index
		const step = t * t * (3 - 2 * t)

		const min = ~~index & this.MAX_VERTICES_MASK
		const max = (min + 1) & this.MAX_VERTICES_MASK

		return this._lerp(vals[min], vals[max], step)
	}
	
}

export default new SimpleNoise2D()
