const mysql = require('mysql');

// PARTE 1
const N = parseInt(process.argv[2], 10)
const X = parseInt(process.argv[3], 10)
console.log(`N: ${N}`)
console.log(`X: ${X}`)

let MTZ = []
let MTZzero = []

// generar matriz MTZ con valores aleatorios
for (let i = 0; i < N; i++) {
    MTZ[i] = []
    for (let j = 0; j < N; j++) {
        MTZ[i].push(parseInt(Math.random() * (10 - 1) + 1))
    }
}
console.log(`MTZ generada:`)
console.table(MTZ)

// estructuras usadas en las preguntas
let existsX = {
    X: X,
    exists: false,
    fila: -1,
    columna: -1
}

let biggestNum = -1
let biggest = {
    n: biggestNum,
    fila: -1,
    columna: -1
}

// iterar para determinar si X existe y encontrar el número más grande
for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        // existencia de X
        if (MTZ[i][j] === X) {
            existsX.exists = true
            existsX.fila = i
            existsX.columna = j
        }
        // número más grande
        if (MTZ[i][j] > biggestNum) {
            biggestNum = MTZ[i][j]
            biggest = {
                n: biggestNum,
                fila: i,
                columna: j
            }
        }
    }
}

// iterar para poner en 0 las dos diagonales
for (let i = 0; i < N; i++) {
    MTZzero[i] = []
    for (let j = 0; j < N; j++) {
        MTZzero[i].push(MTZ[i][j])
        if (i === j) {
            MTZzero[i][j] = 0
        }
        if (i === N - j - 1) {
            MTZzero[i][j] = 0
        }
    }
}

console.log(`1. Número X existe en MTZ:`)
console.log(existsX)
console.log(`2. Número más grande:`)
console.log(biggest)
console.log(`3. MTZ con ceros:`)
console.table(MTZzero)


// PARTE 2
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "TestCustom1"
})

const sqlAll = `SELECT * FROM Cliente`
const sql4 = `SELECT * FROM Cliente WHERE Apellido1 LIKE 'A%'`
const sql5 = `SELECT count(*) FROM Cliente WHERE Pais_Residencia = 'Colombia'`
const sql6 = `SELECT Pais_Residencia, count(Pais_Residencia) FROM Cliente GROUP BY Pais_Residencia`
const sql7 = `SELECT * FROM Cliente WHERE (Pais_Residencia = 'Colombia') AND (Apellido1 = 'Gutierrez' OR Apellido2 = 'Gutierrez')`
const sql11 = `SELECT Pais_Residencia, count(Pais_Residencia) FROM Cliente GROUP BY Pais_Residencia HAVING count(Pais_Residencia) < 4`

con.connect(function(err) {
  if (err) throw err
  con.query(sql4, function (err, result, fields) {
    if (err) throw err
    console.log(`Punto 4:`)
    console.log(result)
  })
  con.query(sql5, function (err, result, fields) {
    if (err) throw err
    console.log(`Punto 5:`)
    console.log(result)
  })
  con.query(sql6, function (err, result, fields) {
    if (err) throw err
    console.log(`Punto 6:`)
    console.log(result)
  })
  con.query(sql7, function (err, result, fields) {
    if (err) throw err
    console.log(`Punto 7:`)
    console.log(result)
  })
  con.query(sql11, function (err, result, fields) {
    if (err) throw err
    console.log(`Punto 11:`)
    console.log(result)
  })
  con.end()
})

console.log(`Punto 8: NULO podrían ser Nombre2 y Apellido2 en caso de que el cliente no tenga nombre compuesto, o que no se tenga la información del segundo apellido.`)
console.log(`Punto 9: Restricción de contenido deberían tener T_Documento y Pais_Residencia porque tanto el tipo de documento y los países de residencia deben estar limitados a ciertos valores bien definidos.`)
console.log(`Punto 10: Para evitar clientes duplicados en la tabla se debería poner una llave primaria PK, o una restricción de unicidad UNIQUE en un campo como el N_Documento.`)
