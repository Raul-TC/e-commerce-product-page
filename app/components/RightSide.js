import { ButtonAdToCart } from "./ButtonAdToCart.js";
import { Counter } from "./Counter.js";
import { NameCompany } from "./NameCompany.js";
import { Price } from "./Price.js";
import { ProductDescription } from "./ProductDescription.js";
import { TitleProduct } from "./TitleProduct.js";

export function RightSide() {
  const $RightSideDiv = document.createElement("div"),
    $containerCount = document.createElement("div");
  $RightSideDiv.appendChild(NameCompany());
  $RightSideDiv.appendChild(TitleProduct());
  $RightSideDiv.appendChild(ProductDescription());
  $RightSideDiv.appendChild(Price());
  $containerCount.appendChild(Counter());
  $containerCount.appendChild(ButtonAdToCart());

  $RightSideDiv.appendChild($containerCount);
  $RightSideDiv.classList.add("rightSide");
  $containerCount.classList.add("containerPrice");

  return $RightSideDiv;
}
