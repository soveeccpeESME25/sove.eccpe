
document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".subseccion-izquierda img, .subseccion-derecha img, .subseccion-izquierda-alt img, .subseccion-derecha-alt img");

  if (!images.length) {
    console.warn("⚠ No se encontraron imágenes en .subseccion-izquierda ni .subseccion-derecha");
    return;
  }

  const lightbox = document.createElement("div");
  lightbox.id = "lightbox";
  document.body.appendChild(lightbox);

  lightbox.innerHTML = `
    <div class="lightbox-content">
      <span class="lightbox-close">&times;</span>
      <img class="lightbox-image" src="" alt="Imagen ampliada">
      <span class="lightbox-prev">&#10094;</span>
      <span class="lightbox-next">&#10095;</span>
    </div>`;

  const imgElement = lightbox.querySelector(".lightbox-image");
  const closeBtn = lightbox.querySelector(".lightbox-close");
  const prevBtn = lightbox.querySelector(".lightbox-prev");
  const nextBtn = lightbox.querySelector(".lightbox-next");

  let currentIndex = 0;
  const imageList = Array.from(images);

  imageList.forEach((img, index) => {
    img.style.cursor = "zoom-in";
    img.addEventListener("click", () => {
      currentIndex = index;
      openLightbox();
    });
  });

  function openLightbox() {
    const src = imageList[currentIndex].getAttribute("src");
    if (src) {
      imgElement.src = src;
      lightbox.classList.add("active");
      document.body.style.overflow = "hidden";
    } else {
      console.error("No se encontró src en la imagen actual");
    }
  }

  function closeLightbox() {
    lightbox.classList.remove("active");
    document.body.style.overflow = "auto";
  }

  closeBtn.addEventListener("click", closeLightbox);

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + imageList.length) % imageList.length;
    openLightbox();
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % imageList.length;
    openLightbox();
  });
});
