const NombreProducto = "Pantalones"
function SumarProductos (PrecioUnitario, CantidadDeseada){
    let TotalGastado = PrecioUnitario * CantidadDeseada
    console. log (TotalGastado)
}
let CantidadDeseada = parseInt (prompt("Ingrese la cantidad deseada de" + (NombreProducto) + "que desea comprar:"))
let PrecioUnitario = 500
SumarProductos (PrecioUnitario, CantidadDeseada)
