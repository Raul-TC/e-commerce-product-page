export function Carrousel() {
  const $carrouselDiv = document.createElement("div");

  $carrouselDiv.classList.add("carrousel");

  $carrouselDiv.innerHTML = `
  <img class="close" src="app/assets/icon-plus.svg" alt="">
  <div class="slider-slides">
  <div class="slider-slide activeImage">
  <img class=" " src="app/assets/image-product-1.jpg" alt="image-product01" data-id=0>
  </div>
  
  <div class="slider-slide">
  <img class=" " src="app/assets/image-product-2.jpg" alt="image-product02" data-id=1>
  </div>
  
  <div class="slider-slide">
  <img class=" " src="app/assets/image-product-3.jpg" alt="image-product03" data-id=2>
  </div>
  
  <div class="slider-slide">
  <img class=" " src="app/assets/image-product-4.jpg" alt="image-product04" data-id=3>
  </div>
  
  <div class="arrowLeft">
  <img src="app/assets/icon-previous.svg" alt="previous-arrow">
  </div>
  </div>
  <div class="arrowRight">
  <img src="app/assets/icon-next.svg" alt="next-arrow">
  </div>
  `;

  return $carrouselDiv;
}
