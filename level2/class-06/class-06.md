# Problem Domain, Objects, and the DOM

## problem domain

A **problem domain** is the area of expertise or application that needs to be examined to solve a problem. A problem domain is simply looking at only the topics you are interested in, and excluding everything else.
<br>
also we can say that it's an engineering term referring to all information that defines the problem and constrains the solution It includes the goals that the problem owner wishes to achieve, the context within which the problem exists, and all rules that define essential functions or other aspects of any solution product. It represents the environment in which a solution will have to operate, as well as the problem itself.

on the other side there is something called the

### **solution domain**

the solution domain defines the abstract environment where the solution is developed. The differences between those two domains are the cause for possible errors when the solution is planted into the problem domain.
<br>
<br>

## WHAT IS AN OBJECT IN JS ?

Objects group together a set of variables and functions to create a model of a something you would recognize from the real world
<br>

- IN AN OBJECT: **VARIABLES** BECOME KNOWN AS PROPERTIES If a variable is part of an object, it is called a property. Properties tell us about the object, such as the name of a hotel or the number of rooms it has. Each individual hotel might have a different name and a different number of rooms.
- IN AN OBJECT: **FUNCTIONS** BECOME KNOWN AS METHODS If a function is part of an object, it is called a method. Methods represent tasks that are associated with the object. For example, you can check how many rooms are available by subtracting the number of booked rooms from the total number of rooms.

for example :

```js
// these are variables
// the objet name is hotel
let hotel = {
  // the keys are name, rooms, booked, .......
  // and the values are "amman hills", 30, 19, ....
  name: "amman hills",
  rooms: 30,
  booked: 19,
  spa: true,
  roomsType: ["single", "double"],

  // these are methods
  checkAv: function () {
    return this.rooms - this.booked;
  },
};
```

you can access the properties or methods of an object using `dot notation` like this example

```js
let hotelName = hotel.name;
let roomsFree = hotel.checkAv();
```

and by using the square brackets syntax you can acess the properties of an object **but not it's method** like in this example

```js
let hotelName = hotel['name'],
```

also you can **update** the value of properties by using dot notation or **clear** the value or even **delete** the value like in this example

```js
hotel["name"] = "petra"; // update the hotel name to petra
hotel.name = ""; // clear the hotel name
delete hotel.name; // delete the hotel name
```

<br>

## Document Object Model

![dom image](https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/DOM-model.svg/1200px-DOM-model.svg.png)

The Document Object Model **DOM** specifies how browsers should create a model of an HTML page and how JavaScript can access and update the contents of a web page while it is in the browser window
<br>
and we can say that the HTML DOM model is constructed as a tree of Objects and when we have it ad by using **js** we can do :

- change all the HTML elements in the page
- change all the HTML attributes in the page
- change all the CSS styles in the page
- remove existing HTML elements and attributes
- add new HTML elements and attributes
- react to all existing HTML events in the page
- create new HTML events in the page

<br>

In the DOM, all HTML elements are defined as **objects**

A **property** is a value that you can get or set

A **method** is an action you can do

check this example:

```html
<html>
  <body>
    <p id="demo"></p>

    <script>
      document.getElementById("demo").innerHTML = "Hello World!";
    </script>
  </body>
</html>
```

as you see `getElementById` is a **method**, while `innerHTML` is a **property**.

and we can find an element by using one of these three ways

- `document.getElementById(id)` ///Find an element by element id
- `document.getElementsByTagName(name)` //Find elements by tag name
- `document.getElementsByClassName(name)` //Find elements by class name

also we can add **Events Handlers** for example on click event handler

```js
document.getElementById(id).onclick = function () {
  code;
};
```

### Finding HTML Objects

Often, with JavaScript, you want to manipulate HTML elements.to do so, you have to find the elements first. There are several ways to do this:

- Finding HTML Element by **Id** like in this example we want to find id="intro"

```js
const element = document.getElementById("intro");
```

- Finding HTML Elements by **Tag Name** like in this example we want to find all `<p>` elements

```js
const element = document.getElementsByTagName("p");
```

- Finding HTML Elements by **Class Name** like in this example we want to find all element with a class name class="intro".

```js
const x = document.getElementsByClassName("intro");
```

- Finding HTML Elements by ** CSS Selectors** like in this example we want to find all HTML elements that match a specified CSS selector (id, class names, types, attributes, values of attributes, etc), use the `querySelectorAll()` method which will returns a list of all `<p>` elements with `class="intro"`

```js
const x = document.querySelectorAll("p.intro");
```

- Finding HTML Elements by HTML **Object Collections** This example finds the form element with id="frm1", in the forms collection, and displays all element values

```html
<form id="frm1" action="/action_page.php">
  First name: <input type="text" name="fname" value="Donald" /><br />
  Last name: <input type="text" name="lname" value="Duck" /><br /><br />
  <input type="submit" value="Submit" />
</form>

<p>These are the values of each element in the form:</p>

<p id="demo"></p>

<script>
  const x = document.forms["frm1"];
  let text = "";
  for (let i = 0; i < x.length; i++) {
    text += x.elements[i].value + "<br>";
  }
  document.getElementById("demo").innerHTML = text;
</script>
```
