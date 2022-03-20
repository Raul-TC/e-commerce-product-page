import { MenuHamburguerClose } from "./MenuResponsive.js";

export function Menu() {
  const $containerMenu = document.createElement("div");

  $containerMenu.classList.add("containerMenu");
  $containerMenu.innerHTML = `
  <a href="#">Collections</a>
  <a href="#">Men</a>
  <a href="#">Women</a>
  <a href="#">About</a>
  <a href="#">Contact</a>
  `;

  $containerMenu.appendChild(MenuHamburguerClose());
  if (window.screen.width <= 428) {
    $containerMenu.classList.add("hideMenu");
  }
  return $containerMenu;
}
