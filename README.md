# entregable_academlo_1

## ¿Qué hay hecho?

1. El maquetado está medianamente bien; sin embargo, faltan las @mediaQueries para que la página de la tienda se acomode a los breakpoints para pantallas chicas y medianas.
2. En la página principal, donde aterriza el usuario. El botón "more options" permite desplegar más opciones, por defecto puse 40 productos, pero pueden ser aumentados o
  reducidos cambiando la línea de código 24 del archivo mainPage.js: `let productsArr = [...Array(<==Aquí==>).fill(productBase)];` reemplazando <==Aquí==> por el número deseado.
3. La idea es que este número será el total de productos que nos entregue la API cuando tengamos estos datos.
4. Los productos se seleccionan automáticamente al dar clic en ellos.
5. El carrito está desplegado, pero funciona horriblemente mal.

## ¿Qué falta por hacer?
1. Algunos elementos aún no son funcionales, como las tallas o el botón de suscribirse.
2. Muchas funciones no están implementadas y otras como el carrito tienen varios errores.
3. El maquetado puede mejorarse muchísimo más, agregando fuentes y variables de CSS para no repetir código, dando márgenes consistentes a lo largo de la página
o creando CSS reutilizable para agregar a los elementos que comparten características de margen o de posicionamiento.

## ¿Qué se quería hacer?
La idea que tuve fue intentar hacer una especie de SPA [^1]: :joy:

En el formato que nos compartió Academlo hay 2 secciones, la página principal donde se despliegan todos los productos y la página de la tienda donde se puede seleccionar
la talla, color, etc. Al hacer clic en un producto se redirige a la página de la tienda y eso fue lo que quería evitar.

Uso JS entonces para controlar lo que se va a mostrar en el DOM con funciones que inyectan HTML a través de un .innerHTML a un div principal que va a cambiar su contenido 
de acuerdo a donde se encuentre el usuario en la página y que interacción haya tenido con la página.
Por defecto el usuario va a ver la página que llamé 'main' entonces el div principal tiene que iniciar conteniendo el HTML para que eso sea lo que vea el usuario. 
Pero al hacer clic en un elemento ese HTML cambia y ahora el usuario va a ver la tienda con el producto seleccionado maximizado sin que se produzcan recargas en la página.

Como son solo 2 páginas es muy fácil hacer esto (aunque es más código) pero brinda una experiencia más fluida al usuario.

### PD: Todo el código está comentado para facilitar su lectura por si quieren jugar con él o rearmar el sitio. 
También hay un montón de **malas prácticas** :joy:

[^1]:  SPA o Single Page Application es una forma de construir apps web en las que no se producen recargas de la página al cambiar de componentes, o sea, todo está contenido
en el mismo espacio, que se usa para renderizar los diferentes componentes. En otras palabras, todo está metido en una única página.
