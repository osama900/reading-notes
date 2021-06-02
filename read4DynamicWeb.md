# What is JavaScript ? #
JavaScript is a cross-platform, object-oriented scripting language used to make webpages interactive for example

1. having complex animations
2. clickable buttons
3. popup menus 
4. realtime collaboration between multiple computers inside host envieroment 

**JS** contains a standerd library of objects such as `Array` , `Date` , `Math` , `operators` , `control structures` and `statements`. which can be used in booth client-side and server-side 

- **Client-side:** supplying objects to control a browser and its *Document Object Model* (DOM) for example mouse clicks, form input and page navigation



- **Server-side** supplying objects relevant to running JavaScript on a server for example communicating with a database or perform file manipulations on a server

This means that in the web browser and **JS** can change the way the webpage looks and **Node.js** JavaScript on the server can respond to custom requests from code written in the browser

# Input and Output in JS#
**JS** provide several ways to make the user input or output in web browser and the resalt will be showen in the **html** rendered page

for example if i want the user ot enter first name and last name and when pressing a button i want to show the user the full name 

inside the `<body>` tag write:

1. ask the user to **input** first name and last name
```html
First name: <input id="first_name">
Last name: <input id="last_name">
button id="say">Say hi!</button>
```

2. make a place to **show** the result

```html
<div id="result"></div>
```

3. java script code for get full name and store in `fullname` variable and show in `result` after the user press in button `say`.<br>

```js
<script>
function say_hi() {
    var fname = document.getElementById('first_name').value;
    var lname = document.getElementById('last_name').value;
 
    var fullname = 'Hello <b>' + fname + '</b> ' + lname; ///full name
 
    document.getElementById('result').innerHTML = fullname;
}
 
document.getElementById('say').addEventListener('click', say_hi);
</script>

```














[BACK HOME](https://osama900.github.io/reading-notes/)


<br>
<br>
<br>
<br>
<br>
<br>

</> with ❤️ by @osama900

