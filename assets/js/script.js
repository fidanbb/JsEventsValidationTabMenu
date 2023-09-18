"use strict";

// let tabHeaders = document.querySelectorAll(".tab-header .item");
// let tabContents = document.querySelectorAll(".tab-content .item");
// tabHeaders.forEach((tabHeader) => {
//   tabHeader.addEventListener("click", function () {
//     document.querySelector(".active-tab").classList.remove("active-tab");
//     this.classList.add("active-tab");

//     tabContents.forEach((content) => {
//       if (content.getAttribute("data-id") == this.getAttribute("data-id")) {
//         content.classList.remove("d-none");
//       } else {
//         content.classList.add("d-none");
//       }
//     });
//   });
// });

let openModal = document.querySelector(".open-modal");
let closeModal = document.querySelector(".close-modal");
let modal = document.querySelector(".modal-area");

openModal.addEventListener("click", function () {
  modal.classList.remove("d-none");
});

closeModal.addEventListener("click", function () {
  modal.classList.add("d-none");
});
