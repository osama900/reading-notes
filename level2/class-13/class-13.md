# WEB STORAGE

![web storage image](https://media-exp3.licdn.com/dms/image/C4E12AQGMEQ2wCp6zaQ/article-cover_image-shrink_600_2000/0/1520059473378?e=1628121600&v=beta&t=IHd0nmS4LZsUlzhYxHfJw2mdY04S6MqzzVcjHFIfJIU)

when using web storage web applications can store data locally named key/value pairs within the user browser before HTML5, application data had to be stored in cookies, included in every server request but it was lowering the response speed and it's very limited but Web storage more secure, and large amounts of data can be stored locally, without affecting website performance.

Web storage is per origin (per domain and protocol). All pages, from one origin, can store and access the same data.

## HTML Web Storage Objects

HTML web storage provides two objects for storing data on the client side:

- `window.localStorage` : stores data with no expiration date
- `window.sessionStorage` : stores data for one session (data is lost when the browser tab is closed)

![web storage](https://w3reign.com/wp-content/uploads/2018/01/locla-storage-and-session-storage.jpg)

## The localStorage Object

The localStorage object stores the data with **no expiration date**. The data will not be deleted when the browser is closed, and will be available the next day, week, or year as in this example

```js
// Store last hasan in lastname
localStorage.setItem("lastname", "hasan");

// Retrieve what inside lastname
document.getElementById("result").innerHTML = localStorage.getItem("lastname");
```

and we can remove "lastname" localstorage item as in this example

```js
localStorage.removeItem("lastname");
```

and you should know that the always stored as **STRING** value so you may need to think about converting it to another type of data before use it

## The sessionStorage Object

The sessionStorage object is equal to the localStorage object, except that **it stores the data for only one session** The _data is deleted when the user closes the specific browser tab_

The following example counts the number of times a user has clicked a button, in the current session:

```js
if (sessionStorage.clickcount) {
  sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
} else {
  sessionStorage.clickcount = 1;
}
document.getElementById("result").innerHTML =
  "You have clicked the button " +
  sessionStorage.clickcount +
  " time(s) in this session.";
```

and there is a property to get the total number of values in the storage area, and to iterate through all of the keys by index (to get the name of each key) like in this example

```js
interface Storage {
  readonly attribute unsigned long length;
  getter DOMString key(in unsigned long index);
};
```
