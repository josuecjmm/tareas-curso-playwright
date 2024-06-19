// ARRAY 
const carros = ['honda', 'toyota', 'suzuki'];
console.log(carros)
carros.push('volkswagen')
console.log(carros)
// carros = ['Lancia'] => NO SE PUEDE HACER 

// OBJETO 
const carro = {
    marca: 'Suzuki',
    ano: 1997,
    modelo: 'Sidekick'
}

console.log(carro)

carro.motor = 1600;

console.log(carro)

delete carro.motor; 

console.log(carro)

// No permite que un objeto se modifique mas en el tiempo!
// static final 
Object.freeze(carro)

carro.motor = 1600;

console.log(carro)

