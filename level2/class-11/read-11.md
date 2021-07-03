# Audio, Video, Images

## Images in html

![img](https://blog.techiehunter.org/wp-content/uploads/2018/08/59535_1f48_6.jpg)
The `<img>` tag is used to embed an image in an HTML page but they are not technically inserted into a web page they are linked to web pages the `<img>` tag creates a holding space for the referenced image

The `<img>` tag has two required attributes:

- **src** Specifies the path to the image
- **alt** Specifies an alternate text for the image, if the image for some reason cannot be displayed as in this example where an img added with a width and height of 400 px

```html
<img src="img_Cat.jpg" alt="Cat in a Room" width="400" height="400" />
```

### Images border

we can add an image border to any image in html by styling it like in this example where a black solid border with a 5px added :

```html
<img
  src="smiley.gif"
  alt="Smiley face"
  width="42"
  height="42"
  style="border:5px solid black"
/>
```

we an add the image as a background image fpr some element in html page for example the body as in this example where a background image added to the background using css:

```css
body {
  background-image: url("images/pattern.gif");
}
```

### repeating Image

The `background-repeat` property can have four values

- **repeat** : The background image is repeated both horizontally and vertically (the default way it is shown if the background repeat property isn't used)
- **repeat-x** The image is repeated horizontally only
- **repeat-y** The image is repeated vertically only
- **no-repeat** The image is only shown once

The `background-attachment` property specifies whether a background image should stay in one position or move as the user scrolls up and down the page. It can have one of two values

- **fixed** The background image stays in the same position on the page
- **scroll** The background image moves up and down as the user scrolls up and down the page.

## video in html

![img](https://www.wowza.com/wp-content/uploads/Top-HTML5-Video-Players_BlogThumbnail-690x350-1.jpg)
The `<video>` tag is used to embed video content in a document, such as a movie clip or other video streams `<video>` tag contains one or more `<source>` tags with different video sources The browser will choose the first source it supports and There are three supported video formats in HTML: MP4, WebM, and OGG as you see in this example

```html
<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4" />
  <source src="movie.ogg" type="video/ogg" />
  Your browser does not support the video tag
  <!-- this txt will be showen on unsupported browser-->
</video>
```

some _video_ attribute

- **autoplay** Specifies that the video will start playing as soon as it is ready
- **controls** Specifies that video controls should be displayed (such as a play/pause button etc).
- **muted** Specifies that the audio output of the video should be muted
- **poster** Specifies an image to be shown while the video is downloading, or until the user hits the play button

## Audio in html

![img](https://res.cloudinary.com/practicaldev/image/fetch/s--MA5hKls8--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/wh2li7815smb450m1c19.png)
The `<audio>` tag is used to embed sound content in a document, such as music or other audio streams `<audio>` tag contains one or more `<source>` tags with different audio sources. The browser will choose the first source it supports and There are three supported audio formats in HTML: MP3, WAV, and OGG as you see in his example :

```html
<audio controls>
  <source src="horse.ogg" type="audio/ogg" />
  <source src="horse.mp3" type="audio/mpeg" />
  Your browser does not support the audio tag.
</audio>
```

some _audio_ attributes

- **autoplay** Specifies that the audio will start playing as soon as it is ready
- **src** Specifies the URL of the audio file
- **loop** Specifies that the audio will start over again, every time it is finished
- **controls** Specifies that audio controls should be displayed

## Search Engine Optimization (SEO)

![img](https://www.oberlo.com/media/1603954182-seo-article-header.png)

SEO is a huge topic and several books have been written on the subject. The following pages will help you understand the key concepts so you can improve your website's visibility on search engines.

also we can say that it means the process of improving your site to increase its visibility when people search for products or services related to your business in Google, Bing, and other search engines. The better visibility your pages have in search results, the more likely you are to garner attention and attract prospective and existing customers to your business.
