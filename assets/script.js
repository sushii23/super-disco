// var now =  moment().format("dddd, MMMM Do YYYY, h:mm a");
// $("#topDate").text(now);

// $(".saveBtn").on("click", function(){
//     var task = $(this).parents("div").siblings(".textEvent").val()
//     var time = $(this).parents("div").siblings(".textEvent").attr("id")
//     localStorage.setItem(time, task)
// })

// // $("#9").val(localStorage.getItem("9"))
// // $("#10").val(localStorage.getItem("10"))
// // $("#11").val(localStorage.getItem("11"))

// function taskRender(){
//     for (let i = 9; i <= 17; i++) {
//         $(`#${i}`).val(localStorage.getItem(`${i}`))
//     }
// }

// taskRender()

// function timeUpdate(){
//     $("input").each(function (){
//         var blockHour = parseInt($(this).attr("id"));
//         var currentHour = parseInt(moment().hour());
//         console.log(typeof blockHour)
//         if(blockHour < currentHour){
//             $(this).addClass("past")
//         } else if (blockHour === currentHour){
//             $(this).removeClass("past")
//             $(this).addClass("present")
//         } else {
//             $(this).removeClass("present")
//             $(this).removeClass("past")
//             $(this).addClass("future")
//         }

//     })
// }

// timeUpdate();








var now =  moment().format("dddd, MMMM Do YYYY, h:mm a");
$("#topDate").text(now);

// $("#currentDay").text(moment().format("dddd, MMMM Do"));
$(document).ready(function(){
  // retrieve saved data from local storage and display in corresponding time block
  $(".hour-block").each(function () {
    var time = $(this).attr('id');
    var savedValue = localStorage.getItem(time);
    $(this).find("textEvent").val(savedValue);
  });

  $(".saveBtn").on("click", function(){
    var value = $(this).siblings("textEvent").val();
    var time = $(this).parent().attr('id');

    // save to local storage
    localStorage.setItem(time, value);

    $(".bulletin").addClass("show");
    setTimeout(function () {
      $(".bulletin").removeClass("show");
    }, 5000);
  });
});

    function timeUpdate() {
        
      
    
       
        $(".hour-block").each(function () {
          var blockHour = parseInt($(this).attr('id').split('-')[1]);
          var currentHour = parseInt(moment().hours());
          
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
    
      timeUpdate();

