document.addEventListener('mousemove', function (e) {
    let particles = document.createElement('div');
    particles.classList.add('particle');
    particles.style.top = e.clientY + 'px';
    particles.style.left = e.clientX + 'px';
    document.body.appendChild(particles);

    setTimeout(() => {
        particles.remove();
    }, 500);
});

// Project Slider functionality
// Project Slider functionality
// Project Slider functionality
// Project Slider functionality
// Project Slider functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.project-slide');
const totalSlides = slides.length;
const slidesPerView = 3; // Number of slides visible at a time

// Update the width of the slider container based on the number of slides
const slider = document.querySelector('.project-slider');
slider.style.width = `${totalSlides * 33.33}%`;  // totalSlides * width of each slide (33.33%)

function showSlide(index) {
    if (index >= totalSlides - slidesPerView) { // Make sure we don't go beyond the last set of slides
        currentSlide = totalSlides - slidesPerView;
    } else if (index < 0) {
        currentSlide = 0;
    }

    // Update the translateX property to slide the content
    slider.style.transform = `translateX(-${currentSlide * (100 / slidesPerView)}%)`;  // Adjust by width of each slide
}

function nextSlide() {
    currentSlide++;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide--;
    showSlide(currentSlide);
}

// Add event listeners for buttons
document.querySelector('.next-btn').addEventListener('click', nextSlide);
document.querySelector('.prev-btn').addEventListener('click', prevSlide);

// Automatically slide every 5 seconds (optional)
setInterval(nextSlide, 5000); // Auto-slide every 5 seconds

// Show the first slide initially
showSlide(currentSlide);


// For the Hamburger Menu Toggle
document.querySelector('.hamburger').addEventListener('click', function() {
    const navList = document.querySelector('nav ul');
    navList.style.display = navList.style.display === 'flex' ? 'none' : 'flex';
});
