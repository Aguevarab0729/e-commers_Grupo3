let carruselIndex = 1;

showCarrucel(carruselIndex);

// Next/previous controls
function pluscarrusel(n) {
  showCarrucel(carruselIndex += n);
}

// Thumbnail image controls
function currentImg(n) {
  showCarrucel(carruselIndex = n);
}

function showCarrucel(n) {
  let i;
  let carrusel = document.getElementsByClassName("carrusel");
  let botones = document.getElementsByClassName("boton");
  if (n > carrusel.length) {
    carruselIndex = 1
    }
  if (n < 1) {
    carruselIndex = carrusel.length
    }

  for (i = 0; i < carrusel.length; i++) {
    carrusel[i].style.display = "none";
  }
  for (i = 0; i < botones.length; i++) {
    botones[i].className = botones[i].className.replace(" active", "");
  }

  carrusel[carruselIndex-1].style.display = "block";
  
  botones[carruselIndex-1].className += " active";
}