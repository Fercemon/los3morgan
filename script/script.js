const dropDownBtn = document.querySelector(".drop-down-btn");
let nav2 = document.querySelector(".nav2");
let nav3 = document.querySelector(".nav3");
const overlay = document.querySelector(".overlay");
const dropDownContent = document.querySelector(".drop-down-content");
const linksWrapp = document.querySelectorAll(".drop-down-links");

// open overlay and animation overlay
document.querySelector("#bg-menu").addEventListener("click", () => {
    overlay.style.width = "50%";
    overlay.addEventListener("transitionend", animationLinks);

});

function animationLinks() {
    if (window.matchMedia("(min-width: 700px)").matches) {
        document.querySelector(".links-wrapp").classList.add("animation");
        document.querySelector(".nav1").style.marginLeft = "0";
        nav2.style.marginLeft = "-10rem";
        nav3.style.marginLeft = "-19rem";
    } else {
        document.querySelector(".links-wrapp").classList.add("animation");
        document.querySelector(".nav1").style.marginLeft = "0";
        nav2.style.marginLeft = "-3rem";
        nav3.style.marginLeft = "-6rem";
    }
}

// open and close drop down btn

dropDownBtn.addEventListener("click", () => {
    dropDownContent.style.width = "100%";
    overlay.removeEventListener("transitionend", animationLinks);


    if (window.matchMedia("(min-width: 700px)").matches) {
        dropDownContent.style.marginLeft = "-15rem";
        nav2.style.marginLeft = "-25rem";
        nav3.style.marginLeft = "-35rem";
    } else {
        dropDownContent.style.marginLeft = "-7rem";
        nav2.style.marginLeft = "-11rem";
        nav3.style.marginLeft = "-14rem";
    }

});



// close overlay and set overlay as the beigining
document.querySelector(".close-nav").addEventListener("click", closeNav);
let i;
for (i = 0; i < linksWrapp.length; i++) {
    linksWrapp[i].addEventListener("click", closeNav);
}


function closeNav() {
    const overlay = document.querySelector(".overlay");
    overlay.style.width = "0";
    dropDownContent.style.width = "0";

    document.querySelector(".links-wrapp").classList.remove("animation");
    document.querySelector(".nav1").style.marginLeft = "0";
    nav2.style.marginLeft = 0;
    nav3.style.marginLeft = 0;
}