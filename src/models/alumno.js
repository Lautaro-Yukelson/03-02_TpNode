class Alumno {
    constructor (username, dni, edad){
        this.username = username
        this.dni = dni
        this.edad = edad
    }

    toString(){
        return `El nombre del alumno es ${this.username}, su dni es ${this.dni} y si edad es ${this.edad}`
    }
}

export default Alumno