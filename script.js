// researched how to add moment.js to JS and attached it to the id = currentDay
$("#currentDay").text(moment().format("dddd, MMMM Do"))

// created variables with arrays to store the hour in military time and label the time block
var hour = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
var displayHour= ["8 AM","9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"]

// created a loop to go through the arrays and create the HTML Divs to hold data
for (i=0; i<hour.length; i++){
    
  // create variable to store current time
    var currentTime = displayHour[i]
    
    // Will append 10 rows each with appropriate classes from CSS and text area --had to research this for template literals
    $(".container").append(`<div id= "hour-${hour[i]}" class= "row time-block">
        <div class= "col-md-1 hour">${currentTime}</div>
        <textarea class= "col-md-10 description" id= "reminder-area" />
        <button class= "button saveBtn col-md-1"><i class="far fa-save"></i></button>
      </div>
    `)

    // Comparing Moment's hour to our iteration of hours
    if(moment().format("H") == hour[i]){
    $("#hour-"+ hour[i]).addClass("present")
    } else if(moment().format("H")> hour[i]){
    $("#hour-"+ hour[i]).addClass("past")
    } else if(moment().format("H")< hour[i]){
    $("#hour-"+ hour[i]).addClass("future")
}}

// Sets local storage by grabbing siblings and parent of save button values
$(".saveBtn").on("click", function(){
    var value= $(this).siblings(".description").val()
    var time= $(this).parent().attr("id")
    localStorage.setItem(time, value)
    
})
console.log(this);
// Getting from local storage not sure how to loop this...
$("#hour-8 .description").val(localStorage.getItem("hour-8"))
$("#hour-9 .description").val(localStorage.getItem("hour-9"))
$("#hour-10 .description").val(localStorage.getItem("hour-10"))
$("#hour-11 .description").val(localStorage.getItem("hour-11"))
$("#hour-12 .description").val(localStorage.getItem("hour-12"))
$("#hour-13 .description").val(localStorage.getItem("hour-13"))
$("#hour-14 .description").val(localStorage.getItem("hour-14"))
$("#hour-15 .description").val(localStorage.getItem("hour-15"))
$("#hour-16 .description").val(localStorage.getItem("hour-16"))
$("#hour-17 .description").val(localStorage.getItem("hour-17"))
