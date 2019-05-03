<a name="Matrix3D"></a>

## Matrix3D
**Kind**: global class  
**Npmpackage**:   

* [Matrix3D](#Matrix3D)
    * [new Matrix3D()](#new_Matrix3D_new)
    * [.clear()](#Matrix3D.clear)
    * [.rotateX(radians)](#Matrix3D.rotateX) ⇒ [<code>Matrix3D</code>](#Matrix3D)
    * [.rotateY(radians)](#Matrix3D.rotateY) ⇒ [<code>Matrix3D</code>](#Matrix3D)
    * [.rotateY(radians)](#Matrix3D.rotateY) ⇒ [<code>Matrix3D</code>](#Matrix3D)
    * [.rotate(x, y)](#Matrix3D.rotate) ⇒ [<code>Matrix3D</code>](#Matrix3D)
    * [.skew(ax, ay)](#Matrix3D.skew) ⇒ [<code>Matrix3D</code>](#Matrix3D)
    * [.translate(x, y, z)](#Matrix3D.translate) ⇒ [<code>Matrix3D</code>](#Matrix3D)
    * [.getCss()](#Matrix3D.getCss) ⇒ <code>String</code>
    * [.getX()](#Matrix3D.getX) ⇒ <code>Number</code>
    * [.getY()](#Matrix3D.getY) ⇒ <code>Number</code>
    * [.getY()](#Matrix3D.getY) ⇒ <code>Number</code>
    * [.setFromCss(matrixString)](#Matrix3D.setFromCss)

<a name="new_Matrix3D_new"></a>

### new Matrix3D()
A 3D Matrix for transforming: translating, rotating, scaling, skewing <br>
Import from <a href="https://github.com/ff0000-ad-tech/ad-geom">ad-geom</a>

**Example**  
```js
import { Matrix3D } from 'ad-geom'

const myMatrix = new Matrix3D()
myMatrix.rotationY(0.785) // rotate 45 degrees
myMatrix.rotationZ(0.226) // rotate 13 degrees
myMatrix.translate(110, 30, 18) // x: 110, y: 30, z: 18

// get the matrix as a css string to assign to style.tranform
const cssString = myMatrix.getCss() // 'matrix3d(0.688984, 0.159064, -0.707107, 0, -0.224951, 0.97437, 0, 0, 0.688984, 0.159064, 0.707107, 0, 110, 30, 18, 1)'

// or get the transfrom from an element and apply to the matrix
const fromElemString = myDiv.style.transform // 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)'
myMatrix.setFromCss(fromElemString)
```
<a name="Matrix3D.clear"></a>

### Matrix3D.clear()
Resets the matrix back to the identity starting point

**Kind**: static method of [<code>Matrix3D</code>](#Matrix3D)  
<a name="Matrix3D.rotateX"></a>

### Matrix3D.rotateX(radians) ⇒ [<code>Matrix3D</code>](#Matrix3D)
Rotates the matrix pitch. eg. if fixed rotates forward/back

**Kind**: static method of [<code>Matrix3D</code>](#Matrix3D)  

| Param | Type | Description |
| --- | --- | --- |
| radians | <code>number</code> | The amount to rotate the matrix in radians |

<a name="Matrix3D.rotateY"></a>

### Matrix3D.rotateY(radians) ⇒ [<code>Matrix3D</code>](#Matrix3D)
Rotates the matrix yaw. eg. if fixed rotates left/right

**Kind**: static method of [<code>Matrix3D</code>](#Matrix3D)  

| Param | Type | Description |
| --- | --- | --- |
| radians | <code>number</code> | The amount to rotate the matrix in radians |

<a name="Matrix3D.rotateY"></a>

### Matrix3D.rotateY(radians) ⇒ [<code>Matrix3D</code>](#Matrix3D)
Rotates the matrix roll. eg. if fixed rotates clockwise

**Kind**: static method of [<code>Matrix3D</code>](#Matrix3D)  

| Param | Type | Description |
| --- | --- | --- |
| radians | <code>number</code> | The amount to rotate the matrix in radians |

<a name="Matrix3D.rotate"></a>

### Matrix3D.rotate(x, y) ⇒ [<code>Matrix3D</code>](#Matrix3D)
Scale the matrix

**Kind**: static method of [<code>Matrix3D</code>](#Matrix3D)  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | The amount to scale the matrix horizontally |
| y | <code>number</code> | The amount to scale the matrix vertically |

<a name="Matrix3D.skew"></a>

### Matrix3D.skew(ax, ay) ⇒ [<code>Matrix3D</code>](#Matrix3D)
Skew the matrix.

**Kind**: static method of [<code>Matrix3D</code>](#Matrix3D)  

| Param | Type | Description |
| --- | --- | --- |
| ax | <code>number</code> | The amount to skew / slant the matrix horizontally |
| ay | <code>number</code> | The amount to skew / slant the matrix vertically |

<a name="Matrix3D.translate"></a>

### Matrix3D.translate(x, y, z) ⇒ [<code>Matrix3D</code>](#Matrix3D)
Move the matrix's position

**Kind**: static method of [<code>Matrix3D</code>](#Matrix3D)  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | The amount to move the matrix horizontally |
| y | <code>number</code> | The amount to move the matrix vertically |
| z | <code>number</code> | The amount to move the matrix in depth |

<a name="Matrix3D.getCss"></a>

### Matrix3D.getCss() ⇒ <code>String</code>
Retrieves the matrix information as a css tranfrom formatted string

**Kind**: static method of [<code>Matrix3D</code>](#Matrix3D)  
**Example**  
```js
myMatrix.getCss() // matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
```
<a name="Matrix3D.getX"></a>

### Matrix3D.getX() ⇒ <code>Number</code>
Shorthand to retrieve the matrix's x position

**Kind**: static method of [<code>Matrix3D</code>](#Matrix3D)  
<a name="Matrix3D.getY"></a>

### Matrix3D.getY() ⇒ <code>Number</code>
Shorthand to retrieve the matrix's y position

**Kind**: static method of [<code>Matrix3D</code>](#Matrix3D)  
<a name="Matrix3D.getY"></a>

### Matrix3D.getY() ⇒ <code>Number</code>
Shorthand to retrieve the matrix's z position

**Kind**: static method of [<code>Matrix3D</code>](#Matrix3D)  
<a name="Matrix3D.setFromCss"></a>

### Matrix3D.setFromCss(matrixString)
Assign the matrix's values based on existing css string

**Kind**: static method of [<code>Matrix3D</code>](#Matrix3D)  

| Param | Type | Description |
| --- | --- | --- |
| matrixString | <code>string</code> | A css transfrom formatted string |

**Example**  
```js
myMatrix.setFromCss('matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)')
```
