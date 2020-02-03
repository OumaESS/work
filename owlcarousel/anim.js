/*$(function(){
    $("#t").owlCarousel(
        item: 3,
        loop: true,
        autoplay: true
    )
  });*/


  $('#t').owlCarousel({
    loop:true,
    item : 3,
    nav:true,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:1
        }
    }
})