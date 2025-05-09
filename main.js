
function convertCurrency(pesos){
    return resultado= pesos/1300
};


let history= []

alert("Convertidor de ARS a USD ")
num= Number(prompt("1-divisa   2-salir"))

switch (num) {
    case 1:
        pesos = Number(prompt("Ingrese la divisa ARS"))
        resultado = convertCurrency(pesos)
        
        alert(`${resultado}USD `)

        let operacion = {
            tipo:"ARS",
            entrada: pesos,
            salida: resultado,
            fecha: new Date().toLocaleString()
        }
        console.log(history.push(operacion))



    case 2:
        

    default:

}