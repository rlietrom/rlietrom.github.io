
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

var booklink = document.getElementById("booklink");
var previewbook = document.getElementById("previewbook")
booklink.onmouseover = function() {
  previewbook.style.opacity = "0";
}
booklink.onmouseleave = function() {
  previewbook.style.opacity = "1";
}

var portfoliolink = document.getElementById("portfoliolink");
var previewportfolio = document.getElementById("previewportfolio")
portfoliolink.onmouseover = function() {
  previewportfolio.style.opacity = "1";
}
portfoliolink.onmouseleave = function() {
  previewportfolio.style.opacity = "0";
}

var githublink = document.getElementById("githublink");
var previewgithub = document.getElementById("previewgithub")
githublink.onmouseover = function() {
  previewgithub.style.opacity = "1";
}
githublink.onmouseleave = function() {
  previewgithub.style.opacity = "0";
}

var pianolink = document.getElementById("pianolink");
var previewpiano = document.getElementById("previewpiano")
pianolink.onmouseover = function() {
  previewpiano.style.opacity = "1";
}
pianolink.onmouseleave = function() {
  previewpiano.style.opacity = "0";
}


var blackrocklink = document.getElementById("blackrocklink");
var previewblackrock = document.getElementById("previewblackrock")
blackrocklink.onmouseover = function() {
  previewblackrock.style.opacity = "1";
}
blackrocklink.onmouseleave = function() {
  previewblackrock.style.opacity = "0";
}

var shleeplink = document.getElementById("shleeplink");
var previewshleep = document.getElementById("previewshleep")
shleeplink.onmouseover = function() {
  previewshleep.style.opacity = "1";
}
shleeplink.onmouseleave = function() {
  previewshleep.style.opacity = "0";
}

var cvlink = document.getElementById("cvlink");
var previewcv = document.getElementById("previewcv")
cvlink.onmouseover = function() {
  previewcv.style.opacity = "1";
}
cvlink.onmouseleave = function() {
  previewcv.style.opacity = "0";
}

var linkedinlink = document.getElementById("linkedinlink");
var previewlinkedin = document.getElementById("previewlinkedin")
linkedinlink.onmouseover = function() {
  previewlinkedin.style.opacity = "1";
}
linkedinlink.onmouseleave = function() {
  previewlinkedin.style.opacity = "0";
}

var mediumlink = document.getElementById("mediumlink");
var previewmedium = document.getElementById("previewmedium")
mediumlink.onmouseover = function() {
  previewmedium.style.opacity = "1";
}
mediumlink.onmouseleave = function() {
  previewmedium.style.opacity = "0";
}

var photoslink = document.getElementById("photoslink");
var previewphotos = document.getElementById("previewphotos")
photoslink.onmouseover = function() {
  previewphotos.style.opacity = "1";
}
photoslink.onmouseleave = function() {
  previewphotos.style.opacity = "0";
}
