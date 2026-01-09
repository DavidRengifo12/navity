/*let personas = parseInt(prompt(`Ingrese la cantidad de personas: `))

let sumaPersonas = 0

for(let i = 0; i < personas; i++){
    let estatura = parseFloat(prompt(`Ingresa la estatura de la persona ${i}: `))
    sumaPersonas += estatura
}
let calcularEstatura =  sumaPersonas / personas
console.log(calcularEstatura)



let anio = 12
let sumaFinalAnio = 0

for(let i = 1; i <= anio; i++){
    let ahorro = parseFloat(prompt(`Ingrese el ahorro de dinero en el mes ${i}`))
    sumaFinalAnio += ahorro
    console.log(`El ahorro en el mes ${i} fue ${ahorro}`)
}

console.log(`El ahorro de la persona durante los 12 meses del año fue: ${sumaFinalAnio}`)

let numerosCantidades = parseInt(prompt('Ingrese la cantidad de numeros: '))

let mayorCero = 0
let menorCero = 0

for(let i = 0; i < numerosCantidades; i++){
    let numeros = parseInt(prompt(`Ingrese el numero ${i}`))
    if(numeros > 0){
        mayorCero ++
    }
    else {
        menorCero ++
    }
}

console.log('mayor cero son: ', mayorCero)
console.log('menor o igual a cero son: ', menorCero)

for(let i = 0; i < 101; i++){
    if(i % 2 == 0){
        console.log(`Numeros pares entre 0 y 100 son: ${i}`)
    }
}


let diasSemana = 6
let sueldoEmpleado = 1500
let acumularHoras = 0

let sueldoSemanal = 0

for(let i = 1; i<= diasSemana; i++){
    let horasTrabajoEmpleado =parseInt(prompt(`Ingrese la hora de trabajo del empleado en el dia ${i}:`))

    acumularHoras+=horasTrabajoEmpleado

    let sueldoXhora = horasTrabajoEmpleado * sueldoEmpleado
    sueldoSemanal +=sueldoXhora

}
console.log('sueldo semanal fue: ', sueldoSemanal)
console.log(`Horas totales trabjadas durante la semana: ${acumularHoras}`)


let kilometro1 = 70
let kilometro2 = 150 

let puntoEncuentro = (kilometro1 + kilometro2) / 2
console.log('se encotraran en el km: ', puntoEncuentro)


let cantidadVentas = parseInt(prompt('Ingrese el numero de ventas: '))


let ventasMayor1000 = 0
let ventasMayor500Iguales1000 = 0
let ventasMenores500 = 0

let Montoventas1000 = 0
let MontoventasMayores500Igual1000 = 0
let MontoventasMenoresA500 = 0




for(let i = 1; i <= cantidadVentas; i++){
    let ventas = parseInt(prompt(`Ingrese el valor de la venta ${i}: `))

    if(ventas > 1000){
        Montoventas1000 += ventas
        ventasMayor1000 ++
    }
    else if(ventas > 500 && ventas <= 1000){
        MontoventasMayores500Igual1000 += ventas
        ventasMayor500Iguales1000 ++
    }
    else{
        MontoventasMenoresA500 +=ventas
        ventasMenores500 ++
    }
}

let MontoTotal = Montoventas1000 + MontoventasMayores500Igual1000 + MontoventasMenoresA500

console.log('ventas mayores a 1000: ', ventasMayor1000)
console.log('ventas mayores a 500 o iguales a 1000: ', ventasMayor500Iguales1000)
console.log('ventas menores a 500: ', ventasMenores500)



let meses = 20

let pagoMensual = 10
let pagoDefinitivo = 0

for( let i = 1; i <= meses; i++){
    console.log(`Pago mensual mes ${i}: ${pagoMensual}`)
    pagoDefinitivo += pagoMensual
    pagoMensual *=2

}
console.log('pago final es: ',pagoDefinitivo)



let empleados = parseInt(prompt('Ingrese la cantidad de empleados: '))

let PagosxHora = 1200

let pagoEmpresa = 0

let dias = 6

for(let i = 1; i <= empleados; i++){
    let horasSemanal = 0

    for(let j = 1; j <= dias; j++){
        let horasTrabajadas = parseInt(prompt(`Ingrese las horas del empleado ${i} en el dia ${j}`))
        horasSemanal += horasTrabajadas
    }

    let sueldoSemanal = horasSemanal * PagosxHora
    pagoEmpresa += sueldoSemanal
    console.log(`Sueldo semanal del trabajador ${i}: ${sueldoSemanal}`)
}

console.log(`Total pagado por la empresa: ${pagoEmpresa}`)

let empleados = parseInt(prompt('Ingrese la cantidad de empleados: '))

let pagoXHora = 1200

let totalEmpresa = 0



for(let i = 1 ; i <= empleados; i++){
    let diasLaborados = parseInt(prompt(`Ingrese los dias que trabajo el empleado ${i}`))
    let horasDiarias = 0

    console.log(`El empleado ${i} trabajo ${diasLaborados} dias`)

    for(j = 1 ; j <= diasLaborados; j++){
        let horasTrabajadas = parseInt(prompt(`Ingrese las horas trabajadas del empleado ${i} en el dia ${j} `))
        horasDiarias += horasTrabajadas

        
    }

    let sueldoPagar = horasDiarias * pagoXHora
    totalEmpresa +=sueldoPagar

    console.log(`Total pagado por la empresa: ${sueldoPagar}}`)
}

console.log(`Total pagado por la empresa: ${totalEmpresa}`)


let ciudades = parseInt(prompt('Ingrese la cantidad de ciudades de la republica:'))

let VentasSoloDia = 0

for(let i = 1; i < ciudades; i++){
    let tiendas = parseFloat(prompt(`Ingrese las tiendas de la ciudad: ${i}`))
    let ventasXCiudad = 0

    for(j = 1; j <= tiendas; j++){
        let nEmpleados = parseInt(prompt(`Ingresa la cantidad de empleados de la tienda ${j}`))
        let ventasXTienda = 0
        for(let x= 1; x < nEmpleados; x ++){
            let ventasTiendita = parseFloat(prompt(`Realice el ingreso de venta por el empleado: ${x} de la tienda ${j}`))
            ventasXTienda += ventasTiendita
        }

        ventasXCiudad += ventasXTienda
        console.log(`Ventas de la tienda ${j}: ${ventasXTienda}`)
    }
    VentasSoloDia += ventasXCiudad
    console.log(`Ventas de la ciudad ${i}: ${ventasXCiudad}`)
}
console.log(`Ventas totales del día: ${VentasSoloDia}`)


let salario = 1500

let salarioCadaAnio = 0
let salario6Anios = 0

for(anio = 1; anio <= 6; anio++){

    salario *= 1.10
    salarioCadaAnio +=salario

    salario6Anios +=salarioCadaAnio
    console.log(`Salario del año ${anio}: $${salarioCadaAnio.toFixed(2)}`)
}
console.log(`El salario ahorrado durante los seis años fue: $${salario6Anios.toFixed(2)}`)*/




