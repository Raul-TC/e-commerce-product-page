export function Carrousel() {
  const $carrouselDiv = document.createElement("div");

  $carrouselDiv.classList.add("carrousel");

  $carrouselDiv.innerHTML = `
  <img class="close" src="app/assets/icon-plus.svg" alt="">
  <div class="arrowLeft">
  <img src="app/assets/icon-previous.svg" alt="previous-arrow">
  </div>
  <img  class="activeModalImg slide" src="app/assets/image-product-1.jpg" alt="image-product01" data-id=0>
  <img class="none slide" src="app/assets/image-product-2.jpg" alt="image-product02" data-id=1>
  <img class="none slide" src="app/assets/image-product-3.jpg" alt="image-product03" data-id=2>
  <img class="none slide" src="app/assets/image-product-4.jpg" alt="image-product04" data-id=3>
   <div class="arrowRight">
  <img src="app/assets/icon-next.svg" alt="next-arrow">
  </div>
  `;

  return $carrouselDiv;
}
