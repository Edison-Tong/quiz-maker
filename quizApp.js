let closeModalBtn = document.querySelectorAll(".close");
let makeQuizModalBtn = document.querySelector("#make");
let takeQuizModalBtn = document.querySelector("#take");
let homeScreen = document.querySelector(".container");

function openModal(event) {
  let modal = document.querySelector(`.${event.srcElement.id}-quiz-modal`);
  modal.style.display = "block";
  homeScreen.style.display = "none";
}

function closeModal(event) {
  event.target.closest(".modal").style.display = "none";
  homeScreen.style.display = "block";
}

takeQuizModalBtn.addEventListener("click", openModal);
makeQuizModalBtn.addEventListener("click", openModal);
closeModalBtn.forEach((btn) => {
  btn.addEventListener("click", closeModal);
});
