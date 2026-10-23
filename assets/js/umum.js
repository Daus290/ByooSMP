// tahun copyright otomatis (dipakai Beranda dan About Us)
document.addEventListener("DOMContentLoaded", function () {
    let year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }
});
