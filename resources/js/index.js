"use strict";



const btn = document.getElementById("show-me");
const div = document.getElementById("msg");
const iframe = document.getElementById("code-display");
let count = 0;
btn.addEventListener("click", function(event){

    //div.innerHTML = ++count;

    iframe.src="resources/code_pages/code_1.html";

    //iframe.height = iframe.contentWindow.document.body.scrollHeight;
    

});

iframe.addEventListener("load", function(event){

    console.log("LOAD", iframe.contentWindow.document);
});
