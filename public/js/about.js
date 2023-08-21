document.addEventListener("DOMContentLoaded", function () {
  const aboutButton = document.getElementById("aboutButton");
  const aboutModal = document.getElementById("aboutModal");
  const closeButton = document.querySelector(".close");

  aboutButton.addEventListener("click", function () {
    aboutModal.style.display = "block";
  });

  closeButton.addEventListener("click", function () {
    aboutModal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === aboutModal) {
      aboutModal.style.display = "none";
    }
  });
});