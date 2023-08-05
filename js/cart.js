function cart(targetProduct) {
    fetch('../components/cart.html')
    .then(response => response.text())
    .then(html => {
      let CART_HTML = html; 
      // seleccionamos el boton add to cart del DOM
     let addToCartDispaly = document.querySelector('#add_to_cart_dispaly')
      // aplicamos esta condicion para controlar el error que produce dar click en el boton del carrito si la opcion addToCartDispaly no se muestra. EJ al dar click sobre el carrito desde la pagina principal, cuando el boton addToCart no existe. 
      //!! esta solucion no es optima, la funcion que llama al carrito debería ser construida en la pagina principal para que al dar click en el carrito desde allá se despliegue, y pasada como prop / 'argumento' a este componente, así se evita la necesidad de esta logica y errores.
     addToCartDispaly && (addToCartDispaly.innerHTML = CART_HTML)
      // aquí enviamos el producto seleccionado al carrito.
      // ! falta estilizar el carrito y permitir agregar más productos, lo ideal es que el carrito se pueda minimizar y permitir al usuario navegar en la pagina conservando la informacion del producto agregado, tambien aumentar o disminuir la cantidad de un producto.
     let cart_product_section = document.querySelector('.cart_product_section')
     targetProduct && (cart_product_section.innerHTML = targetProduct.innerHTML)
      //! se selecciona del carrito y se hace un renderizado condicional del componente, todo este componente debería ser reestructurado para que sea funcional.
     let close = document.querySelector('#close')
     close ? close.addEventListener('click' , ()=>{
      // !! de nuevo necesitamos esta condicion para eliminar el carrito y si no existe entonces creamos un alert para indicar que no hay productos seleccionados, pero en sí lo que impide que el carrito se abra es que el elemento no existe en el DOM. Esta logica debería ser modificada para evitar este comportamiento.
      addToCartDispaly ? (addToCartDispaly.innerHTML = ``) : console.error('no es posible')
     })
     : 
     // alertamos al usuario que no hay un producto seleccionado para tapar el error de logica en este componente. 
     window.alert('el carrito está vacio, selecciona un producto primero')
     
     })}