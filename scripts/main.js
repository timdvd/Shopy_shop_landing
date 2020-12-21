$('.products-slider').slick({
	dots: true,
  arrows: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },],
	customPaging: function(slider, i) {
      // this example would render "tabs" with titles
      return '<span class="dot"></span>';
    },
});

$(document).ready(function(){
  $('.sidebarBtn').click(function(){
    $('.sidebar').toggleClass('active');
    $('.sidebarBtn').toggleClass('toggle');
  });
});

$('.pretty').click(function(){
  $(this).toggleClass('pretty-active');
});

$('.collection-slider').slick({
  dots: true,
  vertical: true,
  slidesToShow: 1,
  arrows: false,
  slidesToScroll: 1,
  verticalSwiping: true,
});

