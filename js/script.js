
$(document).ready(function() {

//doggies animation
  $(".dog").hover(function() {
      $(this).animate({
        height: "0%",
        borderSpacing: -300
      },
      {step: function(now,fx) {
      $(this).css('transform','rotate('+now+'deg)');
      },
      duration:'medium'
      },'linear');
  })

  $(".realWinston").hover(function() {
    $(".realWinston1").toggle()
  })

//sort design page view
  $(".UIUX").click(function() {
    $(".UIUXcontainer").show()
    $(".courseworkcontainer").hide()
    $(".commworkcontainer").hide()
    $(".locustcontainer").hide()
    $(".idk").toggleClass("underline")
  })

  $(".coursework").click(function() {
    $(".courseworkcontainer").show()
    $(".commworkcontainer").hide()
    $(".UIUXcontainer").hide()
    $(".locustcontainer").hide()
    $(".idk2").toggleClass("underline")
  })

  $(".commwork").click(function() {
    $(".commworkcontainer").show()
    $(".courseworkcontainer").hide()
    $(".UIUXcontainer").hide()
    $(".locustcontainer").hide()
  })

  $(".locust").click(function() {
    $(".locustcontainer").show()
    $(".UIUXcontainer").hide()
    $(".courseworkcontainer").hide()
    $(".commworkcontainer").hide()
  })

});


//copy email to clipboard
function myFunction() {
var copyText = document.getElementById("myInput");
copyText.select();
document.execCommand("Copy");
alert("email address copied to clipboard: " + copyText.value);
}
