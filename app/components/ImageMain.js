export function ImageMain() {
  const $imageMaindiv = document.createElement("div");

  $imageMaindiv.classList.add("imageMain");

  $imageMaindiv.innerHTML = `<img src="app/assets/image-product-1.jpg" alt="image-main">`;

  return $imageMaindiv;
}
