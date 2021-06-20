let feel ;

feel = prompt("how do you feel ?");
while (feel === ""){

    feel =prompt("i need to know how do you feel ?");
}
console.log(feel);

alert('are you ready for some question ?')

let carType;
carType = prompt('what is your favorite type of cars ?');
while (carType === ""){

    carType =prompt("what is your favorite type of cars ?");
}
console.log(carType);

let carModel;
carModel =parseInt(prompt('what is your favorite' + " " + carType +" " +'year model  ?'));
while (carModel <= 1900 || carModel > 2022 || isNaN(carModel)  ){

    carModel =parseInt(prompt('your favorite' + " " + carType +" " +'year model should be between 1900 and 2022 and / or a number   ?'));
}
console.log(carModel);
alert("nice choice !")

let carColor;
carColor = prompt('what is your favorite color of cars ?');
while (carColor === ""){

    carColor =prompt("what is your favorite color of cars ?");
}
console.log(carColor);


//document.write('you feel '+' '+ feel+' '+ 'and your car is'+' '+carType+' '+ 'model'+' '+carModel+ ' '+ 'in color'+' '+carColor)

document.write("<h1 style='color:blue'>you feel"+" " + feel +
"</h1>" +"<h1 style='color:red'>and your car type is"+" " + carType +
"</h1>" +"<h1 style='color:orange'>year model "+" " + carModel +
"</h1>"+"<h1 style='color:aqua'>with a color "+" " + carColor +"</h1>" 
)

///document.write("<h2 style='color:darkblue'> click the link below to see your car</h2>");
 let a = document.createElement('a'); 
                  
 let link = document.createTextNode("see your car from here");
   
 a.appendChild(link); 
 a.target = "_blank"
   
 a.title = "This is Link to your car"; 
   
 a.href = "https://www.google.com/search?q="+carType+"+"+carModel+"+"+carColor+"&tbm=isch&ved=2ahUKEwiYsaqb9abxAhWW4oUKHVnIAPwQ2-cCegQIABAA&oq=bmw+2000+red&gs_lcp=CgNpbWcQAzIGCAAQCBAeMgYIABAIEB4yBggAEAgQHjIGCAAQCBAeOgQIIxAnOgQIABBDOgIIADoFCAAQsQM6BwgjEOoCECc6BwgAELEDEENQoh9Y5bYBYLHaA2gEcAB4AIABkQKIAaEXkgEGMC4xNS4xmAEAoAEBqgELZ3dzLXdpei1pbWewAQrAAQE&sclient=img&ei=6JLPYJidOJbFlwTZkIPgDw&bih=625&biw=1366"; 
   
 document.body.appendChild(a); 

 document.write('<a href="'+desiredLink+'">'+desiredText+'</a>');

