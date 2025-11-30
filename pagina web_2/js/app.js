// Menú de Navegación
let btnMenu = document.querySelector('.btn-menu');
let barIconX = document.querySelector('.btn-menu i');
let menu = document.querySelector('.list-container');
let menuContent = document.querySelector('.menu');
var activador = true;

btnMenu.addEventListener('click', (event) => {

  //Icon X para cerrar
  barIconX.classList.toggle('fa-times');

   if(activador){
     menu.style.left = '0%';
     menu.style.transition = '0.5s';

     activador = false;
   }
   else{
    activador = false;
    menu.style.left = '-100%';

    activador = true;
   }

});

// Add class "active"
let enlaces = document.querySelectorAll('.lists li a');

enlaces.forEach((element) => {

  element.addEventListener('click', (event) => {
   enlaces.forEach((link) => {
     link.classList.remove('active');
   });
    event.target.classList.add('active');

  });

});

//Efectos Scroll
 let prevScrollPos = window.pageYOffset;
 let goTop = document.querySelector('.go-top');

window.onscroll = () => {
  //Mostrar y Ocultar Menú
  let currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    menuContent.style.top = '0px';
    menuContent.style.transition = '0.5s';
  }else{
    menuContent.style.top = '-60px';
    menuContent.style.transition = '0.5s';
  }
  prevScrollPos = currentScrollPos;

  // Mostrar y ocualtar botón del Scoll (ir arriba) línea divisoria (Styles)
  let arriba = window.pageYOffset;

  //ciclo condicional
  if(arriba <= 600){
    menuContent.style.borderBottom = 'none';

    //Ocultar ir arriba
    goTop.style.right = '-100px';
  }else{
    menuContent.style.borderBottom = '3px solid #ff2e63';

    //Mostrar ir arriba
    goTop.style.right = '0px';
    goTop.style.transition = '0.5s';
  }
}

// Ir arriba al dar Click
goTop.addEventListener('click', () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

let abajo = document.querySelector('#abajo');

abajo.addEventListener('click', () => {
  document.body.scrollTop = 5000;
  document.documentElement.scrollTop = 5000;

});
