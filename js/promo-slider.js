var promoSlider = document.querySelector(".promo-slider");
var backButton = promoSlider.querySelector(".promo-slider-button-back");
var nextButton = promoSlider.querySelector(".promo-slider-button-next");

var promoSlideCollection = promoSlider.querySelectorAll(".promo-slide");

var onBackButtonClick = function () {
  var currentSlide = promoSlider.querySelector(".promo-slide:not(.hidden)");

  for (var i = 0; i < promoSlideCollection.length; i ++) {
    if (promoSlideCollection[i] === currentSlide) {
      promoSlideCollection[i].classList.add("hidden");
      if (i === 0) {
        promoSlideCollection[promoSlideCollection.length - 1].classList.remove("hidden");
      } else {
        promoSlideCollection[i - 1].classList.remove("hidden");
      }
    }
  }
};

var onNextButtonClick = function () {
  var currentSlide = promoSlider.querySelector(".promo-slide:not(.hidden)");

  for (var i = 0; i < promoSlideCollection.length; i ++) {
    if (promoSlideCollection[i] === currentSlide) {
      promoSlideCollection[i].classList.add("hidden");
      if (i + 1 >= promoSlideCollection.length) {
        promoSlideCollection[0].classList.remove("hidden");
      } else {
        promoSlideCollection[i + 1].classList.remove("hidden");
      }
    }
  }
};

backButton.addEventListener('click', onBackButtonClick);
nextButton.addEventListener('click', onNextButtonClick);
