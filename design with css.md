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
        
# CSS Color #
The `color` property specifies the color of text

example for `color` proporty: `body {color: #ffa500;}` this example change the color property of the body to the color orange

diffrient types of using color

1. by using **HEX** value : `body {color: #92a8d1;}`
        A hexadecimal color is specified with: #RRGGBB, where the RR (red), GG (green) and BB (blue) hexadecimal integers specify the components of the color. All values must be between 00 and FF


2. by using **RGB** value : `body {color: rgb(201, 76, 76);}`

      Each parameter (red, green, and blue) defines the intensity of the color and can be an integer between 0 and 255


3. by using **RGBA** value : `body {color: rgba(201, 76, 76, 0.6);}` 

    RGBA color values are an extension of RGB color values with an alpha channel - which specifies the opacity of the object.


4. by using **HSL** value : `body {color: hsl(89, 43%, 51%);}`

    HSL stands for hue, saturation, and lightness - and represents a cylindrical-coordinate representation of colors

5. by using **HSLA** value : `body {color: hsla(89, 43%, 51%, 0.6);}`
HSLA color values are an extension of HSL color values with an alpha channel - which specifies the opacity of the object


All these types of coloring can be used in CSS
