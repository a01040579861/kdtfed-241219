const openBtn = document.querySelector("#open");
const modalBox = document.querySelector("#modal-box");
const closeBtn = document.querySelector("#close");

openBtn.addEventListener("click", function () {
  this.classList.add("btnActive");
  modalBox.classList.add("active");
});
closeBtn.addEventListener("click", function () {
  openBtn.classList.remove("btnActive");
  modalBox.classList.remove("active");
});
