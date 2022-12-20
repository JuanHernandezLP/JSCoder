class Divisa{

    constructor(nombreDivisa , compra , venta ){

        this.nombreDivisa = nombreDivisa;
        this.compra = compra;
        this.venta = venta;

    }

    getDatos(){

        console.log("<----------->");
        console.log("Divisa: " , this.nombreDivisa);
        console.log("Compra: ", this.compra);
        console.log("Venta: ", this.venta);
        console.log("");

    }

}

let listaDivisas = [];

for ( let i = 0 ; i < 3 ; i = i + 1){

    let nombreDivisa = prompt("Ingrese el nombre de la divisa deseada");
    let compra = prompt("Ingrese el valor de la compra de la divisa deseada");
    let venta = prompt("Ingrese el valor de la venta de la divisa deseada");

    let divisa = new Divisa(nombreDivisa,compra,venta);

    listaDivisas.push(divisa);


}

for (let divisa of listaDivisas){

    divisa.getDatos();

}

// simulacion cambio 

function buscarDivisa( divisa ){

    return divisa.nombreDivisa == cambioUsuario
}

let cambioUsuario = prompt("Ingrese el nombre de la divisa que quiere cambiar");

let resultadoFind = listaDivisas.find(buscarDivisa);

function CompraDivisa(){
    monto = parseInt(prompt("Ingrese cuanto $ quiere comprar"));
    valorFinal = monto * resultadoFind.compra
    console.log("Usted compro -> " + monto + " de la divisa -> " + cambioUsuario + " y debio pagar "  + valorFinal);
    console.log("Gracias por su compra!");
}
function VentaDivisa(){
    monto = parseInt(prompt("Ingrese cuanto $ quiere vender"));
    valorFinal = monto * resultadoFind.venta
    console.log("Usted vendio -> " + monto + " de la divisa -> " + cambioUsuario + " y se le pagó  "  + valorFinal);
    console.log("Gracias por su transaccion!");
}

if ( resultadoFind != undefined ){

    let transaccion = prompt("Ingrese si quiere comprar o vender la divisa --> " + cambioUsuario);

    if ( transaccion == "comprar"){

        CompraDivisa();


    }
    else if ( transaccion == "vender"){

        VentaDivisa();

    }
    else{
        alert("error! vuelva a intetentarlo ");
    }

}
else{
    console.log("Divisa no encontrada")
}