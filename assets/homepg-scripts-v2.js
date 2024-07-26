$(document).ready(function() {
  var slides = $('.banner-slide');
  var totalSlides = slides.length;
  var currentSlide = 0;

  function showSlide(index) {
    slides.removeClass('active');
    slides.eq(index).addClass('active');
  }

  function autoSlide() {
    showSlide(currentSlide);
    currentSlide = (currentSlide + 1) % totalSlides;
    setTimeout(autoSlide, 5000); // Change slide every 5 seconds
  }

  autoSlide(); // Start auto sliding
});
