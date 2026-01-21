
/*const sumaArray = (arraySumar) => {
    let sumaDelArray = 0
    for(let a = 0; a < arraySumar.length; a++){
        sumaDelArray += arraySumar[a]
    }
    return sumaDelArray
} 
let numbers = [1, 9]

console.log('Suma del array es:',sumaArray(numbers))


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


const ElementosArray = (array) => {
    let suma = 0
    for(let c = 0; c < array.length; c++){
        suma ++
    }
    return suma

}

let matriz = [1, 2, 3, 4, 5, 'XD' ]
console.log('Cantidad de elementos del array:', ElementosArray(matriz))


const numeroMayor = (array) => {
    let mayor = array[0]

    for(let d = 1; d < array.length; d++){
        if(array[d] > mayor){
            mayor = array[d]
        }
    }
    return mayor
}
let matriz = [1, 2, 3, 4, 5, 10]
console.log('El numero mayor es:',numeroMayor(matriz))


const numeroMenor = (arrays) => {
    let menorcito = arrays[0]

    for(let e = 1; e < arrays.length; e++){
        if(arrays[e] < menorcito){
            menorcito = arrays[e]
        }
    }
    return menorcito
}

let matriz = [10, 20, 30, 40, 50, 60]
console.log('El numero menor es:',numeroMenor(matriz))*/


function Pares(numeros){
    let contarPares = 0

    for(let f = 0; f < numeros.length; f++){
        if(numeros[f] %2 == 0){
            contarPares ++
            console.log('numeros pares:', numeros[f])
        }
    }
    return contarPares

}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log('Cantidad de numeros pares:',Pares(numbers))