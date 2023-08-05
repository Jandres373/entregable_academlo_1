// Obtener elemento principal del DOM para desplegar la "SPA"
const spa_container = document.querySelector('#spa_container');

//condicional de renderizado
let landingPage = 'main'

//esta condicion permite definir cual es el componente que se renderiza al arrancar la paigna
landingPage ==='main' &&  main() 

let nav_cart_button = document.querySelector('#nav_cart_button')
nav_cart_button.addEventListener('click', ()=>{
     cart()   
})













