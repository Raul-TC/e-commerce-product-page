export function ShoppingCart() {
  const $containerShoppingCart = document.createElement("div");

  $containerShoppingCart.classList.add("shoppingCart");

  $containerShoppingCart.innerHTML = `<div class="cart"> 
  <img src="app/assets/icon-cart.svg" alt="icon-cart">
  <span class="countCart">3</span>
  </div> `;

  return $containerShoppingCart;
}
