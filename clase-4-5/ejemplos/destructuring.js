const moto = {
    marca: 'Honda',
    modelo: 'CRF',
    tipoMotor: 4
}

console.log('marca=>', moto.marca)
console.log('modelo=>', moto['modelo'])
console.log('modelo=>', moto.modelo)
const {marca, modelo, tipoMotor} = moto; 
console.log('modelo=>', modelo)