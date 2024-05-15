let NombreProducto4 = "Pantalones"
let PrecioUnitario = 500
let CantidadDeseada4 = parseInt (prompt("Ingrese la cantidad deseada de" + (NombreProducto4) + "que desea comprar:"))

function SumarProductos (PrecioUnitario, CantidadDeseada4){
    let TotalGastado = PrecioUnitario * CantidadDeseada4
    console. log (TotalGastado)
    return TotalGastado;
}
SumarProductos (PrecioUnitario, CantidadDeseada4)
