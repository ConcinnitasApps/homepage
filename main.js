var clearNav = document.getElementsByClassName('transparent-nav')[0];
var whiteNav = document.getElementsByClassName('white-nav')[0];
var navBack = document.getElementsByClassName('white-header-background')[0];
var scrollChange = 0;
var slideIndex = 1;

document.getElementsByClassName('prev')[0].addEventListener('click', function(){
  showSlides(slideIndex += 1);
});
document.getElementsByClassName('prev')[0].addEventListener('click', function(){
  showSlides(slideIndex -= 1);
});
window.onscroll = function() {
  if (document.body.scrollTop == 0) {
    navBack.style.opacity = Math.floor( document.documentElement.scrollTop ) / 30;
  } else {
    navBack.style.opacity = Math.floor( document.body.scrollTop ) / 30;
  }

  if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
    if (scrollChange == 0) {
      scrollChange = 1;
      clearNav.style.display = "none";
      whiteNav.style.display = "block";
    }
  } else {
    if (scrollChange == 1) {
      scrollChange = 0;
      clearNav.style.display = "block";
      whiteNav.style.display = "none";
    }
  }
};

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
