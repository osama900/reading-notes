# what is CSS #
**CSS** Cascading Style Sheets allows you to creat a style for your web page by using diffrient property and its a rule based language that apply a specific effect on a specific element 

the **CSS** syntex is 
`selector {proporty : value ;}` 

 *css* can be used within my webpage in three diffrient way 

1. **inline style** which we need to apply on a uniqe element 
        ```html
        <h1 style="color:blue;text-align:center;">This is a heading</h1>```
2. **internal style** used when apply specific style on a uniqe page as in the example below 
      ```html
        <head>
         <style>
          body {
            background-color: linen;
              }

            h1 {
              color: maroon;
               margin-left: 40px;
              }
          </style>
        </head>
    ```

3. **external style** you can change the entier website style from one file and this file need to be linked to the web page 

      ```html
      <html>
        <head>
          <link rel="stylesheet" href="mystyle.css">
        </head>
        <body>
          <h1>H! ALLLL</h1>
          <p>H! ALLLLLL again</p>
        </body>
      </html>
      ```
        
