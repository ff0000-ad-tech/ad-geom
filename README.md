##### RED Interactive Agency - Ad Technology

[![npm
(tag)](https://img.shields.io/npm/v/@ff0000-ad-tech%2Fad-geom.svg?style=flat-square)](https://www.npmjs.com/package/@ff0000-ad-tech%2Fad-geom)
[![GitHub
issues](https://img.shields.io/github/issues/ff0000-ad-tech/ad-geom.svg?style=flat-square)](https://github.com/ff0000-ad-tech/ad-geom)
[![npm
downloads](https://img.shields.io/npm/dm/@ff0000-ad-tech%2Fad-geom.svg?style=flat-square)](https://www.npmjs.com/package/@ff0000-ad-tech%2Fad-geom)

[![GitHub
contributors](https://img.shields.io/github/contributors/ff0000-ad-tech/ad-geom.svg?style=flat-square)](https://github.com/ff0000-ad-tech/ad-geom/graphs/contributors/)
[![GitHub
commit-activity](https://img.shields.io/github/commit-activity/y/ff0000-ad-tech/ad-geom.svg?style=flat-square)](https://github.com/ff0000-ad-tech/ad-geom/commits/master)
[![npm
license](https://img.shields.io/npm/l/@ff0000-ad-tech%2Fad-geom.svg?style=flat-square)](https://github.com/ff0000-ad-tech/ad-geom/blob/master/LICENSE)
[![PRs
Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

# Geom

---

## <a name="Matrix2D" href="./docs/Matrix2D.md">Matrix2D</a>

* new Matrix2D()
* .clear()
* .rotate(radians) ⇒ <code>Matrix2D</code>
* .rotate(x, y) ⇒ <code>Matrix2D</code>
* .skew(ax, ay) ⇒ <code>Matrix2D</code>
* .translate(x, y) ⇒ <code>Matrix2D</code>
* .getCss() ⇒ <code>String</code>
* .getX() ⇒ <code>Number</code>
* .getY() ⇒ <code>Number</code>
* .setFromCss(matrixString)

## <a name="Matrix3D" href="./docs/Matrix3D.md">Matrix3D</a>

* new Matrix3D()
* .clear()
* .rotateX(radians) ⇒ <code>Matrix3D</code>
* .rotateY(radians) ⇒ <code>Matrix3D</code>
* .rotateY(radians) ⇒ <code>Matrix3D</code>
* .rotate(x, y) ⇒ <code>Matrix3D</code>
* .skew(ax, ay) ⇒ <code>Matrix3D</code>
* .translate(x, y, z) ⇒ <code>Matrix3D</code>
* .getCss() ⇒ <code>String</code>
* .getX() ⇒ <code>Number</code>
* .getY() ⇒ <code>Number</code>
* .getY() ⇒ <code>Number</code>
* .setFromCss(matrixString)

## <a name="ParentTransform" href="./docs/ParentTransform.md">ParentTransform</a>

* new ParentTransform()

## <a name="SimpleNoise2D" href="./docs/SimpleNoise2D.md">SimpleNoise2D</a>

* new SimpleNoise2D()
* .get(x, y) ⇒ <code>Vector2D</code>

## <a name="Vector2D" href="./docs/Vector2D.md">Vector2D</a>

* new Vector2D(x, y)
* .add(v) ⇒ <code>Vector2D</code>
* .sub(v) ⇒ <code>Vector2D</code>
* .dist(v) ⇒ <code>number</code>
* .mult(s)
* .div(s) ⇒ <code>Vector2D</code>
* .limit(s) ⇒ <code>Vector2D</code>
* .length() ⇒ <code>Number</code>
* .normalize() ⇒ <code>Vector2D</code>
* .clone() ⇒ <code>Vector2D</code>
* .degreeToVector() ⇒ <code>Vector2D</code>
* .random(degreeIncrement) ⇒ <code>Vector2D</code>

---
