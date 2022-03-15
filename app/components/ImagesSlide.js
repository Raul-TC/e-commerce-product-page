export function ImagesSlide() {
  const $imagesContainer = document.createElement("div");

  $imagesContainer.classList.add("imagesContainer");

  $imagesContainer.innerHTML = `
<img src="app/assets/image-product-1.jpg" alt="product01">
<img src="app/assets/image-product-2.jpg" alt="product02">
<img src="app/assets/image-product-3.jpg" alt="product03">
<img src="app/assets/image-product-4.jpg" alt="product0">

`;

  return $imagesContainer;
}
