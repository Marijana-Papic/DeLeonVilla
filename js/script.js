
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

//navigacija - dinamicki ispis

const hrefLink = ["index.html", "#services-section", "#gallery-section", "#about-section", "#contact-section"];
const imeLink = ["Home", "Services", "Gallery", "About" , "Contact"];
let navBar = document.querySelector(".navbar-collapse");
let navList = `<ul class="nav navbar-nav navbar-right">`;
    for (let i = 0; i < hrefLink.length; i++) {
        navList += `<li><a href="${hrefLink[i]}" class="page-scroll">${imeLink[i]}</a></li>`;
    }
    navList += `</ul>`;
navBar.innerHTML = navList


//footer - dinamicki ispis

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


//SERVICES SECTION

//dinamicki ispis
var serviceHeading= document.getElementsByClassName("section-services-heading");
var serviceText = document.getElementsByClassName("section-p-text");
var nizHeading= ["INDOOR AREAS","OUTDOOR AREA","SERVICES ON DEMAND", "SURROUNDING AREA"]
for (let i=0; i<nizHeading.length; i++){
  serviceHeading[i].textContent=nizHeading[i];
}
var nizText = ["3 double rooms","3 bathrooms"," Dinning area","Fully equipped kitchen","Lounge with fireplace","Pool",
"Hydro massage","BBQ area","Dinning area","Bathroom with 2 showers","Vehicles, boats & yachts rentals","Daily excursions","Business meetings",
"Fishing trips","Private cetering services","Parking area","Tennis court","Private Lake","Gym","Playground"]
for (let i=0; i<nizText.length; i++){
    serviceText[i].textContent=nizText[i];
}


//form validation

var nameCheck = /^[A-ZŠĐČĆŽ][a-zšđčćž]{2,}(\s[A-ZŠĐČĆŽ][a-zšđčćž]{2,})+$/;
var emailCheck = /^[\w-_\.]+@([\w-_]{2,}\.)+[a-z]{2,}$/;
var numCheck =/^06[0-689][0-9]{6,7}$/;
var messageCheck = /.{4,200}/;

var clientName = document.getElementById("name");
var clientEmail = document.getElementById("email");
var clientNumber = document.getElementById("number");
var clientMessage = document.getElementById("message");

var noErrors;
clientName.addEventListener("blur", checkName);
function checkName() {
  var check = nameCheck.test(clientName.value);
  var errorName =  document.getElementById("name-error");
  if(check) {
    errorName.innerHTML="Name is valid!";
    errorName.style.color="green";
 
 } 
 else {
  noErrors = false;
  errorName.innerHTML="Name is not valid!";
  errorName.style.color="red";
 }
}


clientEmail.addEventListener("blur", checkEmail);
function checkEmail() {
 var check = emailCheck.test(clientEmail.value);
 var errorEmail =  document.getElementById("email-error");
 if(check) {
  errorEmail.innerHTML="Email is valid!";
  errorEmail.style.color="green";
  
 } 
 else {
 noErrors = false;
  errorEmail.innerHTML="Email is not valid!";
  errorEmail.style.color="Red";
 }
}

clientNumber.addEventListener("blur",checkNumber);
function checkNumber(){
    var check = numCheck.test(clientNumber.value);
    var errorNumber = document.getElementById("number-error");
    if(check) {
        errorNumber.innerHTML="Number is valid!";
        errorNumber.style.color="green";
       } 
       else {
       noErrors = false;
       errorNumber.innerHTML="Number is not valid!";
       errorNumber.style.color="Red";
       }
}


clientMessage.addEventListener("blur", checkMsg);
function checkMsg() {
  var errorMsg =  document.getElementById("message-error");
 if (clientMessage.value == "") {
  errorMsg.textContent = "Message can`t be empty";
  errorMsg.style.color="red";
}
  else {
  errorMsg.textContent = "Message is valid";
  errorMsg.style.color="green";
 }

}

 var btnSubmitMessage = document.getElementById("btnSubmitForm");

  btnSubmitMessage.addEventListener("click", function() {
  noErrors = true;
  checkName();
  checkEmail();
  checkNumber();
  checkMsg();
  if(noErrors) {
  clientName.value = "";
  clientNumber.value = "";
  clientEmail.value = "";
  clientMessage.value = "";
  errorName.innerHTML="";
  errorEmail.innerHTML='';
  errorNumber.innerHTML='';
  errorMsg.innerHTML='';
  
}
});

//COUNTDOWN SECTION

let launchDate = new Date("Feb 14, 2022 00:00:00").getTime();

let timer = setInterval(tick, 1000);

function tick () {
  let now = new Date().getTime();
  let t = launchDate - now;

  if (t > 0) {
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    if (days < 10) { days = "0" + days; }

    let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    if (hours < 10) { hours = "0" + hours; }

    let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    if (mins < 10) { mins = "0" + mins; }

    let secs = Math.floor((t % (1000 * 60)) / 1000);
    if (secs < 10) { secs = "0" + secs; }

    let time = `${days} : ${hours} : ${mins} : ${secs}`;

    document.querySelector('.countdown').innerText = time;
  }
}


//BOOK NOW MODAL

const toggleModal = () => {
  document.querySelector(".modal")
  .classList.toggle("modal-hidden");
};

document.querySelector("#modal-open")
.addEventListener("click", toggleModal);

document.querySelector("#book-form")
.addEventListener("submit", (event) => {
  event.preventDefault();
  toggleModal();
});
           
document.querySelector(".modal-close-bar span")
.addEventListener("click", toggleModal);


//modal validation

var modalFirstNameCheck = /^[A-ZŠĐČĆŽ][a-zšđčćž]{2,}$/;
var modalLastNameCheck = /^[A-ZŠĐČĆŽ][a-zšđčćž]{2,}$/;
var modalNumCheck =/^06[0-689][0-9]{6,7}$/;

var modalFirstName = document.getElementById("modalFirstName");
var modalLastName = document.getElementById("modalLastName");
var modalNumber = document.getElementById("modalNumber");

var noErrorsModal;
modalFirstName.addEventListener("blur", chkModalFn);
function chkModalFn() {
  var modalCheckFn= modalFirstNameCheck.test(modalFirstName.value);
  var errorModalFn =  document.getElementById("modal-error-fn");
  if(modalCheckFn) {
    errorModalFn.innerHTML="Name is valid!";
    errorModalFn.style.color="green";
 
 } 
 else {
  noErrorsModal = false;
  errorModalFn.innerHTML="Name is not valid!";
  errorModalFn.style.color="red";
 }
}
modalLastName.addEventListener("blur", chkModalLn);
function chkModalLn() {
  var modalCheckLn = modalLastNameCheck.test(modalLastName.value);
  var errorModalLn =  document.getElementById("modal-error-ln");
  if(modalCheckLn) {
    errorModalLn.innerHTML="Name is valid!";
    errorModalLn.style.color="green";
 
 } 
 else {
  noErrorsModal = false;
  errorModalLn.innerHTML="Name is not valid!";
  errorModalLn.style.color="red";
 }
}

  modalNumber.addEventListener("blur", chkNumberModal);
  function chkNumberModal(){
      var checkNumber = modalNumCheck.test(modalNumber.value);
      var errorNumberModal = document.getElementById("modal-error-number");
      if(checkNumber) {
          errorNumberModal.innerHTML="Number is valid!";
          errorNumberModal.style.color="green";
         } 
         else {
         noErrorsModal = false;
         errorNumberModal.innerHTML="Number is not valid!";
         errorNumberModal.style.color="Red";
         }
  }
  
var btnSubmitMessageModal = document.getElementById("book-btn");

  btnSubmitMessageModal.addEventListener("click", function() {
  noErrorsModal = true;
  chkModalFn();
  chkModalLn();
  chkNumberModal();


  if(noErrorsModal) {
  modalFirstName.value = "";
  modalLastName.value = "";
  modalNumber.value = "";
  }
})
var select = document.getElementById("guests");
var error_op = document.getElementById("modal-error-op");
select.addEventListener("click",checkOption);

function checkOption(){
        if (select.value == "Number of guests") {
            error_op.innerHTML = "Please select number of guests"
            error_op.style.color = "red"
        }
        else{
          error_op.innerHTML = "Valid number of guests"
          error_op.style.color = "green"
        }
  }
  
//About 

var about = document.querySelector(".about");
var html =  `<div class="col-md-6" data-aos="fade-right">
<img src="img/about4.jpg" class="img-responsive" alt=""> 

</div>
<div class="col-md-6 about-content " data-aos="fade-left">
<div class="about-text">
  <p>
    De Leon Villa is located in Monte Carlo. During its 10 years of existence, 
    it has welcomed and seen off many satisfied guests. 
    It spreads over two floors, a total of 200m2.</p> 

    <p>De Leon Villa has a large living room connected to the kitchen,
    three bedrooms with a double bed and three bathrooms. De Leon 
    Villa can accommodate up to 8 guests. Finished to such
    a high standard and really beautiful design details making
    it that much more special for you.
    <p>
    <p>
      <a href="https://marijana-papic.github.io/marijana-papic-Portfolio/" target="_blank" class="about-author">ABOUT AUTHOR</a>
    </p>
</div>
</div>`;
about.innerHTML = html;


//JQUERY

// book now toogle

$(document).ready(function(){
  var btnMore = $(".btnText");
  var textMore = $(".show-text");
  btnMore.click(function(e){
  e.preventDefault();
  textMore.toggle('slow',function(){
  if(textMore.is(":visible")){
  btnMore.text("Show less");
  }
  else
  {
  btnMore.text("Show more");
  }
  });
  });
});

// jquery hover

$(document).ready(function(){
  $('.about-author, .btn').addClass('test');
  $('.about-author, .btn').hover(function(){
    $(this).addClass('hover-effects');
    $(this).css("color", "black");
  }, function(){
    $(this).removeClass('hover-effects');
    $(this).css("color", "white");
  });
});

//jquery plugin

jQuery(document).ready(function($) {
  "use strict";

  $('#customers-testimonials').owlCarousel({
      loop: true,
      center: true,
      items: 3,
      margin: 0, 
      autoplay: true,
      dots:true,
      autoplayTimeout: 8500,
      smartSpeed: 450,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        },
        1170: {
          items: 3
        }
      }
  });
});

// //preloader

$(window).ready(() => {
  setTimeout(() => {
      $('.loading').animate({
          opacity: 0
      }, 500)
  }, 2000)

  setTimeout(() => {
      $('.loading').remove()
  }, 3000)
})



