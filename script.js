const slides = document.querySelectorAll(".slide");

let index = 0;

function changeSlide(){

    slides[index].classList.remove("active");

    index++;

    if(index >= slides.length){

        index = 0;

    }

    slides[index].classList.add("active");

}

setInterval(changeSlide,4000);
const topBtn = document.getElementById("topBtn");

window.onscroll = function () {

    if(document.body.scrollTop > 300 || document.documentElement.scrollTop > 300){

        topBtn.style.display = "block";

    }else{

        topBtn.style.display = "none";

    }

};

topBtn.onclick = function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};