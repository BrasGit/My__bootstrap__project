/*$(document).ready(function () {
   $('.button[filter="moc"]').click(function () {
      $('filter > div').hide(300);
   })
});*/

/*$(document).ready(function () {
   $(".button[filter]").click(function () {
      if ($(this).attr("filter") && $(this).attr("filter") !== "all") {
         $(".filter > div*[filter !='" + $(this).attr('filter') + "']").fadeOut(350);
         $(".filter > div*[filter ='" + $(this).attr('filter') + "']").fadeIn(350);
      } else {
         $(".filter > div").fadeIn(350);
      }
      $(".button[filter]").removeClass('focused');
      $(this).addClass('focused');
   });
});*/


$('.multiple-items').slick({
   infinite: true,
   slidesToShow: 3,
   slidesToScroll: 3
});