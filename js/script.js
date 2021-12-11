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
const hrefLink = ["index.html", "#services-section", "#gallery-section", "#about-section", "#contact-section"];
const imeLink = ["Home", "Services", "Gallery", "About" , "Contact"];
let navBar = document.querySelector(".navbar-collapse");
let navList = `<ul class="nav navbar-nav navbar-right">`;
    for (let i = 0; i < hrefLink.length; i++) {
        navList += `<li><a href="${hrefLink[i]}" class="page-scroll">${imeLink[i]}</a></li>`;
    }
    navList += `</ul>`;
navBar.innerHTML = navList


//validacija forme 

function validation(){

    var clientName = document.getElementById('name').value;
    var clientEmail = document.getElementById('email').value;
    var clientSubject = document.getElementById('subject').value;
    var clientMessage = document.getElementById('message').value;

    let nameCheck = /^[A-Za-z. ]{3,30}$/;
    let emailCheck = /^[a-z0-9.]{3,}@[a-z]{3,}[.]{1}[a-z.]{2,6}$/;
    let subjectCheck = /^[A-Za-z0-9 .]{3,40}$/;
    let messageCheck = /^[A-Za-z0-9 .,]{3,2000}[.]{1}$/;

    if(nameCheck.test(clientName)){
        document.getElementById('name-error').innerHTML = " ";
    }
    else{
        document.getElementById('name-error').innerHTML = "Invalid name.";
        return false;
    }

    if(emailCheck.test(clientEmail)){
        document.getElementById('email-error').innerHTML = " ";
    }
    else{
        document.getElementById('email-error').innerHTML = "Please enter a valid email address!";
        return false;
    }

    if(subjectCheck.test(clientSubject)){
        document.getElementById('subject-error').innerHTML = " ";
    }
    else{
        document.getElementById('subject-error').innerHTML = "Please fill in the required field.";
        return false;
    }

    if(messageCheck.test(clientMessage)){
        document.getElementById('message-error').innerHTML = " ";
    }
    else{
        document.getElementById('message-error').innerHTML = "Please fill in the required field.";
        return false;
    }
}

//footer 

var footer=document.getElementById('footer');
var content = `<div class="container">
<div class="row justify-content-around">
    <div class="inner-content">
        <a href="https://www.facebook.com/" target="_blank">
            <span><i class="fab fa-facebook-f"></i></span>
        </a>
        <a href="https://www.instagram.com/" target="_blank">  
            <span><i class="fab fa-instagram"></i></span>
        </a>
        <a href="sitemap.xml" target="_blank">
            <span><i class="fas fa-sitemap"></i></span>
        </a>
        <a href="doc.pdf" target="_blank">
            <span><i class="far fa-file"></i></span>
        </a>
          </div>
          </div>
        <div class="col-12">
            <p>Copyright &copy; Marijana Papic 162/20</p>
        </div>
    </div></div>`;
footer.innerHTML=content;
