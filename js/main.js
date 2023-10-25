$('.carousel-1').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    items:1,
    autoplay:true,
    autoplayTimeout:5000,
})

$('.carousel-5').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:6000,
    responsive:{
        0:{
            items:1
        },
        412:{
            items:2
        },
        768:{
            items:3
        },
        1024:{
            items:4
        }
    }
})

$('.carousel-2').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:6000,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        1000:{
            items:2
        }
    }
})

//Phần back-top
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop()) {
            $('#back-top').css('opacity', '1'); // Hiển thị nút
        } else {
            $('#back-top').css('opacity', '0'); // Ẩn nút
        }
    });

    $('#back-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 300);
    });
});




