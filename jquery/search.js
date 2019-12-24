$(document).ready(function() {
     
            $(".search").click(function() {
               $(".search-box").toggle();
               $("input[type='text']").focus();
             });

            $('.slider').slick({  

              speed: 500,
              slidesToShow: 1,
              slidesToScroll: 1
            });

              $('.browdiv').slick({
             
              slidesToShow: 4,
              slidesToScroll: 1
            });
 
        });