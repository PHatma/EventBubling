let section = document.querySelector("section");
let div = document.querySelector("div");
let button = document.querySelector("button");

let Sec = document.querySelector(".capturing section");
let Div = document.querySelector(".capturing div");
let btn = document.querySelector(".capturing button");

let output = document.querySelector('.output')

window.alert('Hello My Friend Please click on section or div or Button and check Your Console to see result ☺')


Sec.addEventListener("click", function () {
  console.log("Hello section Capturing");
},true);
Div.addEventListener("click", function () {
  console.log("Hello div Capturing");
},true);
btn.addEventListener("click", function () {
  console.log("Hello button Capturing");
},true);


section.addEventListener("click", function () {
  console.log("Hello section Bubling");
});
div.addEventListener("click", function () {
  console.log("Hello div Bubling");
});
button.addEventListener("click", function () {
  console.log("Hello button Bubling");
});