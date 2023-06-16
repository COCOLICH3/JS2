/*-----Defino el objeto producto-----*/
function Producto(id, nombre, precio, imagen, cantidad) {
  this.id = id;
  this.nombre = nombre;
  this.precio = precio;
  this.imagen = imagen;
  this.cantidad = cantidad;
}

/*----- Obtengo el elemento grilla del html-----*/
let contenedor = document.getElementById("productos_grilla");

/*----- Obtengo el elemento boton para vaciar carrito-----*/
let vaciar = document.getElementById("vaciarCarrito");

/*----- Obtengo el elemento en donde mostrar el carrito-----*/
let contenedorCarrito = document.getElementById("contenedorCarrito");

/*----- Obtengo el elemento en donde mostrar el total carrito-----*/
let totalCompra = document.getElementById("totalCompra");

/*----- Obtengo el elemento en donde relizar la compra del carrito-----*/
let comprarCarrito = document.getElementById("finalizarCompra");

/*----- Traigo los productos, los guardo en una variable y los muestro-----*/
fetch("./data.json")
  .then(response => response.json())
  .then(data => {
    const datosGuardados = data;
    mostrarProductos(datosGuardados);
  })
  .catch(error => {
    console.error('Error:', error);
  });

  /*----- Funcion que muestra los productos -----*/
  function mostrarProductos(datosGuardados){
    datosGuardados.forEach((item) => {
      let div = document.createElement("div");
      div.classList.add = "card-wrapper";
      div.innerHTML=`<div class="grid-item">
                     <img src="${item.imagen}">
                     <div class="description">
                       <div class="product-name">
                       ${item.nombre}
                       </div>
                       <div class="price">
                       $${item.precio}
                       </div>
                       <button class="shop" id="carrito" onclick="agregarAlCarrito(${item.id})">Agregar artículo</button>
                     </div>
                   </div>`;
      contenedor.append(div);
      });
  }
   
/*----- Inicializo el carrito (se que var no se usa pero probe con const y let y en ambos casos me tiro
  un error de consola 'Uncaught ReferenceError: Cannot access 'carritoDeCompras' before initialization
    at main.js:56:42
main.html:74 Live reload enabled.
main.js:60 Uncaught ReferenceError: Cannot access 'carritoDeCompras' before initialization
    at agregarAlCarrito (main.js:60:29)
    at HTMLButtonElement.onclick (main.html:1:1)' y lo deje con var y funciono) -----*/
var carritoDeCompras =  JSON.stringify(carritoDeCompras) || [];

/*----- Agrego items al carrito y verifico su cantidad (asi no se muestra mas de 1 producto en el carrito)-----*/
function agregarAlCarrito(id){
  const productoEnCarrito = carritoDeCompras.find((producto) => producto.id === id);
  const producto = stockProductos.find((producto) => producto.id === id);
    if(productoEnCarrito){
      productoEnCarrito.cantidad++;
    }
    else{
      carritoDeCompras.push(producto);
    }
  localStorage.setItem("carrito", JSON.stringify(carritoDeCompras));
  mostrarProductoCarrito();
}



/*----- Le agrego un evento click que borre el carrito y me muestre una alerta con sweetalert -----*/
vaciar.addEventListener('click', () => {
  Swal.fire({
    title: '¿Estás seguro?',
    text: 'Esta acción vaciará el carrito de compras.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí, vaciar carrito',
    cancelButtonText: 'Cancelar',
  }).then((result) => {
    if (result.isConfirmed) {
      carritoDeCompras.splice(0, carritoDeCompras.length);
      localStorage.setItem('carrito', JSON.stringify(carritoDeCompras));
      location.reload();
    }
  });
});

/*----- Le agrego un evento click que realize la compra y me muestre una alerta con sweetalert -----*/
comprarCarrito.addEventListener('click', () => {
  Swal.fire({
    title: 'Confirmar compra',
    text: '¿Deseas confirmar la compra del carrito?',
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'Confirmar',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      carritoDeCompras.splice(0, carritoDeCompras.length);
      localStorage.setItem('carrito', JSON.stringify(carritoDeCompras));
      Swal.fire(
        '¡Compra realizada!',
        'El carrito ha sido comprado exitosamente.',
        'success'
      ).then(() => {
        location.reload();
      });
    }
  });
});

/*----- Funcion que muestra los productos del carrito cada vez que agrego un producto nuevo -----*/
function mostrarProductoCarrito() {
  let aux = '';
  carritoDeCompras.forEach((item) =>{
    aux +=`<div class="grid-item">
    <img src="${item.imagen}">
    <div class="description">
      <div class="product-name">
      ${item.nombre}
      </div>
      <div class="price">
      $${item.precio}
      </div>
      <button class="shop" id="eliminarCarrito" onclick="eliminarDelCarrito(${item.id})">Eliminar del carrito</button>
    </div>
  </div>`;
  });
  contenedorCarrito.innerHTML = aux;
  calcularTotal();
};

/*----- Funcion calcula el total en relacion con la cantidad de productos -----*/
const calcularTotal = () => {
  let total = 0;
  carritoDeCompras.forEach((producto) => {
    total += producto.precio * producto.cantidad;
  });
  totalCompra.innerHTML = total;
}

/*----- Funcion que elimina un producto del carrito, y llama a la funcion que muestra los productos del carrito -----*/
function eliminarDelCarrito (id) {
  const producto = carritoDeCompras.find((item) => item.id === id);
  carritoDeCompras.splice(carritoDeCompras.indexOf(producto), 1);
  mostrarProductoCarrito();
};