class ImageSliderHandler {
  constructor() {
    this.slides = document.querySelectorAll(".slides img");
    this.prevBtn = document.querySelector(".slider-prev-btn");
    this.nextBtn = document.querySelector(".slider-next-btn");
    this.slideIndex = 0;
    this.initializeSlider();
  }

  initializeSlider() {
    if (this.slides.length > 0) {
      this.slides[this.slideIndex].classList.add("displaySlide");
    }
    this.attachListeners();
  }

  showSlide(index) {
    if (index >= this.slides.length) {
      this.slideIndex = 0;
    } else if (index < 0) {
      this.slideIndex = this.slides.length - 1;
    }

    this.slides.forEach((slide) => {
      slide.classList.remove("displaySlide");
    });
    this.slides[this.slideIndex].classList.add("displaySlide");
  }

  prevSlide() {
    this.slideIndex--;
    this.showSlide(this.slideIndex);
  }

  nextSlide() {
    console.log("next slide");
    this.slideIndex++;
    this.showSlide(this.slideIndex);
  }

  attachListeners() {
    if (this.prevBtn) {
      this.prevBtn.addEventListener("click", () => this.prevSlide());
    } 
    if (this.nextBtn) {
      this.nextBtn.addEventListener("click", () => this.nextSlide());
    }
  }
}

export default ImageSliderHandler;
