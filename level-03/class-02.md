# State and Props

the React Lifecycle Events are
![rea](https://i1.wp.com/programmingwithmosh.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-31-at-1.44.28-PM.png)
Mounting, Updating, and Unmounting are the three phases of the component lifecycle

_and of course the render happened before the componentDidMount_

What is the very first thing to happen in the lifecycle of React is the mounting then the constructor after that render

and it will be in this following

constructor => render => omponentDidMount => React Updates => componentWillUnmount

and the **componentDidMount** method is invoked immediately after a component is mounted. If you need to load anything using a network request or initialize the DOM, it should go here. This method is a good place to set up any subscriptions. If you do that, don’t forget to unsubscribe in componentWillUnmount().

## and now we will talk about React State Vs Props

1.  What types of things can you pass in the props?

    - React allows us to pass values from a parent component down to a child component. The values can be any data type, from strings to functions, objects, etc

2.  What is the big difference between props and state?

    - **props** are read only and cannot be modified
    - **state** can be asynchronous and can be modified using `this.setState`

3.  When do we re-render our application?

    - React components automatically re-render whenever there is a change in their state or props. A simple update of the state, from anywhere in the code, causes all the User Interface (UI) elements to be re-rendered automatically

4.  What are some examples of things that we could store in state?
    - counter number
