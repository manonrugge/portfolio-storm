jQuery(document).ready(function () {
    // $('.menu-item').addClass('menu-trigger');

    $('.hamburger').click(function () {
        // console.log('hello');
        // $('#hamburger').toggleClass('clicked');
        $('.header-wrapper').toggleClass('push');
        $('.side-nav-inner').toggleClass('open');
    });

    $('.site-nav-left').hover(function () {
        // console.log('hello');
        $('.arrow-left').toggleClass('move-left');
    });

    $('.site-nav-right').hover(function () {
        $('.arrow-right').toggleClass('move-right');
    });

});