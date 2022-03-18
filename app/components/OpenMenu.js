export function OpenMenu() {
  const $openContainer = document.createElement("div");

  $openContainer.classList.add("openMenu");

  $openContainer.innerHTML = `<img src="app/assets/icon-menu.svg" alt="open-menu">`;

  document.addEventListener("click", (e) => {
    if (e.target.matches(".openMenu") || e.target.matches(".openMenu *")) {
      document.querySelector(".containerMenu").classList.remove("hideMenu");
    }
    if (e.target.matches(".closeMenu") || e.target.matches(".closeMenu *")) {
      document.querySelector(".containerMenu").classList.add("hideMenu");
    }
  });
  return $openContainer;
}
