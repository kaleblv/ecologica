$(document).ready(function(){

  // map switch

  setTimeout(function(){
    $('#gmapCarmen').hide();
  }, 1500);



  $('.map-switch__item').on('click',function(){
    $('.map-switch__item').removeClass('active');
    let city = $(this).html()
    console.log(city)
    if (city === "Villahermosa") {
      $('#gmapCarmen').hide();
      $('#gmapVilla').show();
      $(this).addClass('active');
    }
    if (city === "Ciudad del Carmen") {
      $('#gmapVilla').hide();
      $('#gmapCarmen').show();
      $(this).addClass('active');
    }


  })

});
