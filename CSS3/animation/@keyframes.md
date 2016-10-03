# CSS3 animation (@keyframes)

## animation
```html5
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
 
## @keyframes && animation
```scss
/*css 最高优先级!important*/
@keyframes animate{
	0% {background: red};
	15% {background: orange}
	30% {background: yellow}
	45% {background: green}
	60% {background: blue}
	75% {background: indigo}
	90% {background: violet}
	95% {background: white}
	100% {background: black}
}
.animate{
	/*animation: name duration timing-function delay iteration-count direction fill-mode play-state;*/
	animation: animate 7s ease 0s infinite alternate-reverse both running;
	width: 200px;
	height: 200px;
	background: radial-gradient(center, red, orange, yellow, green, blue, indigo, violet);
}
.animate span{
	justify-content: center;
	vertical-align: center;
	box-sizing: border-box;
	margin: 50px auto;
	text-align: center;
	font-weight: bold;
	font-size: 2em;
	word-break: keep-all;
}
```