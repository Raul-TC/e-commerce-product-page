export function Slider() {
  const $slides = document.querySelectorAll(".slider-slide");
  let i = 0;
  // console.info($slides);

  document.addEventListener("click", (e) => {
    let sliderId = document.querySelector(".slider-slide.activeImage img")
      .dataset.id;
    console.info(e.target.dataset.id);
    if (e.target.matches(".arrowLeft") || e.target.matches(".arrowLeft *")) {
      console.info("Click en izquierda");
      $slides[i].classList.remove("activeImage");
      i--;
      if (i < 0) {
        i = $slides.length - 1;
      }
      $slides[i].classList.add("activeImage");
      console.info(
        document.querySelector(".slider-slide.activeImage img").dataset.id
      );
      console.info(sliderId);
    }

    if (e.target.matches(".arrowRight") || e.target.matches(".arrowRight *")) {
      console.info("click en derecha");
      $slides[i].classList.remove("activeImage");

      i++;

      if (i >= $slides.length) {
        i = 0;
      }
      $slides[i].classList.add("activeImage");
    }
    console.info(
      document.querySelector(".slider-slide.activeImage img").dataset.id
    );
    //console.info(sliderId);
  });
}
