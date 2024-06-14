document.addEventListener('DOMContentLoaded', () => {
    let slideIndex = 1;
  
    function showSlides(n) {
      const sliders = document.querySelectorAll('.slider');
      sliders.forEach(slider => {
        const slides = slider.querySelectorAll('.slide');
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        slides.forEach(slide => slide.classList.remove('active'));
        slides[slideIndex - 1].classList.add('active');
      });
    }
  
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }
  
    // Initialize all sliders
    const sliders = document.querySelectorAll('.slider');
    sliders.forEach(slider => {
      const slides = slider.querySelectorAll('.slide');
      if (slides.length > 0) {
        slides[0].classList.add('active');
      }
  
      // Add event listeners to the navigation buttons
      slider.querySelector('.prev').addEventListener('click', () => plusSlides(-1));
      slider.querySelector('.next').addEventListener('click', () => plusSlides(1));
    });
  
    // Show the first slide for each slider
    showSlides(slideIndex);
  });
  