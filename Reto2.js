let code = prompt('Ingrese su código')
let names = prompt('Ingrese sus nombres y apellidos')
a = Number((Math.random()*20).toFixed(2))
b = Number((Math.random()*20).toFixed(2))
c = Number((Math.random()*20).toFixed(2))

alert(`Nota 1: ${a}`)
alert(`Nota 2: ${b}`)
alert(`Nota 3: ${c}`)

let prom = Number(((a + b + c)/3).toFixed(2))

document.write(
    `<h1>Información Académica</h1>
    <h2>Código: <span>${code}</span></h2> 
    <h2>Nombres: <span>${names}</span></h2>`
    )
if(prom < 10) {
    document.write(
        `<h2>Promedio Final: <span style="color:red;">${prom} (Curso desaprobado)</span></h2>`
        )
}else {
    document.write(
        `<h2>Promedio Final: <span style="color:blue;">${prom} (Curso aprobado)</span></h2>`
    )
}
