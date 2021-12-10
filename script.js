//galerija
var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");

function closeFullImg(){
    fullImgBox.style.display = "none";
}


let slike = document.getElementsByClassName('slika');

for(let i = 0; i < slike.length; i++) {
    slike[i].addEventListener('click', () => {
        fullImgBox.style.display = "flex";
        fullImg.src = slike[i].src;
    })
}

//navigacija
const hrefLink = ["#home", "#services-section", "#gallery-section", "#about-section", "#contact-section"];
const imeLink = ["Home", "Services", "Gallery", "About" , "Contact"];
let navBar = document.querySelector(".navbar-collapse");
let navList = `<ul class="nav navbar-nav navbar-right">`;
    for (let i = 0; i < hrefLink.length; i++) {
        navList += `<li><a href="${hrefLink[i]}" class="page-scroll">${imeLink[i]}</a></li>`;
    }
    navList += `</ul>`;
navBar.innerHTML = navList