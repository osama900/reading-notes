# HTML Images Color  Text #
![html code image](https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&q=80&fm=jpg)
html provide with css the appility to make the webpage looks like more prettier and more functional by adding images and adding colors to the text or to the elements inside the page so we will start talk abou these one by one
<br>
<br>
## HTML IMAGES ##
![html image](https://d2h0cx97tjks2p.cloudfront.net/blogs/wp-content/uploads/sites/2/2020/07/html-images-df.jpg)
<br>

There are many reasons why you might want to add an image to a web page: you might want to include a logo, photograph, illustration, diagram, or chart.

<br>
also we have to consider about the which size is right and which format for what kind of images is right and is it possible to optimize our images to use in the web site 
<br>
we can use the images as it is or with css we can use it as a background 

it is good practice to create a folder for all of the images the site uses
<br>
<br>
### Adding Images ###
To add an image into the page you need to use an `<img>` element. This is an empty element (which means there is no closing tag). It must carry the following two attributes `src` This tells the browser where it can find the image file and `alt` to provide additional information about the image like in this example
```html
 <img src="images/quokka.jpg" 
   alt="A family of quokka" title="The quokka is an Australian  marsupial that is similar in size to the domestic cat." />
```
also the size of an image can be changed using `height` and `width` attribute like this example

```html
<img src="images/quokka.jpg" alt="A family of  quokka" width="600" height="450" />
 ```
 ## Three Rules for Creating Images ##
 There are three rules to remember when you are creating images for your website which are :
1. **Save images in the right format** : use images in jpeg, gif, or png format
2. **Save images at the right size** :You should save the image at the same width and height it will appear on the website 
3. **Use the correct resolution** : need to check what is the correct resolution for the devices

## COLOR ##
![color image](https://i1.wp.com/www.csscodelab.com/wp-content/uploads/2019/11/html-css-fatalistic-color-palette-ui-concept.png)

Color can really bring your pages to life , as  there are three common ways in which you can  indicate your choice of colors as css can provide extra ways for coloring

r terminology, as there are some terms that are very helpful to understand when it comes to picking colors especially while dealing with text i should think about things like readability and the background color can be applied to the hole page or to a specific element 

### Foreground Color ###
`color` The color property allows you to specify the color of text inside an element. You can specify any color in CSS in one of three ways:
1. **rgb values** :  how much red, green and blue are used to make the color and it takes a value between 0 and 255 and the forth value wil be for the opacity which it is a percentage value between 0 and 1  like in this example :
```css
p {
  /*rgb value */
color: rgb(100,100,90,);}

/*rgb value with an opacity of 50% */
color: rgba(100,100,90, 0.5);}
```
2. **hex codes** : These are three or six-digit codes that represent the amount of red, green and blue in a color, preceded by a pound or hash # and if i want to add opacity `alpha` value i'm have to rewrite the code like in this example : 
```css
/* hex code without alpha (transparency )  */
h2 {
color: #ee3e80;}

/* hex code with a 50% alpha (transparency )  */
background-color: hsla(0,100%,100%,0.5);}
```
3. **color names** : There are 147 predefined color names that are recognized by browsers like in this example : 
```css
/* color name */
h1 {
color: DarkCyan;}
```
### background-color ###
CSS treats each HTML element as if it appears in a box, and the background-color property sets the color of the background for that box and i can change the background color like in this example :
```css
/*changing the background color for the body*/
body {
background-color: rgb(200,200,200);}

/*changing the background color for the h1 element*/
h1 {
background-color: DarkCyan;}
```
### extra terms to understand in coloring ###
- **Hue** : Hue is near to the colloquial idea of color
- **Saturation** : Saturation refers to the amount of gray in a color
- **Brightness** : Brightness (or "value") refers to how much black is in a color


### Contrast ###
When picking foreground and background colors, it is important to ensure that there is enough contrast for the text to be legible

![text in html](https://cdn.educba.com/academy/wp-content/uploads/2020/02/html-text-attributes.jpg)
## TEXT IN HTML ##
The properties that allow you to control the appearance of text can be split into two groups 
- Those that directly affect the font and its appearance (including the typeface, whether it is regular, bold or italic and the size of the text)
- Those that would have the same effect on text no matter what font you were using (including the color of text and the spacing between words and letters)

### Typeface Terminology ###
- **Serif** : Serif fonts have extra details on the ends of the main strokes of the letters. These details are known as serifs.
- **Sans-Serif** : Sans-serif fonts have straight ends to letters, and therefore have a much cleaner design.
- **Monospace** : Every letter in a monospace (or fixed-width) font is the same width. (Non-monospace fonts have different widths.)


### Specifying Typefaces ###
`font-family` The font-family property allows you to specify the typeface that should be used for any text inside the element(s) to which a CSS rule applies. The value of this property is the name of the typeface you want to use like in this example
```css
/* changing the font family for h1 and h2 */
h1, h2 {
 font-family: Arial, Verdana, sans-serif;}
 ```

 ### font-size ##
 The font-size property enables you to specify a size for the font by one of these ways by one of the unites of type size
 - **Pixels** commonly used because they allow web designers very precise control over how much space their text takes up. The number of pixels is followed by the letters px
 - **percentages** The default size of text in browsers is 16px. So a size of 75% would be the equivalent of 12px, and 200% would be 32px
 - **ems** allow you to change the size of text relative to the size of the text in the parent element
 ```css
/*change the body text size to 12 px*/
 body {
  font-family: Arial, Verdana, sans-serif;
  font-size: 12px;}

  /* change h1 text size 200%*/
h1 {
  font-size: 200%;}

  /*change h2 text size 1.3em*/
h2 {
  font-size: 1.3em;}
 ```

### more font choices ###
- **font-face** @font-face allows you to use a font, even if it is not installed on the computer of the person browsing, by allowing you to specify a path to a copy of the font, which will be downloaded if it is not on the user's machine and it has these attribute :
- **font-family** This specifies the name of the font.
- **src**  This specifies the path to the font.
and this example explain it:
```css
@font-face {
font-family: 'ChunkFiveRegular';
src: url('fonts/chunkfive.eot');}
```

