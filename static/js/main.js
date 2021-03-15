// $('body').scrollspy({
//     target: "#main-nav"
// })

$('#main-nav a').on('click', function (event) {
    if (this.hash !== "") {
        event.preventDefault();
        const hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 1800, function () {
            window.location.hash = hash;
        })
    }
})

$('.navbar-nav>li>a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
});