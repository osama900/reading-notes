# Thinking in React

![re](https://devtrust.biz/wp-content/uploads/2021/08/Thinking-in-React2.jpg)

1. How would you break a mock into a component hierarchy?

   - by giving every component and sub component a name
   - now we should decide if we need to build a new function or object
   - if we displaying the data correctly from the JSON data model to user and we map the data correctly we will see a nice result

2. What is the **single responsibility principle** and how does it apply to components?
   it is a computer-programming principle that states that every module, class or function in a computer program **should have responsibility over a _single part_ of that program's functionality** In order to abide by the SRP in React, Component Composition is used. Component Composition is implemented to reuse the same code across multiple components. Component Composition is designing components based on their functionality, or what they do
3. What does it mean to build a ‘static’ version of your application?
   has no activity only displaying a rendered data even without using state becouse it its some kind of interactivity

4. Once you have a static application, what do you need to add? using props to rerender the ui

5. What are the three questions you can ask to determine if something is state?

   - Can change inside Component? the answer need to be **YES**
   - Can change in child Components?the answer need to be **NO**
   - Can be changed by parent Component?the answer need to be **NO**

6. How can you identify where state needs to live? inside the component
