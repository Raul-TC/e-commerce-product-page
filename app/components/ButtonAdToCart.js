export function ButtonAdToCart() {
  const $buttonAddToCart = document.createElement("button");

  $buttonAddToCart.classList.add("addToCart");

  $buttonAddToCart.innerHTML = `<img src="app/assets/icon-cart-white.svg" alt="icon-card-button"><p> Add to cart</p>`;

  return $buttonAddToCart;
}
