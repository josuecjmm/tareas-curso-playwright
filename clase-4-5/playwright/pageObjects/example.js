// FUNCTIONAL
const persona1 = {
    nombre: 'Pablo', 
    edad: 30,
    calcula: function() {
        console.log(2 + 2 )
    }
}

persona1.calcula()
persona1.nombre; 

// OOP 
class Persona1 {
    get nombre() {
        return 'Pablo'
    }

    get edad() {
        return 30
    }

    calcula() {
        console.log(2+2)
    }
}

// instanciar 
const persona = new Persona1()

persona.nombre; 
persona.calcula()
console.log('typeof=>', typeof persona)

