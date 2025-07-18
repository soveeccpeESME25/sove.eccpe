
document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const licencia = params.get("licencia");

    if (licencia) {
        const target = document.getElementById("licencia-" + licencia.toLowerCase());
        if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "center" });
            const innerCard = target.querySelector(".flip-card-inner");
            if (innerCard) {
                innerCard.style.transform = "rotateY(180deg)";
                setTimeout(() => {
                    innerCard.style.transform = "";
                }, 6000);
            }
        }
    }
});
