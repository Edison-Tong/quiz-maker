let closeModalBtn = document.querySelectorAll(".close");
let makeQuizModalBtn = document.querySelector("#make");
let takeQuizModalBtn = document.querySelector("#take");
let homeScreen = document.querySelector(".container");

function toggleModal(modal, show) {
  if (show) {
    modal.classList.add("show");
    homeScreen.style.display = "none";
  } else {
    modal.classList.remove("show");
    homeScreen.style.display = "block";
  }
}

document.addEventListener("click", function (event) {
  if (event.target.matches("#make, #take")) {
    const modal = document.querySelector(`.${event.target.id}-quiz-modal`);
    toggleModal(modal, true);
  } else if (event.target.matches(".close")) {
    const modal = event.target.closest(".modal");
    toggleModal(modal, false);
  }
});
