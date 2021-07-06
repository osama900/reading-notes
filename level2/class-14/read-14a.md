# Transforms With HTML CSS

![image](https://miro.medium.com/max/900/1*_6MfwckxNfQTca9SiG8MdQ.png)

layout techniques can be revisited with alternative ways to size, position, and change elements. All of these new techniques are made possible by the transform property.

The transform property comes in two different settings, **two-dimensional** and **three-dimensional** and we will look to each on but before that let's check the syntax for transform

The actual syntax for the `transform `property is quite simple, including the transform property followed by the value. The value specifies the transform type followed by a specific amount inside parentheses like in this example :

```css
div {
  -webkit-transform: scale(1.5);
  -moz-transform: scale(1.5);
  -o-transform: scale(1.5);
  transform: scale(1.5);
}
```

and we can see the include of the multiple vendor prefixes to gain the best support across all browsers
and now we can start in booth 2d and 3d transforms

1.  **2d transforms** : Two-dimensional transforms work on the x and y axes, known as horizontal and vertical axes and here are some of examples

    - **2D Rotate** :The rotate value provides the ability to rotate an element from 0 to 360 degrees. Using a positive value will rotate an element clockwise, and using a negative value will rotate the element counterclockwise like in this example

      ```css
      .box-1 {
        transform: rotate(20deg);
      }
      .box-2 {
        transform: rotate(-55deg);
      }
      ```

    - **2D Scale** : Using the scale value within the transform property allows you to change the appeared size of an element. The default scale value is 1, therefore any value between .99 and .01 makes an element appear smaller while any value greater than or equal to 1.01 makes an element appear larger like in this example

      ```css
      .box-1 {
        transform: scale(0.75);
      }
      .box-2 {
        transform: scale(1.25);
      }
      ```

    - **2d Translate** : Using the translateX value will change the position of an element on the horizontal axis while using the translateY value will change the position of an element on the vertical axis

      ```css
      .box-1 {
        transform: translateX(-10px);
      }
      .box-2 {
        transform: translateY(25%);
      }
      .box-3 {
        transform: translate(-10px, 25%);
      }
      ```

    - **2D Skew** : used to distort elements on the horizontal axis, vertical axis, or both. The syntax is very similar to that of the scale and translate values. Using the skewX value distorts an element on the horizontal axis while the skewY value distorts an element on the vertical axis

      ```css
      .box-1 {
          .box-1 {
           transform: skewX(5deg);
          }
          .box-2 {
          transform: skewY(-20deg);
          }
          .box-3 {
          transform: skew(5deg, -20deg);
          }

      ```

2.  **3D Transforms** : there is another axis along which we can transform elements. Using **three-dimensional** transforms we can change elements on the z axis, giving us control of depth as well as length and width

    - **3D Rotate** : With three-dimensional transforms we can rotate an element around any axes. To do so, we use three new transform values, including rotateX, rotateY, and rotateZ

          ```css
          .box-1 {
            transform: perspective(200px) rotateX (45deg);
          }
          .box-2 {
            transform: perspective(200px) rotateY (45deg);
          }
          .box-3 {
            transform: perspective(200px) rotateZ (45deg);
          }
          ```

    - **3D Scale** : By using the scaleZ three-dimensional transform elements may be scaled on the z axis.

          ```css
          .box-1 {
            transform: perspective(200px) scaleZ(1.75) rotateX(45deg);
          }
          .box-2 {
            transform: perspective(200px) scaleZ(0.25) rotateX(45deg);
          }
          ```

    - **3D Translate** : Elements may also be translated on the z axis using the translateZ value

      ```css
      .box-1 {
        transform: perspective(200px) translateZ(-50px);
      }
      .box-2 {
        transform: perspective(200px) translateZ(50px);
      }
      ```

    - **3D Skew** : Skew is the one two-dimensional transform that _cannot_ be transformed on a three-dimensional scale. Elements may be skewed on the x and y axis, then transformed three-dimensionally as wished, but they cannot be skewed on the z axis.

# Transitions & Animations

![image](https://www.litmus.com/wp-content/uploads/2020/04/a-simple-guide-to-understanding-css-animations-in-email.png)
With CSS3 transitions you have the potential to alter the appearance and behavior of an element whenever a state change occurs, such as when it is hovered over, focused on, active, or targeted.

## Transitions

There are four transition related properties in total, _including transition-property, transition-duration, transition-timing-function_, and _transition-delay_. Not all of these are required to build a transition, with the first three are the most popular the next example below the box will change its background color over the course of 1 second in a linear fashion.

```css
.box {
  background: #2db34a;
  transition-property: background;
  transition-duration: 1s;
  transition-timing-function: linear;
}
.box:hover {
  background: #ff7b29;
}
```

## Animations

Transitions do a great job of building out visual interactions from one state to another, and are perfect for these kinds of single state changes. However, when more control is required, transitions need to have multiple states. In return, this is where animations pick up where transitions leave off

To set multiple points at which an element should undergo a transition, use the `@keyframes` rule. The `@keyframes` rule includes the animation name, any animation breakpoints, and the properties intended to be animated.

```css
@keyframes slide {
  0% {
    left: 0;
    top: 0;
  }
  50% {
    left: 244px;
    top: 100px;
  }
  100% {
    left: 488px;
    top: 0;
  }
}
```
