function calcularLitros(){
    //variables
    var elementoKm = document.getElementById("textoKm");
    //Convierte el valor id en String
    var textoKm = elementoKm.value;
    //Convierte textoKm en Numero
    var cantKm = Number(textoKm);

    //Factor para la operación
    var cantLitros = Math.round((cantKm/8.8),2);

    var resultado = document.getElementById("textoResultado");
    resultado.textContent = "Carga "+ cantLitros + "Litros de Combustible";
}