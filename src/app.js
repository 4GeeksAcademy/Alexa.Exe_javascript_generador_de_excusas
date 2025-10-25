import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");


let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = ["before the class", "when I was sleeping", "while I was exercising", "during my lunch", "while I was praying"];

//para acceder al array de cada uno independiente de sus index lo hacemos con "lentgh", y "math.floor" para volver el número que determina el math.radom a entero... 
//y el "array.length para dar la cantidad exacta de cada longitud en cada array" y cuando entre en ejecucion con math.random pueda hacerlo entre sus índices.
let randomWho = who[Math.floor(Math.random()*who.length)];
let randomAction = action[Math.floor(Math.random()*action.length)];
let randomWhat = what[Math.floor(Math.random()*what.length)];
let randomWhen = when[Math.floor(Math.random()*when.length)];
let excuse =`OMG you will not believe me but...${randomWho} ${randomAction} ${randomWhat} ${randomWhen}`;
//usamos los acentos "graves" para concatenar la variable excuse...

//imprimos la última funcion creada...
console.log(excuse);

//con esto conectamos el html con el js
document.getElementById("excuse").innerText = excuse;
};

