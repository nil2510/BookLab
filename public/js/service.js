document.addEventListener("DOMContentLoaded", function () {
    const serviceButton = document.getElementById("serviceButton");
    const serviceModal = document.getElementById("serviceModal");
    const closeButton = document.querySelector(".close3");
  
    serviceButton.addEventListener("click", function () {
      serviceModal.style.display = "block";
    });

    closeButton.addEventListener("click", function () {
      serviceModal.style.display = "none";
    });
  
    window.addEventListener("click", function (event) {
      if (event.target === serviceModal) {
        serviceModal.style.display = "none";
      }
    });
  });