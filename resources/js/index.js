"use strict";



const btn = document.getElementById("show-me");
const div = document.getElementById("msg");
let count = 0;
btn.addEventListener("click", function(event){
    
    div.innerHTML = ++count;

});