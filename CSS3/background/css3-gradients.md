# css3 gradients

```html5
<div class="pre">
	<pre id="pre">
		background: linear-gradient(-45deg, red, orange, yellow, green, blue, indigo, violet);
		/*仅支持 background: linear-gradient/radial-gradient*/

		background: radial-gradient(center, shape size, start-color, ..., last-color);
		background: repeating-radial-gradient(red, yellow 10%, green 15%);

		background: linear-gradient(direction, color-stop1, color-stop2, ...);
		background: linear-gradient(angle, color-stop1, color-stop2);
		background: repeating-linear-gradient(red, yellow 10%, green 20%);
	</pre>
</div>
<section>
	<div class="animate">
		<span>CSS3 animation (@keyframes)</span>
	</div>
	<div class="bg-gradient">
		<div class="lg">
			<span>彩虹渐变颜色: linear</span>
			<a href="http://www.runoob.com/css3/css3-gradients.html">css3 gradient</a>					
		</div>
		<div class="rg">
			<span>彩虹渐变颜色: radial</span>
			<a href="http://www.runoob.com/css3/css3-gradients.html">css3 gradient</a>
		</div>
	</div>
</section>
```

# /*css 最高优先级!important*/

```scss
#pre{
	width: 1000px !important;
	height: 200px !important;
	/*padding-left: -300px !important;*/
	margin-left: -300px !important;
	overflow-y: scroll !important;;
}

.bg-gradient .lg{
	background: linear-gradient(-45deg, red, orange, yellow, green, blue, indigo, violet,rgba(0,0,0,0.7));
    /*仅支持 background: linear-gradient/radial-gradient*/
    width: 300px;
	height: 200px;
}

.bg-gradient .rg{
	background: radial-gradient(circle, red, orange, yellow, green, blue, indigo, violet);
    /*仅支持 background: linear-gradient/radial-gradient*/
    width: 200px;
	height: 200px;
	padding-left: -300px;
}
```