import { Logo } from "./Logo.js";
import { Menu } from "./Menu.js";
import { MenuCart } from "./MenuCart.js";
import { ShoppingCart } from "./ShoppingCart.js";
import { User } from "./User.js";
export function Header() {
  const $containerHeader = document.createElement("header"),
    $containerRight = document.createElement("div"),
    $containerLeft = document.createElement("div");
  $containerRight.classList.add("containerRight");
  $containerLeft.classList.add("containerLeft");

  $containerLeft.appendChild(Logo());
  $containerLeft.appendChild(Menu());

  $containerRight.appendChild(ShoppingCart());
  $containerRight.appendChild(User());

  $containerRight.appendChild(MenuCart());
  $containerHeader.appendChild($containerLeft);
  $containerHeader.appendChild($containerRight);

  return $containerHeader;
}
