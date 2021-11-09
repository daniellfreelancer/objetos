// Desafio complementario

// function valorIva (vlista){ 

// const monto_iva = 0.19 ;
// const delantales = 30000;
// const remera = 15000;
// const utencilios = 20000;
// const recetarios=12000;
// const moneda ='CLP'

//  if (vlista == 1) {
//    const subtotal = delantales * monto_iva + delantales;
//   alert(`El precio de los Delantales, con IVA incluido es de: ${subtotal} ${moneda}` );
// } 
// else if (vlista == 2) {
//   const subtotal = remera * monto_iva + remera;
//  alert(`El precio de las Remeras (Camisas), con IVA incluido es de: ${subtotal} ${moneda}`);
// } 

// else if (vlista == 3) {
//   const subtotal = utencilios * monto_iva + utencilios;
//  alert(`El precio de los Utencilios de cocina, con IVA incluido es de: ${subtotal} ${moneda}`);
// } 

// else if (vlista == 4) {
//   const subtotal = recetarios * monto_iva + recetarios
//  alert(`El precio de los Recetarios con IVA incluido es de: ${subtotal} ${moneda}`);
// }
// else {
//   alert("Actualmente solo tenemos los 4 articulos mencionados");
// }
//   return vlista;
// }

// const productosDisponibles=Number(prompt(`¿Qué producto en promocion deseas:
// 1 - Delantales
// 2 - Camisas/remeras
// 3 - Utencilios
// 4 - Recetario`));


// valorIva(productosDisponibles);

// Desafio Objetos

class ItemIndumentaria  {

  constructor(tipo, talle, color){
    this.tipo = tipo;
    this.talle = talle;
    this.color = color;
  }

// metodo
  calculoIva(){
    let precioD = 2000;
    let precioC = 2500;
    let iva = 0.19;
    let delantal = "delantal";
    let camisa = "camisa";

    if(this.tipo === delantal) {
      let resultadoD = precioD * iva + precioD;
      alert(`Tu delantal con iva incluido es de $ ` + resultadoD);
    }
    else if (this.tipo === camisa) {
      let resultadoC = precioC * iva + precioC;
      alert(`Tu camisa con iva incluido es de $ ` + resultadoC);
    }
    else {
      alert(`por favor ingrese delantal o camisa`);
    }
}

}

// ingreso de datos
let tipo = prompt(`¿Desea un "Delantal" o una "Camisa"?`);
let talle = prompt(`¿Que talle desea?`);
let color = prompt(`ingrese el color deseado`);

// llamado de objeto
const objetoSolicitado = new ItemIndumentaria (tipo, talle, color);

objetoSolicitado.calculoIva();
console.log(objetoSolicitado);