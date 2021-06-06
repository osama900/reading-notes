# Control Flow in JS #
![img](https://i.ytimg.com/vi/phXZVneg5ow/hqdefault.jpg)

it is the order that the computer will execue the statments thats mean that the computer runs from the first line in the file to tha last line unless the computer the computer runs across the structurs such as onditional and loops


# JS function #
insted of repeating the lines of code for each time the user need to use we can use somthing called **Function** which we can define under these headine

 - by using a block of code designed to perform a particulat task 
 - executed when somthing is invoked it 
 
offcourse there is a standerd syntex to write a JS function

# JS Function #
```js
function functionName (parameter1, parameter2,......){

  // code to execute

}
```
and here is an example for a function that return a sum of two numbers and return the value :
```js


var x myFunction (4,6); // Function is called, return value will end up in x

function myFunction(a, b) {
  return a + b;             // Function returns the product of a and b
}
```


# how to invoke a function #
the function can be invoked (call) in a three diffrent ways

1.  when an event accours (user click)
2. when it is invoked from JS codegit 
3. automaticlly (self invoke)


# JS function return #
when JS reach a return statment the function will stop executing for example :

```js
function toCelsius(f) { // function name and the parameter f
  return (5/9) * (f-32); // code to execute 
}
document.getElementById("demo").innerHTML = toCelsius(77);  send a value of 77 to exectuted in the function 
```


