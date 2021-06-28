# More CSS Layout

## Website Layout

![img layout](https://miro.medium.com/max/1024/1*XCZZZmhQN4rHLw2dW14BZQ.png)

A website is often divided into headers, menus, content and a footer

theres no one way to design a website actually there are a lot of to chose from but most of them should have these :

- **Header** : A `header` is usually located at the top of the website . It often contains a logo or the website name
- **Navigation Bar** : A `nav` / navigation bar contains a list of links to help visitors navigating through your website
- **Content** : and in this `main` content we can find multi type of views each view divided to a smaller section based on the needs of the website
- **footer** The `footer` is placed at the bottom of your page. It often contains information like copyright and contact info

all these component need to be figured out how to preview for different size of screen

## Screen Sizes

different visitors to your site will have different sized screens that show different amounts of information, so your design needs to be able to work on a range of different sized screens

## screen resolution

Resolution refers to the number of dots a screen shows per inch. Some devices have a higher resolution than desktop computers and most operating systems allow users to adjust the resolution of their screens

## Page Sizes

Because screen sizes and display resolutions vary so much, web designers often try to create pages of around 960-1000 pixels wide (since most users will be able to see designs this wide on their screens)
![im](https://internetingishard.netlify.app/fixed-width-vs-fluid-layouts-258df9.e0ad9d98.png)

## Fixed Width Layouts

Fixed width layout designs do not change size as the user increases or decreases the size of their browser window. Measurements tend to be given in pixels

- **Advantage**

  1. Pixel values are accurate at controlling size and positioning of elements
  2. The designer has far greater control over the appearance and position of items on the page than with liquid layouts
  3. You can control the lengths of lines of text regardless of the size of the user's window
  4. The size of an image will always remain the same relative to the rest of the page.

- **Disadvantage**

  1. You can end up with big gaps around the edge of a page
  2. If the user's screen is a much higher resolution than the designer's screen, the page can look smaller and text can be harder to read.
  3. If a user increases font sizes, text might not fit into the allotted spaces.
  4. The design works best on devices that have a site or resolution similar to that of desktop or laptop computers
  5. The page will often take up more vertical space than a liquid layout with the same content

on the other hand we have the

## Liquid Layouts

Liquid layout designs stretch and contract as the user increases or decreases the size of their browser window. They tend to use percentages.

- **Advantages**

  1.  Pages expand to fill the entire browser window so there are no spaces around the page on a large screen.
  2.  If the user has a small window, the page can contract to fit it without the user having to scroll to the side.
  3.  The design is tolerant of users setting font sizes larger than the designer intended (because the page can stretch)

- **Disadvantages**

  1.  If you do not control the width of sections of the page then the design can look very different than you intended, with unexpected gaps around certain elements or items squashed together.
  2.  If the user has a wide window, lines of text can become very long, which makes them harder to read.
  3.  If the user has a very narrow window, words may be squashed and you can end up with few words on each line.
  4.  If a fixed width item (such as an image) is in a box that is too small to hold it (because the user has made the window smaller) the image can overflow over the text
