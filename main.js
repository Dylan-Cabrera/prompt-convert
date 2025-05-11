
function convertCurrency(pesos){
    return resultado= pesos/1300
};


let history= []

do {
    num= Number(prompt("Convertidor de ARS a USD \n 1-divisa   2-salir"))



    switch (num) {
        case 1:
            pesos = Number(prompt("Ingrese la divisa ARS"))
            resultado = convertCurrency(pesos)
        
            alert(`${resultado.toFixed(2)}USD `)

            let operacion = {
                tipo:"ARS -> USD",
                pesos: pesos,
                dolares: resultado.toFixed(2),
                fecha: new Date().toLocaleString()
            }
            history.push(operacion)



        case 2:
            break
        

        default:
            alert("Opción Invalida");
            continue
    }
}
while (num != 2) {};

console.log(history); 