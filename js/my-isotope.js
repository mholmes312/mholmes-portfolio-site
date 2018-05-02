$(document).ready(function(){
  var $grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
    layoutMode: 'fitRows'
  });

  $('.categories li').on("click", function () {
    var value = $(this).attr('data-name');
      $grid.isotope({
        filter: value
      });
    $('.categories li').removeClass('active');
    $(this).addClass('active');
  });
});
