
const valorDolar= 1300

function convertCurrency(pesos){
    return pesos/valorDolar
}; //esta función realiza la conversión


let history= []

do {
    num= Number(prompt("Convertidor de ARS a USD \n 1-divisa   2-salir"))



    switch (num) {
        case 1:
            pesos = Number(prompt("Ingrese la divisa ARS")) //se ingresa el valor a covertir
            
            resultado = convertCurrency(pesos) // se llama a la funcioón y se guarda dentro de una variable
        
            alert(`${resultado.toFixed(2)}USD `) //se muestra el resultado

            //se crea el objeto para el historial
            let operacion = {
                tipo:"ARS -> USD",
                pesos: pesos,
                dolares: resultado.toFixed(2),
                fecha: new Date().toLocaleString()
            }


            history.push(operacion) //se guarda el objeto en un array



        case 2:
            break
        

        default:
            alert("Opción Invalida");
            continue
    }
}
while (num != 2) {};

console.log(history); 