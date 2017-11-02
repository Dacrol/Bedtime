// console.log("test");
$(document).ready(function () {
  if($('.slider').length){
    $('.slider').slick({
      centerMode: false,
      slidesToShow: 1,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 5000,
    });   
  };
  $(".hamburgerToggle").click(function () {
    $(".smallMenu").toggle();
  });
  $(window).resize(function () {
    if ($(document).width() > 720 && $(".smallMenu").is(":visible")) {
      $(".smallMenu").hide();
    };
  });
});