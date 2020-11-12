// Followed: https://www.youtube.com/watch?v=T7PnWnTgusc&t=1089s&ab_channel=JulioCodes
$(document).ready(function () {
    $('.menu-toggler').on('click', function (){
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });

    $('.top-nav .nav-link').on('click', function (){
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });

    $('nav a[href*="#"]').on('click', function (){
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        },900);
    });

    $('#up').on('click', function (){
        $('html, body').animate({
            scrollTop: 0
        },900); 
    });

    AOS.init({
        easing: 'ease',
        duration: 1500,
        once: true
    });
});