

var menuOpen = document.getElementById("open");
var menuClose = document.getElementById("close");
var goBack = document.getElementById("back");
var navBar = document.getElementById("nav-menu");
var button = document.getElementById("button");
var button2 = document.getElementById("button2");
var content = document.getElementById("content");
var content2 = document.getElementById("content2");
var returnText = document.getElementById("content_text");
var returnImg = document.getElementById("content_img");


function showMenu(){
    // console.log("i work");
    navBar.style.right = 0;
    menuOpen.style.display = "none";
}
function hideMenu(){
    navBar.style.right = "";
    menuOpen.style.display = "";
}
content2.style.display="none"
function changeSlide(){
    content.style.display="none";
    content2.style.display="flex";
    button2.style.display="block";
    button.style.display="none";
}
function changeSlide2(){
    content2.style.display="none"
    content.style.display="flex";
    returnText.style.animationDelay = ".15s";
    returnImg.style.animationDelay= ".03s";
    button.style.display="block";
    button2.style.display="none";

}



// var swiper = new Swiper(".wrapper", {
//     slidesPerView: 3,
//     spaceBetween: 25,
//     // slidesPerGroup: 3,
//     loop: true,
//     centerSlide: 'true',
//     fade: 'true',
//     grabCursor: 'true',
//     // loopFillGroupWithBlank: true,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//       dynamicBullets: true,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });

const slide = document.querySelector(".port-box");
const slideImages = document.querySelectorAll(".image");
const numImgs=slideImages.length;
let curImg = 0;


const rightBtn = document.getElementById("right");
const leftBtn = document.getElementById("left");

let counter = 1;
console.log(slideImages.length);
// const size = slideImages[0].width;

// slide.style.transform = 'translateX (${100 * (counter)})';

// slideImages.style.transform = 'translateX(100vw)';
// console.log(slideImages);
// let goX;
// function slideRight(){
//     if (counter >= slideImages.length - 1) return;
//     console.log('okay');
//     goX = 30;
//     slide.style.transition = "transform 0.4s ease-in-out";

//         slideImages.style.animationName='slideinfromright';

    // counter++;
    // console.log(counter);
    // slideImages.style.transform = "translateX(35vw)";
// }
// function slideLeft(){
//     if (counter <= 0) return 0;
//     console.log('all set');

//     // slide.style.transition = "transform 0.4s ease-in-out";
//     // counter--;
//     // console.log(counter)
//     // slideImages.style.transform = "translateX(35vw)";
// }

// slide.addEventListener('transitionend', () => {
//     if (slideImages[counter].id === "finalImage"){
//         slide.style.transition = "none"
//         counter = slideImages.length -1;
//         slide.style.transform = 'translateX (${100 * (counter)})';
//     }
//     if (slideImages[counter].id === "firstImage"){
//         slide.style.transition = "none"
//         counter = slideImages.length -1;
//         slide.style.transform = 'translateX (${100 * (counter)})';
//     }
// })



rightBtn.addEventListener('click', () => {
    slideImages[curImg].style.animationName='slideouttoleft';
    curImg=(curImg+1)%numImgs;
    slideImages[curImg].style.animationName='slideinfromright';
  });
  
  leftBtn.addEventListener('click', () => {
    slideImages[curImg].style.animationName='slideouttoright';
    curImg=curImg==0? numImgs-1 : Math.abs((curImg-1)%numImgs);
    slideImages[curImg].style.animationName='slideinfromleft';
  });
  
  function initialize() {
    slideImages[0].style.animationName='slideinfromright';
  }