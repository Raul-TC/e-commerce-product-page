export function User() {
  const $userContainer = document.createElement("div");

  $userContainer.classList.add("userContainer");

  $userContainer.innerHTML = `<img src="app/assets/image-avatar.png" alt="image-avatar">`;

  return $userContainer;
}
