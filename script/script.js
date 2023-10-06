const width = window.innerWidth;

console.log(width);

const setSlide = function () {
  document.addEventListener("DOMContentLoaded", function () {
    let minPerSlide;

    let items = document.querySelectorAll(".carousel .carousel-item");

    if (width <= 480) {
      minPerSlide = 1;
    } else {
      minPerSlide = 6;
    }

    items.forEach((el) => {
      let next = el.nextElementSibling;
      for (var i = 1; i < minPerSlide; i++) {
        if (!next) {
          next = items[0];
        }
        let cloneChild = next.cloneNode(true);
        el.appendChild(cloneChild.children[0]);
        next = next.nextElementSibling;
      }
    });
  });
};

setInterval(setSlide(), 100);
