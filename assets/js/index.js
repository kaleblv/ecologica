$(document).ready(function(){

  // map switch
  setTimeout(function(){
    $('#mapCarmen').hide();
  }, 3000);

  $('.map-switch__item').on('click',function(){
    $('.map-switch__item').removeClass('active');
    let city = $(this).html()
    if (city === "Villahermosa") {
      $('#mapCarmen').hide();
      $('#mapVilla').show();
      $(this).addClass('active');
    }
    if (city === "Ciudad del Carmen") {
      $('#mapVilla').hide();
      $('#mapCarmen').show();
      $(this).addClass('active');
    }


  });


  // contact form validation

  $("#contact-us").validate();



});
