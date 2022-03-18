export function MenuHamburguerClose() {
  const $containerMenu = document.createElement("div");

  $containerMenu.classList.add("closeMenu");
  $containerMenu.innerHTML = `<img src="app/assets/icon-close.svg" alt="icon-menu">`;

  return $containerMenu;
}
