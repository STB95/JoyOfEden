function toggleMenu() {
  const menu = document.getElementById('dropdownMenu');
  menu.classList.toggle('show'); // Toggle "toon" klasse menu
}


/* slideshow (PLANTENGALERIJ) */ 
let slideIndex = 0;

function showSlides(n) {
  const slides = document.querySelectorAll('.slide');
  if (n >= slides.length) slideIndex = 0;
  if (n < 0) slideIndex = slides.length - 1;
  
  slides.forEach(slide => slide.style.display = 'none');
  slides[slideIndex].style.display = 'block';
}

function changeSlide(n) {
  showSlides(slideIndex += n);
}

//start slideshow
showSlides(slideIndex);

/*CONTACT pagina*/
function showSuccessMessage(event) {
  event.preventDefault(); // Stop van submissie
  document.querySelector('.container').classList.add('hidden'); // Verbergen
  document.getElementById('successMessage').classList.remove('hidden'); // Tonen als verstuurd 
}

