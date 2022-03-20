import { Carrousel } from "./Carrousel.js";
import { ImageMain } from "./ImageMain.js";
import { ImagesSlide } from "./ImagesSlide.js";

export function LeftSide() {
  const $leftSideDiv = document.createElement("div");
  $leftSideDiv.classList.add("leftSide");

  $leftSideDiv.appendChild(ImageMain());
  $leftSideDiv.appendChild(ImagesSlide());
  let plus = 0;
  setTimeout(() => {
    const $images = Array.from(
      document.querySelectorAll(".imagesContainer img")
    );
    let thumbnail = document.querySelectorAll(".modal .imagesContainer img");

    document.addEventListener(
      "click",
      (e) => {
        let filter;
        let filterNull;
        if (e.target.matches(".imagesContainer img")) {
          document.querySelector(".imageMain img").src = e.target.src;
          document.querySelector(".imageMain img").dataset.id =
            e.target.dataset.id;
          localStorage.setItem(
            "id",
            document.querySelector(".imageMain img").dataset.id
          );

          filter = $images.filter((el) => e.target.src === el.src);

          filterNull = $images.filter((el) => e.target.src !== el.src);

          filter = $images.filter((el) => e.target.src === el.src);

          filterNull = $images.filter((el) => e.target.src !== el.src);

          filter.forEach((el) => {
            el.parentNode.classList.add("active");
            el.classList.add("opacityImage");
          });
          filterNull.forEach((el) => {
            el.parentNode.classList.remove("active");
            el.classList.remove("opacityImage");
          });
        }
        if (e.target.matches(".close") || e.target.matches(".modal")) {
          document.querySelector(".modal").classList.add("none");
        }
        if (e.target.matches(".imageMain img")) {
          document.querySelector(".modal").classList.remove("none");
          document.querySelector(".slider-main img").src =
            document.querySelector(".imageMain img").src;
          document.querySelector(".slider-main img").dataset.id =
            document.querySelector(".imageMain img").dataset.id;
          document.querySelector(".slider-main img").alt =
            document.querySelector(".imageMain img").alt;
        }
      },
      100
    );
  });

  setTimeout(() => {
    if (window.screen.width <= 428) {
      $leftSideDiv.appendChild(Carrousel());
      document.querySelector(".carrousel").classList.remove("none");
      $leftSideDiv.querySelector(".imageMain").classList.add("none");
      $leftSideDiv.querySelector(".imagesContainer").classList.add("none");
      $leftSideDiv.querySelector(".close").classList.add("none");
    }
  }, 100);

  return $leftSideDiv;
}
