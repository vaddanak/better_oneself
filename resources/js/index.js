"use strict";



//const btn = document.getElementById("show-me");
//const div = document.getElementById("msg");
const iframe = document.getElementById("code-display");

const leftSection = document.getElementById("left-section");

code_pages.forEach( (e,i,r) => {
    const pageBtn = document.createElement("button");
    pageBtn.innerText = e.name;
    
    pageBtn.addEventListener("click", function(event){
        iframe.src = e.filename;

        const lastActiveButton = document.querySelector("button.active");
        if( lastActiveButton )
            lastActiveButton.classList.remove("active");

        event.target.classList.add("active");

    });

    
    
    

    leftSection.appendChild(pageBtn);

    
});


document.querySelector("#left-section > button:first-child").click();


iframe.addEventListener("load", function(event){    

    //iframe.style.width = (iframe.contentWindow.document.body.scrollWidth + 20) + "px";
    iframe.style.height = (iframe.contentWindow.document.body.scrollHeight + 35) + "px";

    console.log(`IFRAME LOAD width:${iframe.style.width} height:${iframe.style.height}`);
});
