$(document).ready(function(){
  $('.single-item').slick({
    
  });
});


(function($){
  $(function() {
    $('.menu__icon').on('click', function() {
      $(this).closest('.menu').toggleClass('menu_state_open');
    });
  });
})(jQuery);