# JS ERRORS HANDLING AND DEBUGGING

![error](https://freetutsdownload.com/wp-content/uploads/2021/04/Debugging-and-Fixing-Common-JavaScript-Errors.jpg)

## Errors in JavaScript

Errors are statements which don't let the program run properly and There are three main types of errors that can occur while compiling a JavaScript program and these errors are :

- **syntax errors** : Syntax errors are the most common type of error that occurs in any programming language. As the name suggests **something incorrect in the syntax of the program body** raises this error. Syntax errors are also known as parsing errors. In JavaScript, they occur at the interpretation time like in this example that the program will raise an error as the closing bracket of the show function is missing

```js
<script type="text/javascript">window.show(; // no closing bracket</script>
```

- **runtime errors** : this type of error occurs during the runtime of the program, after it is interpreted by the compiler like in this example where the program will raise an error at runtime as the function which is not present is called, even if the syntax is correct

```js
<script type="text/javascript">window.show();</script>
```

- **logical errors** : These type of errors are the most difficult to find. Consider a statement: `"Ali is playing Video games"` This statement is **logically correct and its syntax is also correct** Now consider another statement: `"Video games is playing John` This **statement is correct but is logically incorrect** These types of errors cause a _serious problem_ as they change the whole path of how your program will work

# HOW TO DEAL WITH ERRORS

![error](https://res.cloudinary.com/practicaldev/image/fetch/s--XH4hlkWW--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/uu01niebng6v2i5ptznz.jpg)
there are two things you can do with the errors

1.  **DEBUG THE SCRIPT TO FIX ERRORS** : If you come across an error while writing a script you will need to _debug the code_ and track down the source of the error and fix it
2.  **HANDLE ERRORS GRACEFULLY** : You can handle errors gracefully using `try, catch, throw and finally` statements and we use this to control the error that may happened in our code

## A DEBUGGING WORKFLOW

Debugging is about deduction eliminating potential causes of an error and it's possible trying to narrow down where the problem might be then trying to look for clues by:

1. **WHERE IS THE PROBLEM?** : you should try to narrow down the area where the problem seems to be. In a long script, this is especially important.

- Look at the error message, it tells you
  - The relevant script that caused the problem
  - The line number where it became a problem for the interpret
  - The type of error
- Check how far the script is running
- Use breakpoints where things are going wrong They let you pause execution and inspect the values that are stored in variables

2. **WHAT EXACTLY IS THE PROBLEM?** : Once you think that you might know the rough area in which your problem is located, you can then try to find the actual line of code that is causing the error

- When you have set breakpoints, you can see if the variables around them have the values you would expect them to. If not, look earlier in the script
- Break down I break out parts of the code to test smaller pieces of the functionality
  - Write values of variables into the console.
  - Cal functions from the console to check if they are returning what you would expect them to.
  - Check if objects exist and have the methods or properties that you think they do.
- Check the number of parameters for a function, or the number of items in an array

and of course after all these long fixing you may repeat it over again because of another uncover error !
