# TABLES IN HTML

![table](https://cdn.educba.com/academy/wp-content/uploads/2019/10/Create-Tables-in-HTML.png)

A table represents information in a grid format Examples of tables include financial reports, TV schedules, and sports results.

## the basic table structure

you have to use tags to implement a table in a webpage and these tags are `<table>` for creating the table `<tr>` for creating each row in the table and `<td>` to create the table cell which contain our data and the next example explain it :

```html
<table>
  <!-- tag to create the table -->
  <tr>
    <!-- the first row of data -->
    <td>first cell</td>
    <td>second cell</td>
  </tr>
  <tr>
    <!-- the 2 row of data -->
    <td>45</td>
    <td>60</td>
  </tr>
  <tr>
    <!-- the 3 row of data -->
    <td>60</td>
    <td>90</td>
  </tr>
</table>
```

# LISTS

![list image](https://data-flair.training/blogs/wp-content/uploads/sites/2/2020/07/html-lists-df.jpg)
we can control the **lists** just like any other element in the webpage and there are many of styles to apply on the list and here are some

- **Bullet Point Styles** by using `list-style-type` The list-style-type property allows you to control the shape or style of a bullet point (also known as a marker).
  and there are types for **unordered** list like `disc` which is a filled circle and `circle` which is an empty circle and `square` which is a square

for the **ordered** list we can use `decimal` numbers(1 2 3 )or `decimal-leading zero`(01 02 03) or `lower alpha` (a b c) or `upper-alpha` (A B C) and `lower-roman` like (i. ii. iii.) or `upper-roman` like (I II III) like in this example which using lower rome

```css
ol {
  list-style-type: lower-roman;
}
```

- **images for bullets** by using `list-style-image` You can specify an image to act as a bullet point using the list-style-image property.The value starts with the letters url and is followed by a pair of parentheses. Inside the parentheses, the path to the image is given inside double quotes.This property can be used on rules that apply to the `<ul>` and `<li>` elements like in this example which using a star image

```css
ul {
  list-style-image: url("images/star.png");
}
```

# FORMS

![forms](https://s3-us-west-2.amazonaws.com/staticresources123/site/other/landings/php-contact-form/contact-form.png)
An HTML form is used to collect user input. The user input is most often sent to a server for processing and The `<form>` element is a container for different types of input elements, such as text fields, checkboxes, radio buttons, submit buttons for example:

- **text field** The `<input type="text">` defines a single-line input field for text input like in this example for entering the first and the last name and it has The `<label>` Element which it is useful for screen-reader users, because the screen-reader will read out loud the label when the user focus on the input element

```html
<form>
  <label for="fname">First name:</label><br />
  <input type="text" id="fname" name="fname" /><br />
  <label for="lname">Last name:</label><br />
  <input type="text" id="lname" name="lname" />
</form>
```

hope **noticing** The for attribute of the <label> tag should be equal to the id attribute of the <input> element to bind them together.

- **Radio Buttons** The `<input type="radio">` defines a radio button.Radio buttons let a user select ONE of a limited number of choices like in this example where the user will chose between one of these

```html
<form>
  <input type="radio" id="html" name="fav_language" value="HTML" />
  <label for="html">HTML</label><br />
  <input type="radio" id="css" name="fav_language" value="CSS" />
  <label for="css">CSS</label><br />
  <input type="radio" id="javascript" name="fav_language" value="JavaScript" />
  <label for="javascript">JavaScript</label>
</form>
```

- **Checkboxes** The `<input type="checkbox">` defines a checkbox Checkboxes let a user select ZERO or MORE options of a limited number of choices. like in this example

```html
<form>
  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
  <label for="vehicle1"> I have a bike</label><br />
  <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
  <label for="vehicle2"> I have a car</label><br />
  <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
  <label for="vehicle3"> I have a boat</label>
</form>
```

- **The Submit Button** The `<input type="submit">` defines a button for submitting the form data to a form-handler. The form-handler is typically a file on the server with a script for processing input data. The form-handler is specified in the form's action attribute like in this example which will show a form with a submission button

```html
<form action="/action_page.php">
  <label for="fname">First name:</label><br />
  <input type="text" id="fname" name="fname" value="ali" /><br />
  <label for="lname">Last name:</label><br />
  <input type="text" id="lname" name="lname" value="al-hassan" /><br /><br />
  <input type="submit" value="Submit" />
</form>
```

<br>

# EVENTS IN JS

![img](https://data-flair.training/blogs/wp-content/uploads/sites/2/2019/07/Ways-of-Using-JavaScript-Events-1200x720.png)
HTML events are "things" that happen to HTML elements When JavaScript is used in HTML pages, JavaScript can "react" on these events.

## HTML Events

An HTML event can be something the browser does, or something a user does.like these examples of HTML events

- An HTML web page has **finished** loading
- An HTML input field was **changed**
- An HTML button was **clicked**

when events happen, you may want to do something so in JavaScript we can execute code when events are detected and HTML allows event handler attributes, with JavaScript code, to be added to HTML elements like in this example

```html
<element event="some JavaScript"> </element>
```

or even for a button like in this example which display the `date` when clicked

```html
<button onclick="displayDate()">The time is?</button>
```
