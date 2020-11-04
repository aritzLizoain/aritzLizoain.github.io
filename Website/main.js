// Followed: https://www.youtube.com/watch?v=T7PnWnTgusc&t=1089s&ab_channel=JulioCodes
$(document).ready(function () {
    $('.menu-toggler').on('click', function (){
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });
});