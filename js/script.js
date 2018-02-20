
$(document).ready(function() {

//doggies animation
  $(".self").hover(function() {
      $(this).animate({
        height: "0%",
        borderSpacing: -100
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

//Title hover
  $(".title").mouseenter(function() {
    $(".insideTitle").hide()
    $(".hoverTitle").show()
  }).mouseleave(function() {
    $(".insideTitle").show()
    $(".hoverTitle").hide()
  })

//sort design page view
// $(".designbox").load(function() {
//   $(".idk").addClass("underline");
// });

  $(".UIUX").click(function() {
    $(".UIUXcontainer").show()
    $(".courseworkcontainer").hide()
    $(".commworkcontainer").hide()
    $(".locustcontainer").hide()
    $(".idk").addClass("underline")
    $('.idk2').removeClass("underline")
    $('.idk3').removeClass("underline")
    $('.idk4').removeClass("underline")
  })

  $(".coursework").click(function() {
    $(".courseworkcontainer").show()
    $(".commworkcontainer").hide()
    $(".UIUXcontainer").hide()
    $(".locustcontainer").hide()
    $(".idk2").addClass("underline")
    $('.idk').removeClass("underline")
    $('.idk3').removeClass("underline")
    $('.idk4').removeClass("underline")
  })

  $(".commwork").click(function() {
    $(".commworkcontainer").show()
    $(".courseworkcontainer").hide()
    $(".UIUXcontainer").hide()
    $(".locustcontainer").hide()
    $(".idk3").addClass("underline")
    $('.idk2').removeClass("underline")
    $('.idk').removeClass("underline")
    $('.idk4').removeClass("underline")
  })

  $(".locust").click(function() {
    $(".locustcontainer").show()
    $(".UIUXcontainer").hide()
    $(".courseworkcontainer").hide()
    $(".commworkcontainer").hide()
    $(".idk4").addClass("underline")
    $('.idk').removeClass("underline")
    $('.idk2').removeClass("underline")
    $('.idk3').removeClass("underline")
  })

});


//copy email to clipboard
function myFunction() {
var copyText = document.getElementById("myInput");
copyText.select();
document.execCommand("Copy");
alert("email address copied to clipboard: " + copyText.value);
}
