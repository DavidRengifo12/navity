
/*const sumaArray = (arraySumar) => {
    let sumaDelArray = 0
    for(let a = 0; a < arraySumar.length; a++){
        sumaDelArray += arraySumar[a]
    }
    return sumaDelArray
} 
let numbers = [1, 9]

console.log('Suma del array es:',sumaArray(numbers))*/


const DevolverPromedio = (promedios) => {
    let suma = 0

    for(let b = 0; b < promedios.length; b++){
        suma += promedios[b]
    }
    let promediar = suma / promedios.length
    return promediar
    
}

let notas = [2.5, 3.5, 4.5, 5.0]
console.log(DevolverPromedio(notas))

