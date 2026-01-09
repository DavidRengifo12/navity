let notas = [2.5, 3.0, 4.2, 1.8, 5.0, 2.9]

let aprobados = 0

for(let i = 3; i <= notas.length; i++){
    if(notas[i] >=3 ){
        aprobados ++
    }
}

console.log("Cantidad de aprobados:", aprobados)