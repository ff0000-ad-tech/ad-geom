<a name="Matrix2D"></a>

## Matrix2D
**Kind**: global class  
**Npmpackage**:   

* [Matrix2D](#Matrix2D)
    * [new Matrix2D()](#new_Matrix2D_new)
    * [.clear()](#Matrix2D.clear)
    * [.rotate(radians)](#Matrix2D.rotate) ⇒ [<code>Matrix2D</code>](#Matrix2D)
    * [.rotate(x, y)](#Matrix2D.rotate) ⇒ [<code>Matrix2D</code>](#Matrix2D)
    * [.skew(ax, ay)](#Matrix2D.skew) ⇒ [<code>Matrix2D</code>](#Matrix2D)
    * [.translate(x, y)](#Matrix2D.translate) ⇒ [<code>Matrix2D</code>](#Matrix2D)
    * [.getCss()](#Matrix2D.getCss) ⇒ <code>String</code>
    * [.getX()](#Matrix2D.getX) ⇒ <code>Number</code>
    * [.getY()](#Matrix2D.getY) ⇒ <code>Number</code>
    * [.setFromCss(matrixString)](#Matrix2D.setFromCss)

<a name="new_Matrix2D_new"></a>

### new Matrix2D()
A 2D Matrix for transforming: translating, rotating, scaling, skewing <br>
Import from <a href="https://github.com/ff0000-ad-tech/ad-geom">ad-geom</a>

**Example**  
```js
import { Matrix2D } from 'ad-geom'

const myMatrix = new Matrix2D()
myMatrix.rotate(0.785) // rotate 45 degrees
myMatrix.translate(30, 45) // x:30, y:45

// get the matrix as a css string to assign to style.tranform
const cssString = myMatrix.getCss() // "matrix(0.7071, 0.7071, -0.7071, 0.7071, 30, 45)"

// or get the transfrom from an element and apply to the matrix
const fromElemString = myDiv.style.transform // 'matrix(1,0,0,1,0,0)'
myMatrix.setFromCss(fromElemString)
```
<a name="Matrix2D.clear"></a>

### Matrix2D.clear()
Resets the matrix back to the identity starting point

**Kind**: static method of [<code>Matrix2D</code>](#Matrix2D)  
<a name="Matrix2D.rotate"></a>

### Matrix2D.rotate(radians) ⇒ [<code>Matrix2D</code>](#Matrix2D)
Rotates the matrix

**Kind**: static method of [<code>Matrix2D</code>](#Matrix2D)  

| Param | Type | Description |
| --- | --- | --- |
| radians | <code>number</code> | The amount to rotate the matrix in radians |

<a name="Matrix2D.rotate"></a>

### Matrix2D.rotate(x, y) ⇒ [<code>Matrix2D</code>](#Matrix2D)
Scale the matrix

**Kind**: static method of [<code>Matrix2D</code>](#Matrix2D)  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | The amount to scale the matrix horizontally |
| y | <code>number</code> | The amount to scale the matrix vertically |

<a name="Matrix2D.skew"></a>

### Matrix2D.skew(ax, ay) ⇒ [<code>Matrix2D</code>](#Matrix2D)
Skew the matrix.

**Kind**: static method of [<code>Matrix2D</code>](#Matrix2D)  

| Param | Type | Description |
| --- | --- | --- |
| ax | <code>number</code> | The amount to skew / slant the matrix horizontally |
| ay | <code>number</code> | The amount to skew / slant the matrix vertically |

<a name="Matrix2D.translate"></a>

### Matrix2D.translate(x, y) ⇒ [<code>Matrix2D</code>](#Matrix2D)
Move the matrix's position

**Kind**: static method of [<code>Matrix2D</code>](#Matrix2D)  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | The amount to move the matrix horizontally |
| y | <code>number</code> | The amount to move the matrix vertically |

<a name="Matrix2D.getCss"></a>

### Matrix2D.getCss() ⇒ <code>String</code>
Retrieves the matrix information as a css tranfrom formatted string

**Kind**: static method of [<code>Matrix2D</code>](#Matrix2D)  
**Example**  
```js
myMatrix.getCss() // matrix(1,0,0,1,0,0)
```
<a name="Matrix2D.getX"></a>

### Matrix2D.getX() ⇒ <code>Number</code>
Shorthand to retrieve the matrix's x position

**Kind**: static method of [<code>Matrix2D</code>](#Matrix2D)  
<a name="Matrix2D.getY"></a>

### Matrix2D.getY() ⇒ <code>Number</code>
Shorthand to retrieve the matrix's y position

**Kind**: static method of [<code>Matrix2D</code>](#Matrix2D)  
<a name="Matrix2D.setFromCss"></a>

### Matrix2D.setFromCss(matrixString)
Assign the matrix's values based on existing css string

**Kind**: static method of [<code>Matrix2D</code>](#Matrix2D)  

| Param | Type | Description |
| --- | --- | --- |
| matrixString | <code>string</code> | A css transfrom formatted string |

**Example**  
```js
myMatrix.setFromCss('matrix(1,0,0,1,0,0)')
```
