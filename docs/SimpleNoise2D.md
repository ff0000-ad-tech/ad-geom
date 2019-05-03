<a name="SimpleNoise2D"></a>

## SimpleNoise2D
**Kind**: global class  
**Npmpackage**:   

* [SimpleNoise2D](#SimpleNoise2D)
    * [new SimpleNoise2D()](#new_SimpleNoise2D_new)
    * [.get(x, y)](#SimpleNoise2D.get) ⇒ [<code>Vector2D</code>](#Vector2D)

<a name="new_SimpleNoise2D_new"></a>

### new SimpleNoise2D()
SimpleNoise2D is a workaround for creating 2D noise with lightweight code.
It returns a [Vector2D](#Vector2D) with x and y values between -0.5 - 0.5.
For a more sophisticated purpose, please use Perline Noise https://github.com/josephg/noisejs
<br>
Import from <a href="https://github.com/ff0000-ad-tech/ad-geom">ad-geom</a>
<pre class="sunlight-highlight-javascript">
import { SimpleNoise2D } from 'ad-geom'
</pre>

<a name="SimpleNoise2D.get"></a>

### SimpleNoise2D.get(x, y) ⇒ [<code>Vector2D</code>](#Vector2D)
**Kind**: static method of [<code>SimpleNoise2D</code>](#SimpleNoise2D)  
**Returns**: [<code>Vector2D</code>](#Vector2D) - 2D Noise value in [Vector2D](#Vector2D)  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | number of location x of the desired noise value |
| y | <code>number</code> | number of location y of the desired noise value |

**Example**  
```js
var noiseVec = SimpleNoise2D.get(0, 5)
```
