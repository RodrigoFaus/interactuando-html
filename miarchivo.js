
// Función del catalogo de compras

function catalogo () { let catalagos = document.getElementById("catalogo2")
catalagos.innerHTML =  `<div class="cat">
<p> Marca: "Iphone", Modelo: "I13", Precio: "500 USD"</p>
<p> Marca: "Iphone", Modelo: "I12", Precio: "400 USD"</p>
<p> Marca: "Iphone", Modelo: "I11", Precio: "300 USD"</p>
</div>
<div class="cat">
<p> Marca: "Samsung", Modelo: "S22", Precio: "500 USD"</p>
<p> Marca: "Samsung", Modelo: "S21",  Precio: "400 USD"</p>
<p> Marca: "Samsung", Modelo: "S20", Precio: "300 USD"</p>
</div>
<div class="cat">
<p> Marca: "Motorola", Modelo: "E30", Precio: "500 USD"</p>
<p> Marca: "Motorola", Modelo: "E20", Precio: "400 USD"</p>
<p> Marca: "Motorola", Modelo: "E10", Precio: "300 USD"</p>
</div>`
}
  
    // Eleccion de modelos y suma final de la compra

    function botonComprar() {

    const productos = [];

    let entrada = prompt("Ingresar modelo que desea comprar");
    while(entrada != "fin" ){
    switch (entrada) {
        case "I13":
                productos.push(500);
                console.log("- 1 Iphone 13")
                break;
        case "I12":
                productos.push(400);
                console.log("- 1 Iphone 12")
                break;
        case "I11":
                productos.push(300);
                console.log("- 1 Iphone 11")
                break;
        case "S22":
                productos.push(500);
                console.log("- 1 Samsung S22")
                break;
        case "S21":
                productos.push(400);
                console.log("- 1 Samsung S21")
                 break;
        case "S20":
                 productos.push(300);
                 console.log("- 1 Samsung S20")
                 break;
        case "E30":
                 productos.push(500);
                 console.log("- 1 Motorola E30")
                 break;
        case "E20":
                 productos.push(400);
                 console.log("- 1 Motorola E20")
                 break;
        case "E10":
                 productos.push(300);
                 console.log("- 1 Motorola E10")
                 break;
        default:
            alert("Modelo incorrecto")
            break;
    }
    entrada = prompt("Ingrese un nuevo modelo");
    console.log(productos)
    }

    let sum = 0;
    for (let i = 0; i < productos.length; i++) {
    sum += productos[i];
    }       
    console.log(sum);
    alert("El total a pagar es de:" + " "+ sum + " " + "USD") 

    } 