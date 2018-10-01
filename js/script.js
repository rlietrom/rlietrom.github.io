
$(document).ready(function() {

  // Scroll function courtesy of Scott Dowding; http://stackoverflow.com/questions/487073/check-if-element-is-visible-after-scrolling
  // Check if element is scrolled into view
  function isScrolledIntoView(elem) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();

  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();

  return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}
// If element is scrolled into view, fade it in
$(window).scroll(function() {
  $('.scroll-animations .animated').each(function() {
    if (isScrolledIntoView(this) === true) {
      $(this).addClass('fadeInDown');
    }
  });
});

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

//change css color variables on page load
//{accent: "background"}
var colorPairs = {
  blue: "white"
  // black: "yellow",
  // lavenderBlush: "darkSlateGrey",
  // ghostWhite: "darkSlateBlue",
  // midnightBlue: "mistyRose"
}

var backgroundPicker = function() {
  var keys = Object.keys(colorPairs)
  var pickedKey = keys.length * Math.random() << 0
  var background = colorPairs [keys [pickedKey] ]
  var accent = keys[pickedKey]
  return [background, accent];
}

var pickedPair = backgroundPicker()

document.documentElement.style.setProperty('--background', pickedPair[0]);
document.documentElement.style.setProperty('--accent', pickedPair[1]);

//Set both classes to the accent color
var classOneCollection = document.getElementsByClassName("cls-1");
for(var i = 0; i < classOneCollection.length; i++) {
  classOneCollection[i].style.fill = pickedPair[1];
}

var classTwoCollection = document.getElementsByClassName("cls-2");
for(var i = 0; i < classTwoCollection.length; i++) {
  classTwoCollection[i].style.fill = pickedPair[1];
}

//on hover, show RLIETROM
var title = document.getElementById("Layer_1");
title.onmouseover = function() {
  console.log('here');
  for(var i = 0; i < classTwoCollection.length; i++) {
    classTwoCollection[i].style.fill = "orangeRed";
  }
}
title.onmouseleave = function() {
  for(var i = 0; i < classTwoCollection.length; i++) {
    classTwoCollection[i].style.fill = pickedPair[1];
  }
}
