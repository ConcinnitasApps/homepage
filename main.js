var header = document.getElementById('header');
var navButtons = document.getElementsByClassName('nav-button');
var scrollChange = 0;
var slideIndex = 1;

document.getElementsByClassName('prev')[0].addEventListener('click', function(){
  showSlides(slideIndex += 1);
});
document.getElementsByClassName('prev')[0].addEventListener('click', function(){
  showSlides(slideIndex -= 1);
});
window.onscroll = function() {
  if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
    if (scrollChange == 0) {
      scrollChange = 1;
      header.style.backgroundColor = "#fff";
      header.childNodes[1].childNodes[1].childNodes[5].style.display = "none";
      header.childNodes[1].childNodes[1].childNodes[7].style.display = "inline-block";
      for (var i = 0, length = navButtons.length; i < length; i++) {
        navButtons[i].style.color = "#546e82";
      }
    }
  } else {
    if (scrollChange == 1) {
      scrollChange = 0;
      header.style.backgroundColor = "transparent"
      header.childNodes[1].childNodes[1].childNodes[5].style.display = "inline-block";
      header.childNodes[1].childNodes[1].childNodes[7].style.display = "none";
      for (var i = 0, length = navButtons.length; i < length; i++) {
        navButtons[i].style.color = "#fff";
      }
    }
  }
};

header.childNodes[1].childNodes[1].childNodes[7].style.display = "none";

showSlides(slideIndex);
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}
