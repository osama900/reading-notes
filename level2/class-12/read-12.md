# HTML canvas Element & Chart.js

![canvas image](https://i.morioh.com/932ce035d1.png)

## The canvas element

```html
<canvas id="tutorial" width="150" height="150"></canvas>
```

At first sight a `<canvas>` looks like the `<img>` element, with the only clear difference being that it doesn't have the _src_ and _alt_ attributes. Indeed, the `<canvas>` element has only two attributes, width and height. These are both optional and can also be set using DOM properties

## Drawing shapes with canvas

all shapes need to be darwin within the javascript so we will follow these steps to draw a shapes

1. Find the Canvas Element : first of all, you must find the `<canvas>` element.This is done by using the HTML DOM method getElementById():

```js
let canvas = document.getElementById("myCanvas");
```

2. Create a Drawing Object : Secondly, you need a drawing object for the canvas The `getContext(`) is a built-in HTML object, with properties and methods for drawing:

```js
var ctx = canvas.getContext("2d");
```

3. Draw on the Canvas : Finally, you can draw on the canvas like setting the fill style of the drawing object to the color red:

```js
ctx.fillStyle = "#FF0000";
```

The fillStyle property can be a `CSS color`, a `gradient`, or a `pattern`. The default fillStyle is **black**.

The `fillRect(x,y,width,height)` method draws a rectangle, filled with the fill style, on the canvas:

and here are some function to perform these steps

- **beginPath()** : Creates a new path. Once created, future drawing commands are directed into the path and used to build the path up.
- **Path methods** : Methods to set different paths for objects.
- **closePath()** : Adds a straight line to the path, going to the start of the current sub-path.
- **stroke()** : Draws the shape by stroking its outline.
- **fill()** : Draws a solid shape by filling the path's content area.
  and in this example we will draw a rectangle

```js
function draw() {
  var canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.moveTo(75, 50);
    ctx.lineTo(100, 75);
    ctx.lineTo(100, 25);
    ctx.fill();
  }
}
```

also we can add some colors to the drawings we used only the default line and fill styles. Here we will explore the canvas options we have at our disposal to make our drawings a little more attractive. we can add different colors, line styles, gradients, patterns and shadows to your drawings.

`fillStyle = color`
Sets the style used when filling shapes.
` strokeStyle = color`
Sets the style for shapes' outlines.
like in this example

```js
ctx.fillStyle = "orange";
ctx.fillStyle = "#FFA500";
ctx.fillStyle = "rgb(255, 165, 0)";
ctx.fillStyle = "rgba(255, 165, 0, 1)";
```

## Drawing text

The canvas rendering context provides two methods to render text

- `fillText(text, x, y [, maxWidth])` : Fills a given text at the given (x,y) position. Optionally with a maximum width to draw like in this example

```js
function draw() {
  var ctx = document.getElementById("canvas").getContext("2d");
  ctx.font = "48px serif";
  ctx.fillText("Hello world", 10, 50);
}
```

- `strokeText(text, x, y [, maxWidth])` : Strokes a given text at the given (x,y) position. Optionally with a maximum width to draw like in this example

```js
function draw() {
  var ctx = document.getElementById("canvas").getContext("2d");
  ctx.font = "48px serif";
  ctx.strokeText("Hello world", 10, 50);
}
```

## Styling text

- **font = value** : This string uses the same syntax as the CSS font property. The default font is 10px sans-serif.
- **textAlign = value** : Text alignment setting. Possible values: start, end, left, right or center. The default value is start.
- **textBaseline = value** : Baseline alignment setting. Possible values: top, hanging, middle, alphabetic, ideographic, bottom. The default value is alphabetic.
- **direction = value** : Directionality. Possible values: ltr, rtl, inherit. The default value is inherit.

## CHART.JS

![chart.js image](https://assets.materialup.com/uploads/27617c22-d2a9-4698-86e6-d523c06005a8/preview.jpg)
Charts are far better for displaying data visually than tables and have the added benefit that no one is ever going to press-gang them into use as a layout tool. They’re easier to look at and convey data quickly, but they’re not always easy to create.
It's easy to get started with Chart.js. All that's required is the script included in your page along with a single `<canvas>` node to render the chart.
and we can start using this tool by using **canvas** in html5 and we will follow these steps

- **Setting up**
  The first thing we need to do is download Chart.js. Copy the Chart.min.js out of the unzipped folder and into the directory you’ll be working in. Then create a new html page and import the script:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Chart.js demo</title>
    <script src="Chart.min.js"></script>
  </head>
  <body></body>
</html>
```

![barChart](https://bramantox.files.wordpress.com/2019/10/how-to-show-values-on-top-of-bars-in-charts-js-01.png)

- **Drawing a line chart**
  To draw a line chart, the first thing we need to do is create a canvas element in our HTML in which Chart.js can draw our chart. So add this to the body of our HTML page:

```html
<canvas id="buyers" width="600" height="400"></canvas>
```

Next, we need to write a script that will retrieve the context of the canvas, so add this to the foot of your body element

```js
var income = document.getElementById("income").getContext("2d");
new Chart(income).Bar(barData);
```

And finally, we add in the bar chart’s data:

```js
var barData = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      fillColor: "#48A497",
      strokeColor: "#48A4D1",
      data: [456, 479, 324, 569, 702, 600],
    },
    {
      fillColor: "rgba(73,188,170,0.4)",
      strokeColor: "rgba(72,174,209,0.4)",
      data: [364, 504, 605, 400, 345, 320],
    },
  ],
};
```
