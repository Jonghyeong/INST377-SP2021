/* Put your javascript in here */
    /* label the images, just for convenience, to visually track them */
    // let i = 1;
    // for(let li of carousel.querySelectorAll('li')) {
    //   li.style.position = 'relative';
    //   li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
    //   i++;
    // }

//     /* configuration */
// let width = 130; // image width
// let count = 3; // visible images count

// let list = carousel.querySelector('ul');
// let listElems = carousel.querySelectorAll('li');

// let position = 0; // ribbon scroll position

// carousel.querySelector('.prev').onclick = function() {
//     // shift left
//     position += width * count;
//     // can't move to the left too much, end of images
//     position = Math.min(position, 0)
//     list.style.marginLeft = position + 'px';
// };

// carousel.querySelector('.next').onclick = function() {
//     // shift right
//     position -= width * count;
//     // can only shift the ribbbon for (total ribbon length - visible count) images
//     position = Math.max(position, -width * (listElems.length - count));
//     list.style.marginLeft = position + 'px';
// };

// function riceball() {
//     const array1 = [];
//     const images = document.querySelector(".listimages")

//     images.forEach((element) => {
//         console.log(element);
//         const images2 = element.querySelector("li");
//         array1.append(images2);
//     })
// };
// function clicktoshift() {
//     element.addEventListener('click', (event) => {
//         event.listElems
//     )}
// };
// window.onload = clicktoshift;

const carousel = document.getElementById("carousel");
let position = 0;
let width = 130; // image width
let count = 3; // visible images count


document.querySelector('.arrow_prev').onclick =  (event) => {
  console.log("@@@@@@@@@@@@@");

  event.moveCarousel();
};

function moveCarousel(event) {
  console.log("@@@@@@@@@@@@@");
  const array1 = document.getElementsByTagName("li")
  const target = document.querySelector('#prev');


  if (event.target.classList.contains("arrow_next")) {
    position = position - width * count;
    event.currentTarget.querySelector(
      ".listimages"
    ).style.transform = `translateX(${position}px)`;
  }
  if (event.target.classList.contains("arrow_prev")) {
    position = position + width * count;
    event.currentTarget.querySelector(
      ".listimages"
    ).style.transform = `translateX(${position}px)`;
  }

  console.log(position);
}


// function riceball() {
//     const array1 = [];
//     const images = document.querySelector(".listimages")

// function clicktoshift() {
//     let nextBtn = document.querySelector(".arrow_next")
//     let prevBtn = document.querySelector(".arrow_prev")

//     nextBtn.addEventListener("click", (event) => {
//         event.moveCarousel
//     )}
// };
// window.onload = clicktoshift;