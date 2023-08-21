document.addEventListener("DOMContentLoaded", function () {
    const privacyButton = document.getElementById("privacyButton");
    const privacyModal = document.getElementById("privacyModal");
    const closeButton = document.querySelector(".close4");
  
    privacyButton.addEventListener("click", function () {
      privacyModal.style.display = "block";
    });
  
    closeButton.addEventListener("click", function () {
      privacyModal.style.display = "none";
    });
  
    window.addEventListener("click", function (event) {
      if (event.target === privacyModal) {
        privacyModal.style.display = "none";
      }
    });
  });