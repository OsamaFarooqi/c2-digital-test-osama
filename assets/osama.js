document.addEventListener("DOMContentLoaded", function () {
  const sliderItems = document.querySelectorAll(
    ".osama-container .right-side .slider__slide"
  );
  const dotPoints = document.querySelectorAll(
    ".osama-container .left-side .img-dot"
  );
  const mySlider = document.getElementById("osamaslider2");
  dotPoints.forEach((element) => {
    mySlider.setSlidePosition(2);
  });
});

function selectSliderItem(dot) {
  var index = dot.getAttribute("data-index");
  var slider = document.getElementById("osamaslider2");
  slider.querySelectorAll("li").forEach(function (item, i) {
    if (i == index) {
      var position = item.offsetLeft;
      slider.scrollTo({
        left: position,
        behavior: "smooth",
      });
    }
  });
}
