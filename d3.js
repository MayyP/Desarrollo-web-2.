let NombreProducto = "Camisas"
let PrecioUnitario3 = 5000;
let CantidadDeseada = prompt("Ingrese la cantidad que desea comprar de:" + NombreProducto)
parseInt(CantidadDeseada)
let CostoTotalSinDescuento = PrecioUnitario3 * CantidadDeseada
if (CantidadDeseada>=5){
    CostoTotalSinDescuento *= 0.9
}
alert ("El costo total de" + CantidadDeseada + NombreProducto + "es:" + CostoTotalSinDescuento)
