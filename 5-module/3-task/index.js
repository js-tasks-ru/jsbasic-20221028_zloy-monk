function initCarousel() {
  // ваш код...
  let carouselArrow = document.querySelector('.carousel__arrow')
  let arrowRight = document.querySelector('.carousel__arrow_right');
  let arrowLeft = document.querySelector('.carousel__arrow_left');
  let carousel = document.querySelector('.carousel__inner');
  let slides = document.querySelectorAll('.carousel__slide').length;
  let offsetWidth = carousel.offsetWidth;
  let count = 0;

  if (count === 0) {
    arrowLeft.style.display = 'none';
  }

  arrowRight.addEventListener('click', () => {
    if (count < slides - 1) {
      count++;
      carousel.style.transform = `translateX(-${offsetWidth * count}px)`;
      if (count === slides - 1) {
        arrowRight.style.display = 'none';
      } else {
        arrowLeft.style.display = '';
      }
    }
  })

  arrowLeft.addEventListener('click', () => {
    if (count > 0) {
      count--;
      carousel.style.transform = `translateX(-${offsetWidth * count}px)`;
      if (count === 0) {
        arrowLeft.style.display = 'none';
      } else {
        arrowRight.style.display = '';
      }
    }
  })
}
