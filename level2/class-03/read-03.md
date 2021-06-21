# lists in html #
in html we have a three types of lists and we can nest it on each other and these three type of lists are

<br>

1.   **ordered** list `<ol>` which use numbers nd each item in the list should be placed in `<li>` tag for example
 
        <br>

     ```html
        <ol>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
            <li>Item 5</li>
        </ol>
     ```
the result will be 
 1. Item 1
 2. Item 2
 3. Item 3
 4. Item 4
 5. Item 5
<br>
            <br> 
2 **unordered** list `<ul>` which use bullets
<br>

     ```html
     <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
    </ul>

     ```
the result will be 
- Item 1
- Item 2
- Item 3

<br>
<br>


3. **definition** list `<dl>` which use to define terminology and Inside the `<dl>` element we will usually see pairs of `<dt>` and `<dd>` elements and
`<dt>`  is used to contain the term
being defined and the `<dd>` This is used to contain the definition.
<br>

     ```html
        <dl>
        <dt>Sushi</dt>
        <dd>Sliced raw fish that is served  with  condiments such as shredded daikon radish or  ginger root, wasabi and soy sauce</dd>
    </dl>
     ```
and it will be like this
    <dl>
        <dt>Sushi</dt>
        <dd>Sliced raw fish that is served with  condiments such as shredded daikon radish or  ginger root, wasabi and soy sauce</dd>
    </dl>

## NESTED LIST##
You can put a second list inside an `<li>` element to create a sub-list or nested list.

```html
    <ul>
        <li>lemon</li>
         <li>apple
            <ul>
             <li>red apple</li>
             <li>green apple</li>
             <li>yellow apple</li>
            </ul>
         </li>
        <li>orange</li>
    </ul>
```

# boxes in html #
Box Dimensions (width and height) we can add width and height for each box-element for example adding for a `<div>` element 
```css
    div {
        height: 300px;
        width: 300px;
    }
```

that **BOX** surrounded by 
1. border : The border separates the edge of one box from another.and we can adjust the width of the borer and change the style of it and the border can be an **image** and corners can be rounded by using radius

2. margin : sit outside the edge of the border

3. padding : is the space between the border of a box and any content contained within it we can adjust it to be applied on one side top left right or all of them 

every element has a display property witch allow you to show the element as a block or inline or inline-block or even hide the element 


# ARRAYS #
An array is a special type of variable. It doesn't just store one value; it stores a list of values. 

You should consider using an array whenever you are working with a list or a set of values that are related to each other. 

arrays can be created like this
```js
    let colors;
    colors=['white','red','blue'];
```
and the index in array start from 0 to the last item in the array and you can call the item in an array by it's index like this
```js
    colors[2] = 'yellow' ; 
    // change the blue color to yellow
```

# switch statement # 
switch statement starts with a variable called the switch value Each case indicates a possible value for this variable and the code that should run if the variable matches that value

switch faster than the if else 
```js

let msg;
var level = 2;
    switch (level) {
    case 1:
        document.write = 'Good luck on the first tes ' ;
    break;
    case 2:
        msg = 'Second ';
    break;  
    default :
        msg = 'Good';
    break;
    } 

```

## LOOP ##
if it's returns true a code block will run then the condition will be checked again and if it still returns true the code block will run again
 
 and there are three common types of loops
 - for
 - while
 - do while

 **LOOP COUNTERS**

 the condition is made up of three statement 
 - initialization `var i =0;`
 - condition `i < 10 ;`
 - update `i ++`

 and here is en example for a for loop
 ```js
        const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

let text = "";
for (let i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}

document.getElementById("demo").innerHTML = text;
// loop for printing car names
```








