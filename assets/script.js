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

function taskRender(){
  for (let i = 9; i <= 17; i++) {
      $(`#${i}`).val(localStorage.getItem(`${i}`))
  }
} 
taskRender();

// $("#currentDay").text(moment().format("dddd, MMMM Do"));
$(document).ready(function(){
  // retrieve saved data from local storage and display in corresponding time block
  $(".hour-block").each(function () {
    var time = $(this).attr('id');
    var savedValue = localStorage.getItem(time);
    $(this).find("textEvent").val(savedValue);
  });

  $("saveBtn").on("click", function(){
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
  
      // Select all save buttons
const saveBtns = document.querySelectorAll('.saveBtn');

// Add click event listener to each save button
saveBtns.forEach(button => {
  button.addEventListener('click', function() {
    // Get the input element for the event
    const eventInput = button.previousElementSibling;
    
    // Get the event ID from the parent container
    const eventId = this.parentElement.id;
    
    // Store the event into local storage
    localStorage.setItem(eventId, eventInput.value);
  });
});

// Select all input fields
const eventInputs = document.querySelectorAll('.textEvent');

// Loop through all input fields
eventInputs.forEach(input => {
  // Get the event ID from the parent container
  const eventId = input.parentElement.id;
  
  // Get the stored event from local storage
  const storedEvent = localStorage.getItem(eventId);
  
  // If a stored event exists, display it in the input field
  if (storedEvent) {
    input.value = storedEvent;
  }
});
