// Project Slider functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.project-slide');
const totalSlides = slides.length;

function showSlide(index) {
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    }
    const slider = document.querySelector('.project-slider');
    slider.style.transform = `translateX(-${currentSlide * 350}px)`;  // Adjust width (350px) as per card width
}

function nextSlide() {
    currentSlide++;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide--;
    showSlide(currentSlide);
}

document.querySelector('.next-btn').addEventListener('click', nextSlide);
document.querySelector('.prev-btn').addEventListener('click', prevSlide);

setInterval(nextSlide, 5000); // Auto-slide every 5 seconds
showSlide(currentSlide); // Show first slide initially
