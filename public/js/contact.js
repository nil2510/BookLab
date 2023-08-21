document.addEventListener("DOMContentLoaded", function () {
  const contactButton = document.getElementById("contactButton");
  const contactModal = document.getElementById("contactModal");
  const closeButton = document.querySelector(".close2");

  contactButton.addEventListener("click", function () {
    contactModal.style.display = "block";
  });

  closeButton.addEventListener("click", function () {
    contactModal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === contactModal) {
      contactModal.style.display = "none";
    }
  });
});