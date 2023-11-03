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

$(document).ready(function() {
    $("#search-input").hide(); // Ẩn input ban đầu
    $("#search-icon").click(function(e) {
      e.stopPropagation();
      if ($("#search-input").is(":hidden")) {
        $("#search-input").css("width", "150px");
        $("#search-input").css("margin-right", "5px");
        $("#search-input").show(); // Hiển thị input khi click
        $("#search-input").css("transform", "translateX(0)"); // Hiệu ứng trượt
        $("#search-input").focus();
        $("#search-icon").removeClass("fa-magnifying-glass");
        $("#search-icon").addClass("fa-times close");
      } else {
        $("#search-input").css("width", "0");
        $("#search-input").css("margin-right", "0");
        $("#search-input").css("transform", "translateX(100%)"); // Hiệu ứng trượt
        $("#search-input").hide(); // Ẩn input khi click lại
        $("#search-icon").removeClass("fa-times close");
        $("#search-icon").addClass("fa-magnifying-glass");
      }
    });
  
    $(document).click(function(event) {
      if (!$(event.target).closest(".search-button").length) {
        if ($("#search-input").width() > 0) {
          $("#search-input").css("width", "0");
          $("#search-input").css("margin-right", "0");
          $("#search-input").css("transform", "translateX(100%)"); // Hiệu ứng trượt
          $("#search-input").hide(); // Ẩn input khi click ra ngoài
          $("#search-icon").removeClass("fa-times close");
          $("#search-icon").addClass("fa-magnifying-glass");
        }
      }
    });
  
    $(".search-button").click(function(event) {
      event.stopPropagation();
    });
  });
  
  
  
  
  
  
  
  
