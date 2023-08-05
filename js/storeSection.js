// Función para mostrar la página de la tienda maximizada

function store(productsArr,targetProduct) {
    fetch('..//components/storePage.html')
  .then(response => response.text())
  .then(html => {
    let ACADEMLO_STORE_PAGE = html; 
    //funcion principal, esta funcion permite: 1) retroceder a la pagina principal, incerta la imagen del producto seleccionado en esta misma pagina y trae los datos del producto al que se le dio click, pasados como argumento a la funcion store(), no es necesario pasarlos a showMaximizedStorePage() porqué ya se encuentran en su scope.
    function showMaximizedStorePage() {
        let storePageHTML = ACADEMLO_STORE_PAGE;
        spa_container.innerHTML = storePageHTML;
        // seleccionamos la 'back_arrow' del dom
        const backArrow = document.querySelector('#back_arrow');
        // renderizamos la pagina principal si se da click en la 'back arrorw'
        backArrow.addEventListener('click', () => {
            main()
        })
        //!! seleccionamos el boton Suscribe pero aun no se implementa su codigo al dar click
        let suscribe = document.querySelector('.susbribe_button')
        // seleccionamos la parte del DOM donde pondrémos la imagen del producto 
        let imgInsertion1 = document.querySelector('#img_insertion_1') 
        // insertamos la imagen en el dom
        imgInsertion1.setAttribute('src','../public/anonymus_hoodie.jpg')
        // seleccionamos la parte del DOM donde pondremos los productos relacionados 
        let productRelated = document.querySelector('#related_product_01')
        // hacemos un .map() local para desplegar estos productos cambiando el html del objeto ProductsArr para que los elemetos se ajusten al nuevo layout
        let mappedProducts = productsArr.map((e,i)=> e.html = productRelated )
        //insertamos los productos modificados a la seccion productSection
        productSection.innerHTML = [...mappedProducts].map(product => product.outerHTML).join(''); 
        //creamos la logica y  funcionalidad del boton 'add to cart'', pasamos el producto seleccionado como argumento a la funcion cart() que es otro componente en el archivo cart.js
        let addToCart = document.querySelector('#add_to_cart')
        addToCart.addEventListener('click', () => {
            cart(targetProduct)
            console.log('caca')
        })
    }
    // la misma situacion que con el archivo principal
    showMaximizedStorePage()
  })
  // la misma situacion que con el archivo principal
  .catch(error => {
    console.error('Error al obtener el archivo HTML:', error);
  });

}




