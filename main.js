// Followed: https://www.youtube.com/watch?v=T7PnWnTgusc&t=1089s&ab_channel=JulioCodes

$(document).ready(function () {

    //Navigation
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

    //Up button
    $('#up').on('click', function (){
        $('html, body').animate({
            scrollTop: 0
        },900); 
    });

    //Wrapper (https://www.youtube.com/watch?v=y0Ic8QcvyK8&ab_channel=Codegrid)
    AOS.init({
        easing: 'ease',
        duration: 1500,
        once: true
    });

    //Contact form (https://www.youtube.com/watch?v=vc9rgFHr098&list=WL&index=2&ab_channel=WEBCIFAR)
    window.addEventListener("DOMContentLoaded", function() {

        // get the form elements defined in your form HTML above
        
        var form = document.getElementById("myForm");
        // var button = document.getElementById("my-form-button");
        var status = document.getElementById("status");
    
        // Success and Error functions for after the form is submitted
        
        function success() {
          form.reset();
          status.classList.add('success');
          status.innerHTML = "Your message was successfully sent.";
        }
    
        function error() {
          status.classList.add('error');
          status.innerHTML = "Service unavailable. The server is temporarily unable to service your request.";
        }
    
        // handle the form submission event
    
        form.addEventListener("submit", function(ev) {
          ev.preventDefault();
          var data = new FormData(form);
          ajax(form.method, form.action, data, success, error);
        });
      });
      
      // helper function for sending an AJAX request
    
      function ajax(method, url, data, success, error) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = function() {
          if (xhr.readyState !== XMLHttpRequest.DONE) return;
          if (xhr.status === 200) {
            success(xhr.response, xhr.responseType);
          } else {
            error(xhr.status, xhr.response, xhr.responseType);
          }
        };
        xhr.send(data);
      }
});