export function cssToData(matrixString) {
	// |px = checks for transform: translate3d(0px, 45px, -100px) format
	// only happens when only changing Z with no rotation or skew
	// will return only 3 numbers. Matrix3D knows how to consume
	return matrixString
		.match(/\(([^\)]+)\)/)[1]
		.replace(/\s|px/g, '')
		.split(',')
		.map(Number)
}
