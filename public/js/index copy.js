//slider
 let slide= document.getElementsByClassName("slide"),
  prev = document.getElementById("prev"),
  next = document.getElementById("next"),
  current = 0;


  // Clear all images
function reset() {
  for (let i = 0; i < slide.length; i++) {
  	slide[i].style.display = "none";
// 	slide[i].classList.remove('modal-active')
  }
}
//afficher the first img
function startSlide() {
  reset();
  slide[0].style.display = "block";
  
}
//afficher la prochaine img
function slideRight() {
  reset();
  slide[current + 1].style.display = "block";
  current++;
}

//afficher l'img precedente
function slideLeft() {
  reset();
  slide[current - 1].style.display = "block";
  current--;
}
//boutoon next

next.addEventListener("click", function() {
  if (current === slide.length - 1) {
    current = -1;
  }
  slideRight();
});

//boutton precedent
prev.addEventListener("click", function() {
  if (current === 0) {
    current = slide.length;
  }
  slideLeft();
});

startSlide();

/*let slider = document.getElementsByClassName('header')[0];
setInterval(function(){

if ( slider.style.backgroundImage == '../public/img/1.jpg')	slider.style.backgroundImage = "url(../public/img/2.jpg)" else
if ( slider.style.backgroundImage == '../public/img/2.jpg')	slider.style.backgroundImage = "url(../public/img/3.jpg)" else
if ( slider.style.backgroundImage == '../public/img/3jpg')	slider.style.backgroundImage = "url(../public/img/4.jpg)"else
if ( slider.style.backgroundImage == '../public/img/4.jpg')	slider.style.backgroundImage = "url(../public/img/1.jpg)"

},4000);*/
//le setinterval a 2parametres, la fonction ou le resultat a afficher et le temp 
setInterval(function() {
  if (current === slide.length - 1) {
    current = -1;
  }
  slideRight();

},4000)