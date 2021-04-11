//Function for Audio in Red Section
var audio = document.getElementById("playMusic");

function playAudio(){
  if (audio.paused){
    audio.play();
  } else {
    audio.pause();
  }
  
}

//Function for Hero section
var slideIndex = 1;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dot");
  //Remove all the slides first
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} 
  if (slideIndex < 1) {slideIndex = slides.length}   
  //Remove the 'active' from class name from dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  //Display the slide with current slideIndex
  slides[slideIndex-1].style.display = "block";  
  //Add the "active" class into the current slide index of dot 
  dots[slideIndex-1].className += " active";

}

// Function for press the doc to change slide
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function plusSlides(n){
  showSlides(slideIndex += n);
}

// Function to change slide from pressing dot 
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dot");
  //Change the slide index in the range of index
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  //Remove all the slides in element first 
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  //Change the currently dot location
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
 

}
