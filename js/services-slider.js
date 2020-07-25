var serviceSlider = document.querySelector(".services-slider");
var serviceSlideCollection = serviceSlider.querySelectorAll(".services-slider-slide");
var serviceSliderButtonCollection = serviceSlider.querySelectorAll(".services-slider-button");

var onServiceSliderButtonClick = function (evt) {
  var currentSlide = serviceSlider.querySelector(".services-slider-slide:not(.hidden)");
  var currentButton = serviceSlider.querySelector(".services-slider-button-current");

  currentSlide.classList.add("hidden");
  currentButton.classList.remove("services-slider-button-current");

  serviceSlideCollection.forEach(function (el) {
    let slideHeader = el.querySelector("h3");

    if (slideHeader.textContent === evt.currentTarget.textContent) {
      el.classList.remove("hidden");
      evt.currentTarget.classList.add("services-slider-button-current");
    }
  });
};

serviceSliderButtonCollection.forEach(function (el) {
  el.addEventListener('click', onServiceSliderButtonClick);
});
