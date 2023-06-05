/*-----Defino el objeto producto-----*/
function Producto(id, nombre, precio, imagen) {
  this.id = id;
  this.nombre = nombre;
  this.precio = precio;
  this.imagen = imagen;
}

/*----- Obtengo el elemento grilla del html-----*/
let contenedor = document.getElementById("productos_grilla");

/*----- Muestro los productos en la grilla -----*/
function mostrarProductos(array){
  array.forEach((item) => {
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

/*----- Inicializo el carrito -----*/
var carritoDeCompras =  JSON.stringify(carritoDeCompras) || [];

/*----- Agrego items al carrito -----*/
function agregarAlCarrito(id){
  stockProductos.forEach(producto => {
    if(producto.id === id){
      carritoDeCompras.push(producto);
    }
  });
  localStorage.setItem("carrito", JSON.stringify(carritoDeCompras));
}

/*----- Obtengo el elemento boton para vaciar carrito-----*/
let vaciar = document.getElementById("vaciarCarrito");

/*----- Le agrego un evento click que borre el carrito -----*/
vaciar.addEventListener('click', () =>{
  carritoDeCompras.splice(0, carritoDeCompras.length);
  localStorage.setItem("carrito", JSON.stringify(carritoDeCompras));
});

/*----- Obtengo el elemento boton para ver el carrito-----*/
let ver = document.getElementById("verCarrito");

/*----- Le agrego un evento click que muestre el carrito por consola -----*/
ver.addEventListener('click', () =>{
  console.log(JSON.stringify(carritoDeCompras));
});

/*----- Funciones -----*/
mostrarProductos(stockProductos);


/*----- Muestro el carrito -----*/
