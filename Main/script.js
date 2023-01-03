
$("#currentDay").text(moment().format("dddd, MMMM Do"));

$(document).ready(function(){

    $("saveBtn").on("click", function(){
        
   var value = $(this).siblings("textEvent").val();
    var time = $(this).parent().attr('id');

    // document in local storage//
    localStorage.setItem(time, value);

  
    $('.notification').addClass('show');

    
    setTimeout(function () {
      $('.notification').removeClass('show');
    }, 5000);
       
      });



});