let currentIndex = 0;
const slides = document.querySelectorAll('.slides li');
const slideTrack = document.querySelector('.slides');
const nextButton = document.getElementById('nextSlideBtn');

// Show selected slide and update active class
function showSlide(index) {
  // Move slide track
  slideTrack.style.transform = `translateX(-${index * 100}%)`;

  // Update active class
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
}

// Initial display
showSlide(currentIndex);

// On next button click
nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
});
