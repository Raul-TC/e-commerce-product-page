export function Price() {
  const $price = document.createElement("div");

  $price.innerHTML = `<span class="price"> <p>$125.00</p>
  
  <span class="porcentaje">50%</span>


  </span> 
  
  <span class="priceDecoration">$250.00</span>
  `;

  $price.classList.add("precios");
  return $price;
}
