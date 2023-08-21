const slides = document.querySelectorAll('.slide');
let currentSlideIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    showSlide(currentSlideIndex);
}

showSlide(currentSlideIndex);
setInterval(nextSlide, 4000);