function mythumb(imgs) {
    var exImg = document.getElementById("expandImg");
  
  exImg.src = imgs.src;
  exImg.parentElement.style.display = "block"
  }