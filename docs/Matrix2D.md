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
A 2D Matrix for transforming: translating, rotating, scaling, skewing 
		<br>	
		Import from <a href="https://github.com/ff0000-ad-tech/ad-geom">ad-geom</a>
		<br>

**Example**  
```js
import { Matrix2D } from 'ad-geom'
```
<a name="Matrix2D.clear"></a>

### Matrix2D.clear()
Resets the matrix back to the identity starting point

**Kind**: static method of [<code>Matrix2D</code>](#Matrix2D)  
**Example**  
```js
myMatrix.clear()
```
<a name="Matrix2D.rotate"></a>

### Matrix2D.rotate(radians) ⇒ [<code>Matrix2D</code>](#Matrix2D)
Rotates the matrix

**Kind**: static method of [<code>Matrix2D</code>](#Matrix2D)  

| Param | Type | Description |
| --- | --- | --- |
| radians | <code>number</code> | The amount to rotate the matrix in radians |

**Example**  
```js
myMatrix.rotate(1.57)
```
<a name="Matrix2D.rotate"></a>

### Matrix2D.rotate(x, y) ⇒ [<code>Matrix2D</code>](#Matrix2D)
Scale the matrix

**Kind**: static method of [<code>Matrix2D</code>](#Matrix2D)  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | The amount to scale the matrix horizontally |
| y | <code>number</code> | The amount to scale the matrix vertically |

**Example**  
```js
myMatrix.scale(2, 0.5)
```
<a name="Matrix2D.skew"></a>

### Matrix2D.skew(ax, ay) ⇒ [<code>Matrix2D</code>](#Matrix2D)
Skew the matrix.

**Kind**: static method of [<code>Matrix2D</code>](#Matrix2D)  

| Param | Type | Description |
| --- | --- | --- |
| ax | <code>number</code> | The amount to skew / slant the matrix horizontally |
| ay | <code>number</code> | The amount to skew / slant the matrix vertically |

**Example**  
```js
myMatrix.skew(2, 0.5)
```
<a name="Matrix2D.translate"></a>

### Matrix2D.translate(x, y) ⇒ [<code>Matrix2D</code>](#Matrix2D)
Move the matrix's position

**Kind**: static method of [<code>Matrix2D</code>](#Matrix2D)  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | The amount to move the matrix horizontally |
| y | <code>number</code> | The amount to move the matrix vertically |

**Example**  
```js
myMatrix.translate(2, 0.5)
```
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
**Example**  
```js
myMatrix.getX() // 47
```
<a name="Matrix2D.getY"></a>

### Matrix2D.getY() ⇒ <code>Number</code>
Shorthand to retrieve the matrix's y position

**Kind**: static method of [<code>Matrix2D</code>](#Matrix2D)  
**Example**  
```js
myMatrix.getY() // 132
```
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
