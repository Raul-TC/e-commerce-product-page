export function Carrousel() {
  const $carrouselDiv = document.createElement("div");

  $carrouselDiv.classList.add("carrousel");

  $carrouselDiv.innerHTML = `
  <img class="close" src="app/assets/icon-close-White.svg" alt="">

  <div class="slider-main">
  <img class=" " src="app/assets/image-product-1.jpg" alt="image-product01" data-id=0>
  </div>

  <div class="arrowLeft">
  <img src="app/assets/icon-previousBlack.svg" alt="previous-arrow">
  </div>
 
  <div class="arrowRight">
  <img src="app/assets/icon-nextBlack.svg" alt="next-arrow">
  </div>
  `;

  setTimeout(() => {
    document.addEventListener("mouseover", (e) => {
      if (
        e.target.matches(".arrowRight") ||
        e.target.matches(".arrowRight *")
      ) {
        document.querySelector(".arrowRight img").src =
          "app/assets/icon-next.svg";
      }
      if (e.target.matches(".arrowLeft") || e.target.matches(".arrowLeft *")) {
        document.querySelector(".arrowLeft img").src =
          "app/assets/icon-previous.svg";
      }
      if (e.target.matches(".close")) {
        document.querySelector(".close").src = "app/assets/icon-close.svg";
      }
    });

    document.addEventListener("mouseout", (e) => {
      if (e.target.matches(".arrowRight")) {
        document.querySelector(".arrowRight img").src =
          "app/assets/icon-nextBlack.svg";
      }
      if (e.target.matches(".arrowLeft")) {
        document.querySelector(".arrowLeft img").src =
          "app/assets/icon-previousBlack.svg";
      }
      if (e.target.matches(".close")) {
        document.querySelector(".close").src =
          "app/assets/icon-close-White.svg";
      }
    });
  }, 100);
  return $carrouselDiv;
}
