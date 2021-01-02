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