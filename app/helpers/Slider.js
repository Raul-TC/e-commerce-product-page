export function Slider() {
  const $slides = Array.from(document.querySelectorAll(".slider-slide")),
    thumbnails = Array.from(
      document.querySelectorAll(" .modal .imagesContainer .image")
    );
  let imgActual = document.querySelector(".slider-main img");

  localStorage.setItem(
    "id",
    document.querySelector(".imagesContainer .image img").dataset.id
  );
  document.addEventListener("click", (e) => {
    let i = localStorage.getItem("id");

    if (e.target.matches(".modal .imagesContainer .image img")) {
      imgActual.src = e.target.src;
    }
    if (e.target.matches(".arrowLeft") || e.target.matches(".arrowLeft *")) {
      thumbnails[i].classList.remove("active");
      thumbnails[i].firstChild.classList.remove("opacityImage");
      i--;
      if (i < 0) {
        i = thumbnails.length - 1;
      }
      localStorage.setItem("id", i);

      thumbnails[i].classList.add("active");
      thumbnails[i].firstChild.classList.add("opacityImage");
      document.querySelector(".slider-main img").src =
        thumbnails[i].firstChild.src;
    }

    if (e.target.matches(".arrowRight") || e.target.matches(".arrowRight *")) {
      thumbnails[i].classList.remove("active");
      thumbnails[i].firstChild.classList.remove("opacityImage");
      i++;

      if (i >= thumbnails.length) {
        i = 0;
      }
      localStorage.setItem("id", i);
      thumbnails[i].classList.add("active");
      thumbnails[i].firstChild.classList.add("opacityImage");
      document.querySelector(".slider-main img").src =
        thumbnails[i].firstChild.src;
    }
  });
}
