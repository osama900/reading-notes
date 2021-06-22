

# LINKS IN HTML #
![anchor image](https://www.webdevelopersnotes.com/wp-content/uploads/html-links-target-attribute-of-anchor-tag.png)

Links are created by using the `<a>`element. Users can click on anything between the opening `<a>` tag and the closing `</a>`  tag. You specify which page you want to link to using the href attribute.

## Linking to Other Sites ##
Links are created using the `<a>` element which has an attribute called href. The value of the **href** attribute is the page that you want people to go to when they click on the link and the user can click on whatever inside the opening and closing tag  which will take you to another website also called **absolute URL** like in this example 
```html
    <a href="http://www.google.com"> click here to go to google.com</a>
    <!--- go to google.com link --->
```
## another page in same website ##
also you can make a link to another page in same website which called **relative URL** like this
```html
 <ul>
    <li><a href="index.html">Home</a></li>
    <li><a href="about-us.html">About us</a></li>
    <li><a href="contact.html">Contact</a></li>
</ul>
<!-- links between pages inside the same website -->
```
## link to user e-mail ##
and you can by using **email links** navigate to the user's email program and addresses an email to a specified email address but in **href** attribute we should add `mailto:` followed by the email address you want the email to be sent to like in this example
```html
 <a href="mailto:hi@osama.com">click here send e-mail to osama</a>
 <!-- send e-mail by pressing click here to send e-mail to osama -->
```
## open link in a new window ##

we can open the link in a new window by using `target ` attribute on the opening `<a>` tag. The value of this attribute should be `_blank` like in this example


```html
<a href="http://www.google.com" target="_blank"> click here   to go to google.com</a>
    <!--- go to google.com in new tab --->

```

## link inside the same page ##

before you can link to a specific part of a page, you need to identify the points in the page that the link will go to. You do this using the id attribute and The value of the id attribute should start with a letter or an underscore

# LAYOUT IN HTML #
![html layout](https://i.pinimg.com/originals/aa/b4/e2/aab4e2b83f12d767bb8cfeac18b682ea.jpg)
since we can create a different elements inside the same single page **html and css** gives us a different ways to position elements using normal flow, relative positioning, absolute positioning and floats.also because we have a various devices have different screen sizes and resolution, we need to understand how does it affects the design process.

If one block-level element sits inside another block-level element then the outer box is known as the containing or parent element
## controlling the position of an element ##
CSS has the following positioning schemes that allow you to control the layout of a page: normal flow, relative positioning, and absolute positioning. You specify the positioning scheme using the position property in CSS. You can also float elements using the float property

- Normal flow : Every block-level element appears on a new line
- Relative Positioning : This moves an element from the position it would be in normal flow, shifting it to the top, right, bottom, or left of where it would have been placed
- Absolute positioning : This positions the element in relation to its containing element

# Pair Programming #
![pair programming](https://martinfowler.com/articles/on-pair-programming/driver_navigator.png) 

pair programming is the practice of two developers sharing a single workstation to interactively tackle a coding task together.

the “mechanics” of coding contain **the Driver** who manages the text editor, switching files, version control, and—of course writing—code. and **The Navigator** uses their words to guide the Driver but does not provide any direct input to the computer

a lot of reasons to use pair programming
- **more efficiency** : when two people focus on the same code base, it is easier to catch mistakes in the making even if it took a little longer time **but** the quality od the coding will be better
- **Engaged collaboration** : the experience will be more engaging it is harder to get lost or waisting time when someone relay on you also there is someone to ask for help 
- **Learning from fellow students** :working with a teammate can expose developers to techniques they otherwise would not have thought of  thats why pair programming exposes the other developer to a new solution 
- **Social skills** : pair programming can help programmers develop their interpersonal skills When working with someone who has a different coding style for example thats why the key is the communication and that will has a long time impact 
- **Job interview readiness** : pairing programming help in finding and hiring in jobs also  challenges, building a project or feature, or debugging an existing code base with another person 
- **Work environment readiness** : pair programming teach us how to operate to actually deliver a product which help us to hit the ground running at a new job.