
$("#currentDay").text(moment().format("dddd, MMMM Do"));

$(document).ready(function(){

    $("saveBtn").on("click", function(){
        
   var value = $(this).siblings("textEvent").val();
    var time = $(this).parent().attr('id');

    // document in local storage//
    localStorage.setItem(time, value);

  
    $(".bulletin").addClass("show");

    
    setTimeout(function () {
      $(".bulletin").removeClass("show");
    }, 5000);
       
      });
    });

    function timeUpdater() {
        
        var currentHour = moment().hours();
    
       
        $(".time-block").each(function () {
          var blockHour = parseInt($(this).attr('id').split('-')[1]);
    
          
          if (blockHour < currentHour) {
            $(this).addClass('past');
          } else if (blockHour === currentHour) {
            $(this).removeClass('past');
            $(this).addClass('present');
          } else {
            $(this).removeClass('past');
            $(this).removeClass('present');
            $(this).addClass('future');
          }
        });
      }
    
      timeUpdater();

