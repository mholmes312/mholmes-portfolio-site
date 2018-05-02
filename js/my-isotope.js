      var $grid = $('.portfolio-items').isotope({
        itemSelector: '.item',
        layoutMode: 'fitRows',
        getSortData: {
          name: function (element) {
            return $(element).text();
          }
        }
      });
      $('.categories li').on("click", function () {
        var value = $(this).attr('data-name');
          $grid.isotope({
            filter: value
          });
        $('.categories li').removeClass('active');
        $(this).addClass('active');
      });
     

