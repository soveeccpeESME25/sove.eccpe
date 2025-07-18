
document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll("#portada-carrusel .carrusel-slide");
    const indicators = document.querySelectorAll(".carrusel-indicadores .indicador");
    const btnPrev = document.getElementById("carrusel-prev");
    const btnNext = document.getElementById("carrusel-next");
    let current = 0;
    let interval;

    function showSlide(index) {
        slides[current].style.display = "none";
        current = index;
        slides[current].style.display = "flex";
        updateIndicators(current);
    }

    function updateIndicators(index) {
        indicators.forEach((dot, i) => {
            dot.classList.toggle("activo", i === index);
        });
    }

    function nextSlide() {
        showSlide((current + 1) % slides.length);
    }

    function prevSlide() {
        showSlide((current - 1 + slides.length) % slides.length);
    }

    btnNext.addEventListener("click", nextSlide);
    btnPrev.addEventListener("click", prevSlide);

    indicators.forEach((dot, i) => {
        dot.addEventListener("click", () => showSlide(i));
    });

    interval = setInterval(nextSlide, 5000);
});
