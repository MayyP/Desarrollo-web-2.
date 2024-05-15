let NombreProducto = "Pantalones"
let PrecioUnitario = 500
function SumarProductos (PrecioUnitario, CantidadDeseada){
    let TotalGastado = PrecioUnitario * CantidadDeseada
    console. log (TotalGastado)
}
let CantidadDeseada = parseInt (prompt("Ingrese la cantidad deseada de" + (NombreProducto) + "que desea comprar:"))
SumarProductos (PrecioUnitario, CantidadDeseada)
