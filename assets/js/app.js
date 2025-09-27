const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable : true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  autoplay:{
    delay : 4000,
     disableOnInteraction: false
  }

});

//Menu hamburgesa

const nav = document.getElementById("nav")
const botonCerrar = document.getElementById("cerrar")
const botonAbrir = document.getElementById("abrir")

botonAbrir.addEventListener("click",() =>{
  nav.classList.add("visible")
})

botonCerrar.addEventListener("click",() =>{
  nav.classList.remove("visible")
})