import "./styles/main.scss";

const burgerButton = document.querySelector("[data-modal-open]");
const modal = document.querySelector("[data-modal]");
const closeButton = document.querySelector("[data-modal-close]");

function openModal() {
  modal.classList.toggle("is-hidden");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.toggle("is-hidden");
  document.body.style.overflow = "";
}
burgerButton.addEventListener("click", openModal);

closeButton.addEventListener("click", closeModal);
