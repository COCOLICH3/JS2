
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