export function ImagesSlide() {
  const $imagesContainer = document.createElement("div");

  $imagesContainer.classList.add("imagesContainer");

  $imagesContainer.innerHTML = `
<div class="image active"><img  class="opacityImage" src="app/assets/image-product-1.jpg" alt="product01" data-id=0></div>
<div class="image"><img src="app/assets/image-product-2.jpg" alt="product02" data-id=1></div>
<div class="image"><img src="app/assets/image-product-3.jpg" alt="product03" data-id=2></div>
<div class="image"><img src="app/assets/image-product-4.jpg" alt="product04" data-id=3></div>
`;

  return $imagesContainer;
}
