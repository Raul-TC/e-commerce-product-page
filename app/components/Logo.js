export function Logo() {
  const $containerLogo = document.createElement("div");

  $containerLogo.classList.add("container-logo");

  $containerLogo.innerHTML = `<img src="app/assets/logo.svg" alt="brand">`;

  return $containerLogo;
}
