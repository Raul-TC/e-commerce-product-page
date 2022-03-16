import { Carrousel } from "./Carrousel.js";
import { ImageMain } from "./ImageMain.js";
import { ImagesSlide } from "./ImagesSlide.js";

export function LeftSide() {
  const $leftSideDiv = document.createElement("div");
  $leftSideDiv.classList.add("leftSide");

  $leftSideDiv.appendChild(ImageMain());
  $leftSideDiv.appendChild(ImagesSlide());
  setTimeout(() => {
    const $images = Array.from(
      document.querySelectorAll(".imagesContainer img")
    );

    // console.info($images);
    document.addEventListener(
      "click",
      (e) => {
        let filter;
        let filterNull;
        let $slides;
        if (e.target.matches(".imagesContainer img")) {
          //  console.info(e.target.src);
          document.querySelector(".imageMain img").src = e.target.src;
          filter = $images.filter((el) => e.target.src === el.src);
          console.info(filter);
          filterNull = $images.filter((el) => e.target.src !== el.src);

          /* Filter Modal Imgs*/
          filter = $images.filter((el) => e.target.src === el.src);
          console.info(filter);
          filterNull = $images.filter((el) => e.target.src !== el.src);
          console.info(filterNull);
          filter.forEach((el) => {
            el.parentNode.classList.add("active");
            el.classList.add("opacityImage");
          });
          filterNull.forEach((el) => {
            el.parentNode.classList.remove("active");
            el.classList.remove("opacityImage");
          });
        }
        document.querySelector(".activeModalImg").src =
          document.querySelector(".imageMain img").src;
        if (e.target.matches(".imageMain img")) {
          setTimeout(() => {
            $slides = document.querySelectorAll(".slide");
            console.info($slides);

            console.info(i);
            if (
              e.target.matches(".arrowLeft") ||
              e.target.matches(".arrowLeft *")
            ) {
              e.preventDefault();
              $slides[i].classList.add("none");
              i--;

              if (i < 0) {
                i = $slides.length - 1;
              }
              $slides[i].classList.add("activeModalImg");
            }
            if (e.target.matches(".arrowRight")) {
              e.preventDefault();
              $slides[i].classList.remove("activeModalImg");
              i++;

              if (i >= $slides.length) {
                i = 0;
              }
              $slides.classList.add("activeModalImg");
            }
          }, 100);
          document.querySelector(".modal").classList.remove("none");
        }

        if (e.target.matches(".close")) {
          document.querySelector(".modal").classList.add("none");
        }
      },
      100
    );
  });
  return $leftSideDiv;
}
