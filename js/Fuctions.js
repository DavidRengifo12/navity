
/*

const sumaArray = (arraySumar) => {
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
console.log('El numero menor es:',numeroMenor(matriz))


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


function numerosNegativos(numbers){
    let contarNegativos = 0

    for(let g = 0; g < numbers.length; g++){
        if(numbers[g] < 0){
            console.log('negativos: ', numbers[g])
            contarNegativos ++
        }
    }
    return contarNegativos
}

let numeros = [1, 2, 3, -1, -2, -3]
console.log('Cantidad de numeros negativos:', numerosNegativos(numeros))


function Aprobados(noticas){
    let contarAprobados = 0

    for(let h = 0; h < noticas.length; h++){
        if(noticas[h] >= 3){
            console.log('Notas aprobadas:', noticas[h])
            contarAprobados ++
        }
    }
    return contarAprobados
}

let notas = [2.5, 3.0, 4.2, 1.8, 5.0, 2.9]
console.log('Cantidad de notas aprobadas:', Aprobados(notas))


function Reprobados(notas){
    let notasReprobados = 0

    for(let i = 0; i < notas.length; i++){
        if(notas[i] < 3){
            console.log('Notas repodas son:', notas[i])
            notasReprobados ++
        }
    }
    return notasReprobados
}

let calificacion = [2.5, 3.0, 4.2, 1.8, 5.0, 2.9]
console.log('Cantidad de notas aprobadas:', Reprobados(calificacion))


function Mayores_A_X(numero){

    let contarMayoresX = 0
    let x = 10

    for(let j = 0; j < numero.length; j++){
        if(numero[j] > x){
            console.log('Mayores que X son: ', numero[j])
            contarMayoresX ++
        }
    }
    return contarMayoresX
}
let numbers = [1, 2, 3, 50, 60]
console.log('Cantidad de numeros mayores a X son:',Mayores_A_X(numbers))

function PromedioNotas(nota){
    let aprobaron = 0
    let sumaAprobados = 0

    for(let k = 0; k < nota.length; k++){
        if(nota[k] > 3){
            sumaAprobados +=nota[k]
            aprobaron ++            
            console.log('Aprueban: ', aprobaron)
        }
        
        
    }

    let promedios = sumaAprobados / aprobaron
    return promedios
}
let notas = [2.5, 3.0, 4.2, 1.8, 5.0, 2.9]
console.log('Promedio de las notas:',PromedioNotas(notas))


function DescuentosPrecios (price){
    let total_pagos = 0

    for(let l = 0; l < price.length; l++){
        let descuento = 0
        if(price[l] >= 100){
            descuento = price[l] * 0.15
            console.log('Descuento del:', descuento)
        }

        let precioFinal = price[l] - descuento
        total_pagos +=precioFinal
    }
    return total_pagos
}
let dinero = [100, 200, 300]
console.log('Valor a pagar:',DescuentosPrecios(dinero))

const Edades = (age) => {
    let mayoresEdad = 0

    for(let n = 0; n < age.length; n++){
        if(age[n] >= 18){
            console.log('edades mayores: ', age[n])
            mayoresEdad ++
        }
    }
    return mayoresEdad
}

let edades = [15, 28, 30, 17, 20, 18]
console.log('Mayores de edad:',Edades(edades))


const PalabrasMasCinco = (wordls) => {
    let palabrasCinco = 0

    for(let o = 0; o < wordls.length; o++){
        if(wordls[o].length > 5){
            palabrasCinco ++
        }
    }
    return palabrasCinco
}
let palabras = ['cristiano', 'uno', 'javascript', 'lewandoski', 'veinte', 'dos', 'tres']
console.log(`Cantidad de palabras con mas de 5 en su texto: ${PalabrasMasCinco(palabras)}`)*/

function Negativo(number){
    
    for(let p = 0; p < number.length; p++){
        if(number[p] < 0){
            console.log('Booleanos:', number[p])
            return true
            
        }
    }
    return false

}
let numbers = [-1, 2, -3]
console.log(Negativo(numbers))
