jQuery(document).ready(function () {
    // $('.menu-item').addClass('menu-trigger');

    $('.hamburger').click(function () {
        // console.log('hello');
        $('.header-wrapper').toggleClass('push');
        $('.side-nav-inner').toggleClass('open');
        $('.overlay').toggleClass('overlay-visible');

    });

    $('.overlay').click(function () {
        console.log('hello');
        $('.header-wrapper').toggleClass('push');
        $('.side-nav-inner').toggleClass('open');
        $('.overlay').toggleClass('overlay-visible');

    });

    $('.site-nav-left').hover(function () {
        // console.log('hello');
        $('.arrow-left').toggleClass('move-left');
    });

    $('.site-nav-right').hover(function () {
        $('.arrow-right').toggleClass('move-right');
    });

    
    let     clickDelay = 500,
            clickDelayTimer = null;
    
    $('.hamburger').on('click', function () {
        if (clickDelayTimer === null) {
    
            const $burger = $(this);
            $burger.toggleClass('active');
            
    
            if (!$burger.hasClass('active')) {
                $burger.addClass('closing');
            }
    
            clickDelayTimer = setTimeout(function () {
                $burger.removeClass('closing');
                clearTimeout(clickDelayTimer);
                clickDelayTimer = null;
            }, clickDelay);
        }
    });
});