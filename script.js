// $(document).ready(function() {
 
//     $("#owl-demo").owlCarousel({
   
//         autoPlay: 3000, //Set AutoPlay to 3 seconds
   
//         items : 4,
//         itemsDesktop : [1199,3],
//         itemsDesktopSmall : [979,3]
   
//     });
   
//   });



// $( function() {
//     $( "#datepicker" ).datepicker();
//   } );

$(document).ready(function() {
    $("#datepicker").datepicker();
    $('.fa-calendar-alt').click(function() {
      $("#datepicker").focus();
    });
  });




$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})