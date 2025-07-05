
document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const servicio = params.get("servicio");

    if (servicio === "psicosensometrico") {
        const target = document.getElementById("psicosensometrico");
        if (target) {
            setTimeout(() => {
                target.scrollIntoView({ behavior: "smooth", block: "center" });
                target.style.boxShadow = "0 0 20px #0a962f";
                target.style.transition = "box-shadow 0.5s ease-in-out";
                setTimeout(() => {
                    target.style.boxShadow = "none";
                }, 3000);
            }, 500);
        }
    }
});
