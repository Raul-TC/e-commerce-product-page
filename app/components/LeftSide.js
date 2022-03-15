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

    console.info($images);
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
      },
      100
    );
  });
  return $leftSideDiv;
}
