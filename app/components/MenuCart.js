export function MenuCart() {
  const $divCard = document.createElement("div");

  $divCard.classList.add("divCard", "none");

  $divCard.innerHTML = `
    <p class="cartName">Cart</p>
    <div class="cartEmpty none">
    <p class="emptyText">Your cart is empty.</p>
    </div>
    <div class="elementsCart none">
        <div class="element">
        <img  class="imageProduct" src="app/assets/image-product-1-thumbnail.jpg" alt="thumbnail-image-product">
        <div class="price">
            <p>Fall Limited Edition Sneakers</p>
            <span id="priceBase">$125.00 x  <span id="countElements">3</span> <span id="totalPrice">$375.00</span></span>
        </div>
        <img class="trash" src="app/assets/icon-delete.svg" alt="icon-delete-product">
        </div>
        <button class="btnCheckout">Checkout</button>
    </div>
  `;

  document.addEventListener("click", (e) => {
    if (
      e.target.matches(".shoppingCart") ||
      e.target.matches(".shoppingCart *")
    ) {
      document.querySelector(".divCard").classList.toggle("none");
      document.querySelector(".elementsCart").classList.toggle("none");
    }
  });

  return $divCard;
}
