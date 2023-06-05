const precio = 200;

function totalAPagar(){
    let cantidad = parseInt(document.getElementById("cantidad").value);
    let seleccion = document.getElementById("categoria").value;
    let descuento = 0;
    if (seleccion === "estudiante"){
        descuento = 0.8;
    }else if(seleccion === "trainee"){
        descuento = 0.5;
    }else if(seleccion === "junior"){
        descuento = 0.15;
    }
    let precioFinal = precio * cantidad;
    let precioFinalConDescuento = precioFinal - (precioFinal* descuento);
    let pagar = document.querySelector("#pagar");
    pagar.textContent = "Total a Pagar: $" + precioFinalConDescuento;
}

function borrarFormulario() {
    document.querySelector(".form").reset();
    pagar.textContent = "Total a Pagar: $"
  }