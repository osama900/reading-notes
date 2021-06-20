# this is reading 1 in level 2 #
![l2](https://japanesequizzes.com/wp-content/uploads/2016/02/Level-02.png)
<br>
TODAY in this section i will talk about **html** , **css** and **js**
![html css js](https://www.pngix.com/pngfile/middle/224-2240638_logotipos-de-html5-javascript-y-css3-html-css.png)

<br>
and how to use all of these to create the best experience for the client 


<br>

## so let's start ##
because there are different users uses owr website  and they uses there own different devices in different situation to access the website using web browser and bee served by a web host company which provide hosting for the website and manege the request respond with the client through the internet provider 
<br>
<br>
<br>
By using [**HTML**](https://www.w3schools.com/html/default.asp) and [**CSS**](https://www.w3schools.com/css/default.asp) which it is the basic tools or building a web page which ruled by rules called **syntax** by using tags which contain from opining tags and closing tags.<br>
the opining tag can contain attribute name and attribute values and the main structure or html is: 
<br>
```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
</head>
<body>
	
</body>
</html>
```
<br>
<br>
<br>
# HTML5 #
<br>
the newest version of html is html 5 

```html
<!DOCTYPE html>
```
and comment can be added in here

```html
<!-- comments added here -->
```

all elements in the webpage will be display as a block unless we added (inline) attribute to the element 
<br>
multi elements can be in same group for example by adding it to a `<div>` element 
<br>
<br>
<br>
# HTML LAYOUT #
THE RENDERED BODY page  can be divided into a different sections to complete the page as this <br>
```html

<body>
    <header> header section</header>
    <nav>navigation section here </nav>

    <section> section 1</section>

    <article> some article here </article>

    
	<footer> footer section </footer>

</body>

```
and many more which help us to understand the shape of the webpage
<br>
<br>
Because we build the website for the customer we need to understand their needs to design the webpages as best as possible and we can do that by understanding their :
- ages
- where they live
- average income
- what kind of device they use 
- how many time they visit our website

<br>
on the other side we need to have a **site map** to help us later in **wireframming** so we can arrange data within it

<br>     
<br>     
<br>     

# JS #
by using [**JS**](https://www.w3schools.com/js/default.asp) to our website we make it more interactive <br>
in JS we can :
- access the content of the page 
- modify the content 
- program rules or instructions the browser can follow 
- react to the event triggered by the user or the browser 

<br>
<br>

before we start writing **JS** code we need to understand and define the goal of the code and design the script after that we can flow that to flow chart for applying the code based on the target and steps for that specific target by using method and events.
<br>
we can place a `JS` code in inside the html page but the best practice is to make a separate file then link it to the html webpage 
```html
<html>
<head>
	<title>title </title>
</head>
<body>





<!-- JavaScript code should be here t the end of the body tag -->
	<script src="js/jquery.min.js">
    </script>
</body>
</html>
```