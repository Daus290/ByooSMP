// accordion "Little more about us": hanya satu panel terbuka, panel terbuka bisa ditutup lagi
document.addEventListener("DOMContentLoaded", function () {
    let tombolList = Array.from(document.querySelectorAll(".info-tombol"));

    function aturPanel(tombol, buka) {
        tombol.setAttribute("aria-expanded", String(buka));
        tombol.closest(".info-item").classList.toggle("terbuka", buka);
    }

    tombolList.forEach(function (tombol, index) {
        tombol.addEventListener("click", function () {
            let buka = tombol.getAttribute("aria-expanded") !== "true";

            tombolList.forEach(function (lain) {
                aturPanel(lain, lain === tombol && buka);
            });
        });

        // navigasi keyboard antar judul panel
        tombol.addEventListener("keydown", function (event) {
            let tujuan = null;

            if (event.key === "ArrowDown") tujuan = tombolList[(index + 1) % tombolList.length];
            if (event.key === "ArrowUp") tujuan = tombolList[(index - 1 + tombolList.length) % tombolList.length];
            if (event.key === "Home") tujuan = tombolList[0];
            if (event.key === "End") tujuan = tombolList[tombolList.length - 1];

            if (tujuan) {
                event.preventDefault();
                tujuan.focus();
            }
        });
    });
});
