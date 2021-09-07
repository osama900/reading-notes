# FUNCTIONAL PROGRAMMING

![dddd](https://www.hexacta.com/wp-content/uploads/2015/11/Functional-programming.jpg)

1. What is functional programming?

   Functional programming is a programming paradigm — a style of building the structure and elements of computer programs — that treats computation as the evaluation of mathematical functions and avoids changing-state and mutable data

2. What is a pure function and how do we know if something is a pure function?

It returns the same result if given the same arguments

3. What are the benefits of a pure function?

   - They are idempotent
   - They offer referential transparency
   - They are memoizable
   - They’re easier to reason about
   - They’re easier to combine
   - They’re easier to test
   - They’re easier to debug
   - They’re easier to parallelize

<br>

4.  What is immutability?

    Unchanging over time or unable to be changed

5.  What is Referential transparency?

    if a function consistently yields the same result for the same input, it is referentially transparent.

# MODULES & REQUIER()

![ddd](https://cdn-media-1.freecodecamp.org/images/1*AL0-iuggGnBLSvSVvt0Xzw.png)

1. What is a module?

small units of independent, reusable code that is desired to be used as the building blocks in creating

2. What does the word ‘require’ do?

to use the functionality from the module inside the application which it is a global object

3. How do we bring another module into the file the we are working in?

by using `require(*the path of the module);`

3. What do we have to do to make a module available?

we need to export whatever we need to available outside the module
