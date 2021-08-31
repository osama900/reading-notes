# React and Forms

![react forms](https://raw.githubusercontent.com/emmya/fancy-fields/master/src/images/fancyexample2.gif)

it’s convenient to have a JavaScript function that handles the submission of the form and has access to the data that the user entered into the form. The standard way to achieve this is with a technique called **“controlled components”**

and the controlled components only can be updated with `setState()`

With a controlled component, the input’s value is always driven by the React state. While this means you have to type a bit more code, you can now pass the value to other UI elements too, or reset it from other event handlers

Should we wait to store the users responses from the form into state when they submit the form OR should we update the state with their responses as soon as they enter them? Why

i think we can do the following

1. **instant input validation:** we can give the user instant feedback without having to wait for them to submit the form (e.g. if their password is not complex enough)

2. **instant input formatting:** we can add proper separators to currency inputs, or grouping to phone numbers on the fly

3. **conditionally disable form submission:** we can enable the submit button after certain criteria are met (e.g. the user consented to the terms and conditions)

4. **dynamically generate new inputs:** we can add additional inputs to a form based on the user’s previous input (e.g. adding details of additional people on a hotel booking)

How do we target what the user is entering if we have an event handler on an input field?
by using `onChange = {}` event listener

# The Conditional (Ternary) Operator Explained

![im](https://scotch-res.cloudinary.com/image/upload/w_auto,q_auto:good,f_auto/v1562952581/jqctyinrganjts991d3w.jpg)

Why would we use a ternary operator?
We can use it as an if statement to but it needs less code to be written

for example

```javascript
// i have this object
let person = {
  name: "tony",
  age: 20,
  driver: null,
};
// and i need to check if of our person is greater than or equal to 16 i will use the usual if statement
if (person.age >= 16) {
  person.driver = "Yes";
} else {
  person.driver = "No";
}
// but i can do the following to execute the same result
person.driver = person.age >= 16 ? "Yes" : "No";
```

and if we have the following if statement and needed to be converted to ternary statement

```javascript
if (x === y) {
  console.log(true);
} else {
  console.log(false);
}
```

it will be

```javascript
console.log(x === y ? "true" : "false");
```
