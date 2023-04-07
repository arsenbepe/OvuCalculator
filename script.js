"use strict";

/* dni cyklu = x
dni okresu = y
przewidywane dni plodne = z*/

var dniPlodne = document.querySelector(".plodne");
const btn = document.querySelector(".form__btn");
var odstep = document.querySelector(".coIle");
var ile = document.querySelector(".ile");

console.log(btn);
console.log(odstep.textContent);
//wyswietlanie wyniku

btn.addEventListener("click", function (e) {
  e.preventDefault();
  let x = document.getElementsById("co").input;
  console.log(x);
  let z = x / 2;
  dniPlodne.textContent = `${z - 3} - ${z + 1}`;
});
