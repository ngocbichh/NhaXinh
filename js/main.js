// Slideshow
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("myslide");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1
  }    

  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}

// Navbar
window.onscroll = function() {
  mySticky()
};

var nav = document.getElementById("nav");
var sticky = nav.offsetTop;

function mySticky() {
  if (window.pageYOffset > sticky) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
}

// San pham noi bat

var slideID = 1;
showPr(slideID);

function plushPr(n) {
  showPr(slideID += n);
}

function showPr(n) {
  var i;
  var slides = document.getElementsByClassName("product__detail");
  if (n > slides.length) {slideID = 1}    
  if (n < 1) {slideID = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideID-1].style.display = "flex";  
}

// Tranh treo tường
var slideID = 1;
showTTT(slideID);

function plushTTT(n) {
  showTTT(slideID += n);
}

function showTTT(n) {
  var i;
  var slides = document.getElementsByClassName("paint-wall__item");
  if (n > slides.length) {slideID = 1}    
  if (n < 1) {slideID = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideID-1].style.display = "flex";  
}

// chuyển giao diện

function showTH(){
  window.location.assign("index.html")
}

function showListTH(){
  window.location.assign("Trangchu.html")
}
