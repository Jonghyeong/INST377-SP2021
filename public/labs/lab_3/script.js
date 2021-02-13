/* Put your javascript in here */
    /* label the images, just for convenience, to visually track them */
    
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