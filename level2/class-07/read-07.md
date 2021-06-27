# Read-07 Object-Oriented Programming, HTML Tables

The domain model is a representation of meaningful real-world concepts pertinent to the domain that need to be modeled in software

also we can say domain model generally uses the vocabulary of the domain, thus allowing a representation of the model to be communicated to non-technical stakeholders. It should not refer to any technical implementations such as databases or software components that are being designed.

# tables in html

![table](https://cdn.educba.com/academy/wp-content/uploads/2019/10/Create-Tables-in-HTML.png)

There are several types of information that need to be displayed in a grid or table thats mean When representing information in a table, you need to think in terms of a grid made up of rows and columns

## basic table structure

The `<table>` element is used to create a table. The contents of the table are written out row by row.

`<tr>` indicate the start of each row using the opening `<tr>` tag
It is followed by one or more of `<td>` elements At the end of the row you use a closing `</tr>` tag

`<td>` Each cell of a table is represented using a `<td>` element. (The td stands for table data.) At the end of each cell you use a closing `</td>` tag. like in this example

```html
<table>
  <tr>
    <td>15</td>
    <td>15</td>
    <td>30</td>
  </tr>
  <tr>
    <td>45</td>
    <td>60</td>
    <td>45</td>
  </tr>
  <tr>
    <td>60</td>
    <td>90</td>
    <td>90</td>
  </tr>
</table>
```

The `<th>` element is used just like the `<td>` element but its purpose is to represent the heading for either a column or a row. (The th stands for table heading.)

Spanning Columns Sometimes you may need the entries in a table to stretch across more than one column so The `colspan` attribute defines the number of columns a cell should span.

Spanning Rows You may also need entries in a table to stretch down across more than one row so The `rowspan` attribute defines the number of columns a cell should span.

long tables There are three elements that help distinguish between the main content of the table and the first and last rows These elements help people who use screen readers and also allow you to style these sections in a different manner than the
rest of the table

- `<thead>` The headings of the table should sit inside the `<thead>` element.
- `<tbody>` The body should sit inside the `<tbody>` element
- `<tfoot>` The footer belongs inside the `<tfoot>` element.

By default, browsers rarely treat the content of these elements any differently than other elements

# JavaScript Constructor Functions

![js](https://i1.wp.com/blog.alexdevero.com/wp-content/uploads/2021/01/10-01-21-six-ways-to-create-objects-in-javascript-blog.jpg)
In JavaScript, functions can be used as templates for creating other objects. These functions are called constructor functions and have special properties that are different from regular functions.

## Defining Constructor Functions

They can be called with the `new` keyword to construct a new instance of an object from constructor functions.

Also, they’re different from regular functions in that their name should start with a capital letter.
A simple example of a constructor function would be the following:

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}
```
