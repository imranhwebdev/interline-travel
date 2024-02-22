(function() {
    'use strict';
    jQuery(document).ready(function() {

        $.browserDetection(true);

        $('.active-slider').owlCarousel({
            nav: true,
            navText: ['<i class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i>'],
            dot: true,
            items: 1,
            animateOut: 'fadeOut',
            loop: true,
            margin: 10,
            responsive: {
                0: {
                    items: 1,
                },
                480: {
                    items: 1,
                },
                768: {
                    items: 1,
                }
            }

        });


    });
})();



jQuery(function($) {
    "use strict";
    $.browserDetection(true);

    $('.active-slider').owlCarousel({
        nav: true,
        navText: ['<i class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i>'],
        dot: true,
        items: 1,
        animateOut: 'fadeOut',
        loop: true,
        margin: 10,
        responsive: {
            0: {
                items: 1,
            },
            480: {
                items: 1,
            },
            768: {
                items: 1,
            }
        }

    });

    $('.main-menu nav, nav.main-menu').meanmenu({
        meanMenuContainer: '.mobile-thum',
        meanScreenWidth: '1199',
        meanRevealPosition: 'right'
    });

  

    // Initialize Select2 on your select element
    $('#countrySelect').select2();

    // Initialize Select2 on your select element
    $('#countrySelect').select2();

    $('.js-example-basic-single').select2();
 

   
});
// Fetch the list of countries from an API
$.ajax({
    url: 'https://restcountries.com/v3.1/all',
    dataType: 'json',
    success: function(response) {
        // Process the response and extract country data
        var countries = response.map(function(country) {
            return { id: country.cca2, text: country.name.common };
        });

        // Add options to the select element
        countries.forEach(function(country) {
            $('#countrySelect').append('<option value="' + country.id + '">' + country.text + '</option>');
        });
    },
    error: function(xhr, status, error) {
        console.error('Error fetching countries:', error);
    }
});


// Get the header
var header = document.getElementById("header");

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyHeader() {
  if (window.pageYOffset > 180) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// When the user scrolls the page, execute stickyHeader
window.onscroll = function() {
  stickyHeader();
};




$(function(){
    $('#datepicker').datepicker();
  });


// Swiper Slider 
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });