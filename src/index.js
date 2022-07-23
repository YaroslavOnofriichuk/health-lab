import "./styles/main.scss";

const burgerButton = document.querySelector("[data-modal-open]");
const backdrop = document.querySelector("[data-modal]");
const closeButton = document.querySelector("[data-modal-close]");

function openModal() {
  backdrop.classList.toggle("is-hidden");
  document.body.style.overflow = "hidden";

  window.addEventListener("keydown", onKeyDown, {
    once: true,
  });
}

function closeModal() {
  backdrop.classList.toggle("is-hidden");
  document.body.style.overflow = "";
}

function onBackdropClose(e) {
  if (e.currentTarget === e.target) {
    closeModal();
  }
}

function onKeyDown(e) {
  if (e.code === "Escape") {
    closeModal();
  }
}

burgerButton.addEventListener("click", openModal);

closeButton.addEventListener("click", closeModal);

backdrop.addEventListener("click", onBackdropClose);
