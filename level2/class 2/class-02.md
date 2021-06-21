# TEXT IN HTML #
we can work within text inside the html page in different way for example :
1. by using **heading and paragraphs** such as:
    -  ```html
            <h1> this is main heading</h1>
        ```
     and there are 6 level of them


    -  ```html
         <p>this paragraph start from here and
            that form a self-contained unit of discourse. The start of a paragraph is indicated by a  new
        line.</p>
        ```
    
2. using **bold and italic** to apply bold or italic style to the text for example:
    -   ```html
            <p>example for a <b> bold</b> text, and this text <i> in italic</i>  </p>
        ```

3. uses of **horizontal lines and breaks** to insert a horizontal line and insert a empty line
    -   ```html
            <hr />
            <br />
        ```

4. using of **strong and em** to make the text or part of it strong and by default the web browser will show it as bold or to emphasis it and by default the web browser will show it as italic :
    -   ```html
            <p>this text will be in<strong>strong</strong></p>

            <p>but this text will be  <em>emphasis</em>.</p>
        ```
<br>
<br>

# CSS #
by using **css** we can make our web pages more attractive and css let us control and designing a rules that specify how the content of an element should appear
<br>
since we have elements inside our web pages by using css we can call them and give them different styles by selecting the element
<br>
<br>
 `selector` **h1, h2** then we cam apply many styles as a
 <br>
  `declaration` **{font-family: Arial;}** for the element which contain from
  <br>
   `property` **font-family:** and a
<br>
    `value`  **Arial** like this:
    <br>


```css
    h1, h2, {
        font-family: Arial;
        color: red;
    }
 ```
<br>
    for applying ay of these style we can use any of these three ways

<br>

1. inline style
2. internal style
2. external style (which it is the best practice)
<br>

and we can select the element in different way :
1. universal selector
      -  ```css
            * {}
          ```
2. type selector
      -  ```css
            h1, h2, h3 {}
          ```
3. class selector
      -  ```css
            .note {}
          ```
4. id selector
      -  ```css
            #studentImg {}
          ```
1. descendant selector
      -  ```css
            p a {}
          ```

# JAVASCRIPT #
in JS we can make comments to explane what does the code do like this and it will appear i green
<br>
```js
/* Th i s script displays a greeting to the user based upon the current time.
It is an example from JavaScript & jQuer y book */ 
```
<br>

**what are the variables**
we will use `let` to declare the variables and there are different data types like 
1. **numbers** which it is any number and we can declare it like this
    - ```js
        let stdNumber = 2015;
        let present = 3.5; 
      ```

2. **string** which it is any thing between `" " ` or `' '` 
    - ```js
        let studentMessage = "check tour admin";
      ```
3. **boolean** which can be tru or false
    - ```js
        let isSigned = true;
      ```

**with** we can use mathematical operation with the number datatype variables 
<br>
and since we have a logical variables we can use a logical operators like and` &&`  or `||` not `!` 
<br>

and one of the nice things we can use in JS is **switch statement** which starts with a variable called the switch value. Each case indicates a possible value for this variable and the code that should run if the variable matches that value for example :
<br>
```js
switch (level) {
    case 'One ':
        title= 'Level 1 ' ;
    break;
    case 'Two':
        tit 1 e = ' Level 2 ' ;
    break;
    case ' Three' :
        title = 'Level 3' ;
    break ;
    default :
        title= 'Test';
    break; 
}
```