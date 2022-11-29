import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.carouselHtml();
    this.arrowClick();
    this.buttonClick();
  }

  carouselHtml() {
    const carouselSlide = `
      <div class="carousel">
        <div class="carousel__arrow carousel__arrow_right">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </div>
        <div class="carousel__arrow carousel__arrow_left">
          <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
        </div>
        <div class="carousel__inner">
          ${this.slides.map(obj =>
            `<div class="carousel__slide" data-id="${obj.id}">
              <img src="/assets/images/carousel/${obj.image}" class="carousel__img" alt="slide">
              <div class="carousel__caption">
                <span class="carousel__price">€${obj.price.toFixed(2)}</span>
                <div class="carousel__title">${obj.name}</div>
                <button type="button" class="carousel__button">
                  <img src="/assets/images/icons/plus-icon.svg" alt="icon">
                </button>
              </div>
            </div>`).join('')}
        </div>
      </div>`;

    this.elem = createElement(carouselSlide);
  }

  arrowClick() {
    let arrowRight = this.elem.querySelector('.carousel__arrow_right');
    let arrowLeft = this.elem.querySelector('.carousel__arrow_left');
    let banner = this.elem.querySelector(".carousel__inner");
    let slidesCard = this.elem.querySelectorAll('.carousel__slide').length;
    let count = 0;

    if (count === 0) {
      arrowLeft.style.display = 'none';
    }

    this.elem.addEventListener('click', (ev) => {
      if (ev.target.closest('.carousel__arrow_right')) {
        if (count < slidesCard - 1) {
          count++;
          banner.style.transform = `translateX(-${this.elem.querySelector(".carousel__inner").offsetWidth * count}px)`;
          if (count === slidesCard - 1) {
            arrowRight.style.display = 'none';
          } else {
            arrowLeft.style.display = '';
          }
        }
      }
    });

    this.elem.addEventListener('click', (ev) => {
      if (ev.target.closest('.carousel__arrow_left')) {
        if (count > 0) {
          count--;
          banner.style.transform = `translateX(-${this.elem.querySelector(".carousel__inner").offsetWidth * count}px)`;
          if (count === 0) {
            arrowLeft.style.display = 'none';
          } else {
            arrowRight.style.display = '';
          }
        }
      }
    });
  }

  buttonClick() {
    this.elem.addEventListener('click', (ev) => {
      let id = ev.target.closest(".carousel__slide");

      if (ev.target.closest('.carousel__button')) {
        this.elem.dispatchEvent(new CustomEvent("product-add", {
          detail: id.dataset.id,
          bubbles: true,
        }));
        console.log(id.dataset.id)
      }
    })
  }
}
