var slideIndex = 1;
	showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
	
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  
	if (n > slides.length) {slideIndex = 1}
	
	if (n < 1) {slideIndex = slides.length}
	
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

// Récupère l'id du modal
var modal = document.getElementById("myModal");

// L'image séléctionné est inséré dans le "modal" dans "<img>"
var img = document.querySelector("#myImg");
var modalImg = document.getElementById("img");
var captionText = document.getElementById("capture");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}

// Récupére l'élément qui permet de fermer la fenêtre
var span = document.getElementsByClassName("close")[0];

// La fenêtre se ferme quand on clique sur la croix
span.onclick = function() {
  modal.style.display = "none";
}


var modal = document.getElementById("myModal");

/******************************
 
 * Agrandissement de l'image 2 
 
******************************/


var img = document.querySelector("#myImg2");
var modalImg = document.getElementById("img");
var captionText = document.getElementById("capture");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}


/******************************
 
 * Agrandissement de l'image 3 
 
******************************/


var img = document.querySelector("#myImg3");
var modalImg = document.getElementById("img");
var captionText = document.getElementById("capture");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}


/******************************
 
 * Agrandissement de l'image 4 
 
******************************/

var img = document.querySelector("#myImg4");
var modalImg = document.getElementById("img");
var captionText = document.getElementById("capture");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}

/******************************
 
 * Agrandissement de l'image 5 
 
******************************/

var img = document.querySelector("#myImg5");
var modalImg = document.getElementById("img");
var captionText = document.getElementById("capture");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}


var span = document.getElementsByClassName("close")[0];


span.onclick = function() {
  modal.style.display = "none";
}


/******************************
 
 * Agrandissement de l'image 6 
 
******************************/



var img = document.querySelector("#myImg6");
var modalImg = document.getElementById("img");
var captionText = document.getElementById("capture");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
} 
