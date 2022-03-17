export function Carrousel() {
  const $carrouselDiv = document.createElement("div");

  $carrouselDiv.classList.add("carrousel");

  $carrouselDiv.innerHTML = `
  <img class="close" src="app/assets/icon-plus.svg" alt="">
  <div class="slider-slides">
  <img class=" " src="app/assets/image-product-1.jpg" alt="image-product01" data-id=0>
  </div>

  <div class="arrowLeft">
  <img src="app/assets/icon-previous.svg" alt="previous-arrow">
  </div>
 
  <div class="arrowRight">
  <img src="app/assets/icon-next.svg" alt="next-arrow">
  </div>
  `;

  return $carrouselDiv;
}
