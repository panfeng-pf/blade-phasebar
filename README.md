blade-phasebar
==============
Phase Bar, a jQuery plugin.<br/>
Show specified phases in 1 horizontal bar, and each phase spot has its own status.<br/>
Demo is in package.

Demo Snapshot
--------------
![github](https://raw.githubusercontent.com/panfeng-pf/blade-phasebar/master/snapshot/examples.png "blade-phasebar")

How to Use
--------------
### Import CSS
```html
<link rel="stylesheet" href="css/jquery.blade-phasebar.css">
```

### Import JS
```html
<script src="dependency/jquery-1.9.1.min.js"></script>
<script src="js/jquery.blade-phasebar.js"></script>
```

### Initial phase bar
```html
<script type="text/javascript">
  $(function() {
	$('selector').bladePhaseBar();
	// or $('selector').bladePhaseBar({option});
  }
</script>
```

### Option Description
```javascript
{
  phaseSpacing: 100,        //length between 2 phases, unit: px, default: 100
  lineHeight: 2,            //height of connected line between 2 phases, unit: px
  spotWitdth: 20,           //width of phase spot, unit: px, default: 20
  spotHeight: 20,           //height of phase spot, unit: px, default: 20
  colorUndo: 'lightgrey',   //color for 'undo' spot, default: 'lightgrey'
  colorDone: 'orange',      //color for 'done' spot, default: 'orange'
  colorDoing: 'lightgreen', //color for 'doing' spot, default: 'lightgreen'
  colorFail: 'red'          //color for 'fail' spot, default: 'red'
}
```

### line style
```css
/*for element type*/
hr.line

/*for status*/
hr.line-undo
hr.line-done
```

### Phase spot style
```css
/*for element type*/
div.spot

/*for status*/
div.spot-undo
div.spot-done
div.spot-doing
div.spot-fail

/*for shape, need CSS3 supported*/
div.spot-rounded
div.spot-capsule
div.spot-ellipse
```

Example HTML
--------------
```html
<html>

<head>
  <link rel="stylesheet" href="css/jquery.blade-phasebar.css">
</head>

<body>
	<div style="border:1px solid;padding:5px;">
		<div id="example1" class="phasebar">
			<hr class="line line-undo">
			<hr class="line line-done" rate="1">
			
			<div class="phase">
				<div class="spot spot-done">1</div>
				<div class="name">xxxx</div>
			</div>
			
			<div class="phase">
				<div class="spot spot-rounded spot-done">2</div>
				<div class="name">yyyy</div>
			</div>
			
			<div class="phase">
				<div class="spot spot-capsule spot-undo">3</div>
				<div class="name">zzzz</div>
			</div>
		</div>
	</div>
</body>

<script src="dependency/jquery-1.9.1.min.js"></script>
<script src="js/jquery.blade-phasebar.js"></script>
<script type="text/javascript">
	$(function() {
		$('div#example1.phasebar').bladePhaseBar();
	});
</script>

</html>
```
