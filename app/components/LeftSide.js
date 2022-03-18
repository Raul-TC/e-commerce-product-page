import { Carrousel } from "./Carrousel.js";
import { ImageMain } from "./ImageMain.js";
import { ImagesSlide } from "./ImagesSlide.js";

export function LeftSide() {
  const $leftSideDiv = document.createElement("div");
  $leftSideDiv.classList.add("leftSide");

  $leftSideDiv.appendChild(ImageMain());
  $leftSideDiv.appendChild(ImagesSlide());
  $leftSideDiv.appendChild(Carrousel());
  let plus = 1;
  setTimeout(() => {
    const $images = Array.from(
      document.querySelectorAll(".imagesContainer img")
    );
    let thumbnail = document.querySelectorAll(".modal .imagesContainer img");
    // console.info($images);
    document.querySelector(".carrousel").classList.add("none");
    document.addEventListener(
      "click",
      (e) => {
        let filter;
        let filterNull;
        if (e.target.matches(".imagesContainer img")) {
          //  console.info(e.target.src);
          document.querySelector(".imageMain img").src = e.target.src;
          filter = $images.filter((el) => e.target.src === el.src);
          console.info(filter);
          filterNull = $images.filter((el) => e.target.src !== el.src);

          /* Filter Modal Imgs*/
          filter = $images.filter((el) => e.target.src === el.src);
          // console.info(filter);
          filterNull = $images.filter((el) => e.target.src !== el.src);
          // console.info(filterNull);
          filter.forEach((el) => {
            el.parentNode.classList.add("active");
            el.classList.add("opacityImage");
          });
          filterNull.forEach((el) => {
            el.parentNode.classList.remove("active");
            el.classList.remove("opacityImage");
          });
          document.querySelector(".slider-slides img").src = e.target.src;
          document.querySelector(".slider-slides img").alt = e.target.alt;
          document.querySelector(".slider-slides img").dataset.id =
            e.target.dataset.id;
        }
        function aumentar(suma) {
          return (document.querySelector(".slider-slides img").src =
            thumbnail[suma].src);
        }
        if (
          e.target.matches(".arrowRight") ||
          e.target.matches(".arrowRight *")
        ) {
          plus++;
          aumentar(plus);

          if (plus >= thumbnail.length - 1) {
            plus = 0;
            aumentar(plus);
          }
          console.info(plus);
        }

        if (
          e.target.matches(".arrowLeft") ||
          e.target.matches(".arrowLeft *")
        ) {
          plus--;
          aumentar(plus);

          if (plus <= 0) {
            plus = thumbnail.length - 1;
            aumentar(plus);
          }
          console.info(plus);
        }
        if (e.target.matches(".imageMain img")) {
          document.querySelector(".modal").classList.remove("none");
          document.querySelector(".slider-slides img").src =
            document.querySelector(".imageMain img").src;
          console.info(
            document.querySelectorAll(".modal .imagesContainer img")
          );
        }

        if (e.target.matches(".close") || e.target.matches(".modal")) {
          document.querySelector(".modal").classList.add("none");
        }
      },
      100
    );
  });

  setTimeout(() => {
    if (window.screen.width <= 428) {
      document.querySelector(".carrousel").classList.remove("none");
      $leftSideDiv.querySelector(".imageMain").classList.add("none");
      $leftSideDiv.querySelector(".imagesContainer").classList.add("none");
      $leftSideDiv.querySelector(".close").classList.add("none");
    }
  }, 100);
  return $leftSideDiv;
}
