// navbar berubah warna jadi putih polos ketika di scroll ke bawah
$(document).ready(function() {
    let lastScrollTop = 0;

    $(window).scroll(function() {
        let scrollTop = $(this).scrollTop();

        if (scrollTop > 50) {
            $("#header").addClass("scrolled").removeClass("scrolled-remove");
        } else if (scrollTop < lastScrollTop) {
            $("#header").addClass("scrolled-remove").removeClass("scrolled");
        }

        lastScrollTop = scrollTop;
    });
});


//observer viewport scroll
$(document).ready(function () {
    let observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                $(entry.target).addClass('visible');
            } else {
                $(entry.target).removeClass('visible');
            }
        });
    }, { threshold: 0.2 });

    let elements = $('h1, p, .player-list-item, .btn');

    elements.each(function () {
        $(this).addClass('fade-element');
        observer.observe(this);
    });
});
