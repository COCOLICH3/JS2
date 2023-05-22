/*
function calcularIva(){
   let tipoIva = prompt("Ingrese el tipo de IVA: A (21%), B (27%), C (42%), D (61%)");
    while(tipoIva != "A" && tipoIva != "B" && tipoIva != "C" && tipoIva != "D" ){
        alert("El tipo de IVA tiene que ser A, B, C o D");
        tipoIva = prompt("Ingrese el tipo de IVA: A (21%), B (27%), C (42%), D (61%)");
    }
    let producto = prompt("Que producto desde comprar?: 3070 (GeForce RTX 3070) o 3080 (GeForce RTX 3080)");
    while(producto != 3070 && producto != 3080){
        alert("El producto tiene que ser GeForce RTX 3070 o GeForce RTX 3080");
        producto = prompt("Que producto desea comprar?: GeForce RTX 3070 o GeForce RTX 3080");
    }
    switch(tipoIva){
        case "A": 
        if(producto === 3070){
            let total = 5000 + (5000 * 0.21);
            alert(`Su total es de ${total}`);
        }else {
            let total = 7000 + (7000 * 0.21);
            alert(`Su total es de ${total}`);
        }
        break;
        case "B": 
        if(producto === 3070){
            let total = 5000 + (5000 * 0.27);
            alert(`Su total es de ${total}`);
        }else {
            let total = 7000 + (7000 * 0.27);
            alert(`Su total es de ${total}`);
        }
        break;
        case "C": 
        if(producto === 3070){
            let total = 5000 + (5000 * 0.10);
            alert(`Su total es de ${total}`);
        }else {
            let total = 7000 + (7000 * 0.10);
            alert(`Su total es de ${total}`);
        }
        break;
        case "D": 
        if(producto === 3070){
            let total = 5000 + (5000 * 0.50);
            alert(`Su total es de ${total}`);
        }else {
            let total = 7000 + (7000 * 0.50);
            alert(`Su total es de ${total}`);
        }
        break;
    }
}
function agregarProducto(){
    for(let i = 1; i <= 5; i++) {
        let producto = prompt ("ingrese el nombre de un producto");
        let precio = prompt ("ingrese el valor de un producto");
    
        alert (`El producto numero #${i}, llamado ${producto}, tiene como valor ${precio}$`);
    
    }
    
    alert ("No puede ingresar mas productos")
    
}
calcularIva();
alert("--------------------");
agregarProducto(); 

let saludo = document.getElementById("hola");
let seccion = prompt('A que seccion desea ir?');

console.log(saludo);

if(seccion === "carrito"){
    saludo.innerHTML = "<h1>Bienveido al carrito</h1>";
}



let nombre = prompt("Ingrese su nombre");

let boton = document.getElementById("boton");

const respuesta = () => {
    console.log(`Hola ${nombre}`)
}

boton.addEventListener("click", respuesta);

sessionStorage.setItem("nombre", "julio");
*/
class Producto {
    constructor(nombre, precio, cantidad) {
      this.nombre = nombre;
      this.precio = precio;
      this.cantidad = cantidad;
    }
  }
  const productos = [];
  
  function agregarProducto() {
    for (let i = 1; i <= 2; i++) {
      let nombre = prompt("Ingrese el nombre");
      let precio = prompt("Ingrese el precio");
      let cantidad = prompt("Ingrese la cantidad");
  
      let producto = {
        id: i,
        nombre,
        precio,
        cantidad,
      };
  
      productos.push(producto);
    }
  
    alert("No puede ingresar mas productos");
  }
  
  function mostrarProducto() {
    productos.forEach((producto) => {
      alert(
        `El producto llamado ${producto.nombre}, con cantidad #${producto.cantidad}, tiene como valor ${producto.precio}$`
      );
    });
  }
  
  function eliminarProducto() {
    let eliminar = prompt("Escriba el nombre del producto a eliminar");
    for (var i = productos.length - 1; i >= 0; i--) {
      if (productos[i] === eliminar) {
        productos.splice(i, 1);
      }
    }
    //productos.forEach((producto) => {
    //const index = productos.indexOf(producto);
    //console.log(index);
    //productos.splice(index, 1);
    //});
  }
  
  function filtrarProducto() {
    let precioMinimo = parseInt(prompt("Ingrese el precio minimo"));
    let productosFiltrados = productos.filter(
      (item) => item.precio > precioMinimo
    );
  
    productosFiltrados.forEach((producto) => {
      alert(
        `El producto llamado ${producto.nombre}, con cantidad #${producto.cantidad}, tiene como valor ${producto.precio}$`
      );
    });
  }
  
  function verificarProducto() {
    let verificar = prompt("Escriba el nombre del producto a verificar");
    productos.forEach((producto) => {
      alert(productos.some((producto) => producto.nombre === verificar));
    });
  }
  
  /*
  function menuInteractivo() {
    let opcionMenu = prompt(
      "Elija una opcion, 1 eliminar un producto, 2 agregar otro producto, 3 verificar si un producto existe en la lista"
    );
  
    while (opcionMenu != "1" && opcionMenu != "2" && opcionMenu != "3") {
      alert("Elija 1, 2 o 3 ");
      opcionMenu = prompt(
        "Elija una opcion, 1 eliminar un producto, 2 agregar otro producto, 3 verificar si un producto existe en la lista"
      );
    }
  
    switch (opcionMenu) {
      case "1":
        let eliminar = prompt(
          "Ingrese el nombre del producto que desea eliminar"
        );
        productos.forEach((producto) => {
          while (eliminar !== producto.nombre) {
            if (eliminar === producto.nombre) {
              const index = array.indexOf(producto);
              productos.splice(index,1);
                    break;
          } 
            else {
              alert("Producto no encontrado");
             eliminar = prompt(
                  "Ingrese el nombre del producto que desea eliminar"
                );
            }
         };
        }
        );
        break;
  
      case "2":
        let agregar = prompt("Ingrese el nombre del producto que desea agregar");
        productos.forEach((producto) => {
          while (agregar !== producto.nombre) {
            if (agregar ===  producto.nombre) {
              agregarProducto();
              break;
            } else {
              alert("Producto ya existe");
              agregar = prompt(
                "Ingrese el nombre del producto que desea agregar"
              );
            }
          }
        });
        break;
        
        case "3":
          let verificar = prompt("Ingrese el nombre del producto que desea verificar");
          productos.forEach((producto) => {
            while (verificar !== producto.nombre) {
              if (verificar ===  producto.nombre) {
                alert(productos.some(producto => producto.nombre === verificar));
                break;
              } else {
                  alert("Producto no existe");
                verificar = prompt(
                  "Ingrese el nombre del producto que desea agregar"
                );
              }
            }
          });
          break;  
    }
  }
  */
  
  alert("Bienvenido, a continuacion ingrese 4 productos");
  
  agregarProducto();
  
  alert("A continuacion se listaran los productos");
  
  mostrarProducto();
  
  //eliminarProducto();
  
  filtrarProducto();
  
  //alert("A continuacion se listaran los productos");
  
  //mostrarProducto();
  
  verificarProducto();
  
  alert("A continuacion se listara la lista final de los productos");
  
  mostrarProducto();