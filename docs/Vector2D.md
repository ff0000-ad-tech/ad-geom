<a name="Vector2D"></a>

## Vector2D
**Kind**: global class  
**Npmpackage**:   

* [Vector2D](#Vector2D)
    * [new Vector2D(x, y)](#new_Vector2D_new)
    * [.add(v)](#Vector2D.add) ⇒ [<code>Vector2D</code>](#Vector2D)
    * [.sub(v)](#Vector2D.sub) ⇒ [<code>Vector2D</code>](#Vector2D)
    * [.dist(v)](#Vector2D.dist) ⇒ <code>number</code>
    * [.mult(s)](#Vector2D.mult)
    * [.div(s)](#Vector2D.div) ⇒ [<code>Vector2D</code>](#Vector2D)
    * [.limit(s)](#Vector2D.limit) ⇒ [<code>Vector2D</code>](#Vector2D)
    * [.length()](#Vector2D.length) ⇒ <code>Number</code>
    * [.normalize()](#Vector2D.normalize) ⇒ [<code>Vector2D</code>](#Vector2D)
    * [.clone()](#Vector2D.clone) ⇒ [<code>Vector2D</code>](#Vector2D)
    * [.degreeToVector()](#Vector2D.degreeToVector) ⇒ [<code>Vector2D</code>](#Vector2D)
    * [.random(degreeIncrement)](#Vector2D.random) ⇒ [<code>Vector2D</code>](#Vector2D)

<a name="new_Vector2D_new"></a>

### new Vector2D(x, y)
Import from <a href="https://github.com/ff0000-ad-tech/ad-geom">ad-geom</a>
		<br>
		<pre class="sunlight-highlight-javascript">
// importing into an ES6 class
import { Vector2D } from 'ad-geom'
</pre>
		<br><br>

		A simple 2D Vector classs


| Param | Type |
| --- | --- |
| x | <code>number</code> | 
| y | <code>number</code> | 

**Example**  
```js
var myVector1 = new Vector2D( 0, 320 );
		var myVector2 = new Vector2D( -3, 5.5 );
```
<a name="Vector2D.add"></a>

### Vector2D.add(v) ⇒ [<code>Vector2D</code>](#Vector2D)
Adds another vector to itself

**Kind**: static method of [<code>Vector2D</code>](#Vector2D)  

| Param | Type |
| --- | --- |
| v | [<code>Vector2D</code>](#Vector2D) | 

**Example**  
```js
myVector1.add( myVector2 );
```
<a name="Vector2D.sub"></a>

### Vector2D.sub(v) ⇒ [<code>Vector2D</code>](#Vector2D)
Subtracts another vector from itself

**Kind**: static method of [<code>Vector2D</code>](#Vector2D)  

| Param | Type |
| --- | --- |
| v | [<code>Vector2D</code>](#Vector2D) | 

**Example**  
```js
myVector1.sub( myVector2 );
```
<a name="Vector2D.dist"></a>

### Vector2D.dist(v) ⇒ <code>number</code>
**Kind**: static method of [<code>Vector2D</code>](#Vector2D)  
**Returns**: <code>number</code> - The distance between two vectors as locations  

| Param | Type |
| --- | --- |
| v | [<code>Vector2D</code>](#Vector2D) | 

**Example**  
```js
var distance = myVector.dist( myVector2 );
```
<a name="Vector2D.mult"></a>

### Vector2D.mult(s)
Multiplies X and Y of the vector by s

**Kind**: static method of [<code>Vector2D</code>](#Vector2D)  

| Param | Type |
| --- | --- |
| s | <code>Number</code> | 

**Example**  
```js
myVector.mult( 10.3 );
```
<a name="Vector2D.div"></a>

### Vector2D.div(s) ⇒ [<code>Vector2D</code>](#Vector2D)
Divides X and Y of the vector by s

**Kind**: static method of [<code>Vector2D</code>](#Vector2D)  

| Param | Type |
| --- | --- |
| s | <code>Number</code> | 

**Example**  
```js
myVector.div( 2 );
```
<a name="Vector2D.limit"></a>

### Vector2D.limit(s) ⇒ [<code>Vector2D</code>](#Vector2D)
Limits the length of the vector if it's longer than s

**Kind**: static method of [<code>Vector2D</code>](#Vector2D)  

| Param | Type |
| --- | --- |
| s | <code>Number</code> | 

**Example**  
```js
myVector.limit( 18.2 );
```
<a name="Vector2D.length"></a>

### Vector2D.length() ⇒ <code>Number</code>
**Kind**: static method of [<code>Vector2D</code>](#Vector2D)  
**Returns**: <code>Number</code> - The length of the vector.  
**Example**  
```js
var length = myVector.length();
```
<a name="Vector2D.normalize"></a>

### Vector2D.normalize() ⇒ [<code>Vector2D</code>](#Vector2D)
Normalizes the vector( ie scale the vector to length of 1 )

**Kind**: static method of [<code>Vector2D</code>](#Vector2D)  
**Example**  
```js
myVector.normalize();
```
<a name="Vector2D.clone"></a>

### Vector2D.clone() ⇒ [<code>Vector2D</code>](#Vector2D)
Creates a new Vector2D with and same x and y

**Kind**: static method of [<code>Vector2D</code>](#Vector2D)  
**Example**  
```js
var newVecotor = myVector.clone();
```
<a name="Vector2D.degreeToVector"></a>

### Vector2D.degreeToVector() ⇒ [<code>Vector2D</code>](#Vector2D)
Converts a degree 0 - 360 to a normalized vector

**Kind**: static method of [<code>Vector2D</code>](#Vector2D)  
**Example**  
```js
var myVecotor = Vector2D.degreeToVector( 45 );
```
<a name="Vector2D.random"></a>

### Vector2D.random(degreeIncrement) ⇒ [<code>Vector2D</code>](#Vector2D)
Returns a random normalized vector

**Kind**: static method of [<code>Vector2D</code>](#Vector2D)  

| Param | Type | Description |
| --- | --- | --- |
| degreeIncrement | <code>Number</code> | Optional, the degree increment of the random vector, defaults to 0.01 |

**Example**  
```js
var myVecotor1 = Vector2D.random();
			var myVecotor2 = Vector2D.random( 1 );
```
