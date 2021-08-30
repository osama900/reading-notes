# Passing Functions as Props

![pass](https://www.codegrepper.com/codeimages/react-pass-function-as-prop-to-child.png)

1. What does .map() return?

The map() function is used to iterate over an array and manipulate or change data items. In React, the map() function is most commonly used for rendering a list of data to the DOM

2. If I want to loop through an array and display each value in JSX, how do I do that in React?

by looping using map() method and render it to the dom

3. Each list item needs a unique **index.**

4. What is the purpose of a key?

Keys are used to React to identify which items in the list are changed, updated, or deleted

# The Spread Operator

1. What is the spread operator?

expand an iterable object into the list of arguments

2. List 4 things that the spread operator can do
   ![spread](https://miro.medium.com/max/756/1*mbZdAMcrXN8XpOSx7Gi7Ng.png)

   - Copying an array
   - Using Math functions
   - Adding an item to a list
   - Combining objects

3. Give an example of using the spread operator to combine two arrays

`array = [1,2,3]`

`newarray = [4,5,6]`

when using spread with `lastArr = [...array,...newarray]`

the result will be `[1,2,3,4,5,6]`

4. Give an example of using the spread operator to add a new item to an array

`addArray = [4,5,6]`
when using spread with `lastArr = [1,2,3,...addArray]`
the result will be `[1,2,3,4,5,6]`

5. Give an example of using the spread operator to combine two objects into one.

```javascript
const objectOne = { hello: "🤪" };
const objectTwo = { world: "🐻" };
const objectThree = { ...objectOne, ...objectTwo, laugh: "😂" };
console.log(objectThree);
// Object { hello: "🤪", world: "🐻", laugh: "😂" }
```

# passing functions between components

1. In the video, what is the first step that the developer does to pass functions between components?
   looping through the array and create the increment function

2. In your own words, what does the increment function do?
   find out which item clicked and change the value of count to +1 then run render() again to reshow the click changes

3. How can you pass a method from a parent component into a child component?
   by using props

4. How does the child component invoke a method that was passed to it from a parent component?
   by calling the increment method that will update the state and passing the name
