const inputs = document.querySelectorAll(".input-field");
const toggle_btn = document.querySelectorAll(".toggle");
const main = document.querySelector("main");
const bullets = document.querySelectorAll(".bullets span");
const images = document.querySelectorAll(".image");

inputs.forEach((inp) => {
  inp.addEventListener("focus", () => {
    inp.classList.add("active");
  });
  inp.addEventListener("blur", () => {
    if (inp.value != "") return;
    inp.classList.remove("active");
  });
});

toggle_btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    main.classList.toggle("sign-up-mode");
  });
});

function moveSlider() {
  let index = this.dataset.value;

  let currentImage = document.querySelector(`.img-${index}`);
  images.forEach((img) => img.classList.remove("show"));
  currentImage.classList.add("show");

  const textSlider = document.querySelector(".text-group");
  textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;

  bullets.forEach((bull) => bull.classList.remove("active"));
  this.classList.add("active");
}

bullets.forEach((bullet) => {
  bullet.addEventListener("click", moveSlider);
});

document.getElementById("nome").addEventListener("keypress", function(event) {
  var key = event.keyCode;
  // O espaço não funciona (key == 32)
  if (key <= 65 && key <= 90 || key == 8 || key == 32) {
    event.preventDefault();
    }
  });
  document.getElementById("nome1").addEventListener("keypress", function(event) {
  var key = event.keyCode;
  // O espaço não funciona (key == 32)
  if (key <= 65 && key <= 90 || key == 8 || key == 32) {
    event.preventDefault();
    }
  });
  function mudarCor(elemento) {
      elemento.style.backgroundColor = '#0b2c3c';
      elemento.style.color = 'white';
  }
  function restaurarCor(elemento) {
      elemento.style.backgroundColor = 'white'; 
      elemento.style.color = 'black';
  }