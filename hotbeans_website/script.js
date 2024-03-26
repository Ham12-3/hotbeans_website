document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('#carouselExampleAutoplaying');
    const carouselInner = carousel.querySelector('.carousel-inner');
    const carouselItems = carouselInner.querySelectorAll('.carousel-item');
  
    let currentIndex = 0;
  
    carousel.addEventListener('click', (event) => {
      const target = event.target;
      if (target.dataset.bsTarget === "#carouselExampleAutoplaying") {
        if (target.dataset.bsSlide === "prev") {
          if (currentIndex === 0) {
            currentIndex = carouselItems.length - 1;
          } else {
            currentIndex--;
          }
        } else if (target.dataset.bsSlide === "next") {
          if (currentIndex === carouselItems.length - 1) {
            currentIndex = 0;
          } else {
            currentIndex++;
          }
        }
        updateCarousel();
      }
    });
  
    function updateCarousel() {
      carouselItems.forEach((item, index) => {
        if (index === currentIndex) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      });
    }
  });
  