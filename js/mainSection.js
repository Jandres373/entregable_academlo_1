
function main() {
    fetch('..//components/mainPage.html')
    .then(response => response.text())
    .then(html => {
        const ACADEMLO_MAIN_PAGE = html;
        //esta variable controla el aumento progresivo del espacio que se expande al dar click en el boton '¿ mas opciones''
        let aumentadorDeTamaño = 840
        //funcion que retorna el HTML que se insertará en el componente SPA
    function showMinimizedPage() {
        let mainPageHTML = ACADEMLO_MAIN_PAGE;
        spa_container.innerHTML = mainPageHTML;
        const product01 = document.querySelector('#product01');
        const productOptions = document.querySelector('#productOptions');
        //Definimos las caracteristicas de cada uno de los productos, generamos un objeto que las contenga para pasarlo como argumento a las otras funciones y/o componentes que necesitan saber los datos.
        let productBase = {
            id: 0,
            name: 'Playera negra - Logo blanco',
            variantes: ['negra','roja'],
            img: '',
            html: product01,
            optionHTML: productOptions
        }
        //Desestructuramos el objeto productBase para usar las nuevas variables posteriormente y simplificar la escritura de codigo.
        let {id,name,variantes,img,html,optionHTML} = productBase
        // Crear los arrays de productos, aquí controlamos cuantos productos se van a desplegar, este dato depende del total de productos que la API aporte una vez se conozca la API
        let productsArr = [...Array(40).fill(productBase)];
        //~~ Clonar y modificar el html de los elementos "Product"
        // Se agrega una ID dinamica usando el elemento i (index) del metodo .map() para generar una ID unica. Esto debería ser obtenido de la API
        let productsHtmlMap = productsArr.map((e, i) => {
            const clonedElements = e.html.cloneNode(true);
            clonedElements.setAttribute('id', i);
            return clonedElements;
        });
        //~~ Clonar y modificar el html de los elementos "Option"
        // Se repite el proceso de asignar identificadores unicos y mapear el objeto para retornar el HTML que será desplegado en las funciones o componentes que los necesiten
         let productsOptionHtmlMap = productsArr.map((e, i) => {
            const clonedOptions = e.optionHTML.cloneNode(true);
            clonedOptions.setAttribute('id', i);
            clonedOptions.setAttribute('name', i);
            clonedOptions.setAttribute('value', i);
            clonedOptions.textContent = `prd${i} ${productsArr.id}`;
            return clonedOptions;
        });
        //Obtenemos los elementos del DOM en donde insertaremos el HTML 
        const productSection = document.querySelector('#productSection');
        const productSelect = document.querySelector('#productSelect');
        // Insertamos el HTML de los objetos mapeados al dom al DOM
        productSection.innerHTML = productsHtmlMap.map(product => product.outerHTML).join('');
        productSelect.innerHTML = productsOptionHtmlMap.map(options => options.outerHTML).join('');
        // Obtener una lista de productos
        let products = document.querySelectorAll('.product_container');
        // Ejecutar el 'onClick' para los productos e invocar la funcion store() para desplegar la pagina de compras
        products.forEach(product => {
            product.addEventListener('click', (e) => {
                const targetProduct = e.currentTarget
                for (const prod of products) {
                    if (targetProduct === prod) {
                        store(productsArr, targetProduct,productsHtmlMap);
                    } else {
                        //aquí se podría implementar una funcion que afecte a todos los productos que NO sean el seleccionado.
                    }
                }
            });
        });
        // el boton 'more options' al dar click cambia el height de la seccion dodne se despliegan los productos, multiplicando el height actual *2 de manera que cada vez se expanda más y se muestre más productos
        // !! falta implementar un condicional que frene el crecimiento del elemento y que cambie el texto del boton, de momento siempre muestra "more options"
        let btn_more_options = document.querySelector('#btn_more_options')
        btn_more_options.addEventListener('click', ()=>{
        productSection.setAttribute('style', 'max-height: ' + (aumentadorDeTamaño = aumentadorDeTamaño * 2) + 'px');
        })
    }
        // la funcion showMinimizedPage() contiene toda la logica del componente, sin embargo se encuentra embebida dentro de main() por lo que al llamar a main, necesitamos a su vez llamar a showMinimizedPage() para que la logica se ejecute.
    showMinimizedPage()
  })
  //este Catch no es necesario, pero si el archivo HTML cambia de carpeta o algo sale mal, nos permitirá capturar el error.
  .catch(error => {
    console.error('Error al obtener el archivo HTML:', error);
  });
}




