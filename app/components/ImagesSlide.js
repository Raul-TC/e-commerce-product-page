export function ImagesSlide() {
  const $imagesContainer = document.createElement("div");

  $imagesContainer.classList.add("imagesContainer");

  $imagesContainer.innerHTML = `
<div class="image"><img src="app/assets/image-product-1.jpg" alt="product01"></div>
<div class="image"><img src="app/assets/image-product-2.jpg" alt="product02"></div>
<div class="image"><img src="app/assets/image-product-3.jpg" alt="product03"></div>
<div class="image"><img src="app/assets/image-product-4.jpg" alt="product04"></div>
`;

  return $imagesContainer;
}
