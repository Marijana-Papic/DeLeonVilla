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