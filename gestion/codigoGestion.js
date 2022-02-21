// todos los datos serán registrados en un arreglo de objetos

class Persona{
    constructor(nombre,apellidos,edad,dni,fechaNacimiento){
        this.nombre = nombre;
        this.apellido = apellidos;
        this.edad = edad;
        this.dni = dni;
        this.fechaNacimiento = fechaNacimiento;
    }

    get getNombre(){
        return this.nombre;
    }
    set setNombre(newName){
        this.nombre= newName;
    }

    get getApellido(){
        return this.apellido;
    }
    set setApellido(newName){
        this.apellido= newName;
    }

    get getEdad(){
        return this.edad;
    }
    set setEdad(newName){
        this.edad= newName;
    }

    get getdni(){
        return this.dni;
    }
    set setDni(newName){
        this.dni = newName;
    }
    
    get getFechaDeNacimiento(){
        return this.fechaNacimiento;
    }
    set setFechaDeNacimiento(newName){
        this.fechaNacimiento = newName;
    }
}


// creamos una clase de gestion cliente que tendrá un atributo más del monto de cuenta
class Cliente extends Persona{
    constructor(nombre,apellidos,edad,dni,fechaNacimiento,monto){
        super(nombre,apellidos,edad,dni,fechaNacimiento);
        this.monto = monto;
    }
    get getMonto(){
        return this.monto;
    }
    set setMonto(newName){
        this.monto = newName;
    }
    // metodo particulares como modificar cuenta, eliminar cuenta
}

// creamos un arreglo de objetos
let nombreInput = document.querySelector("#input-nombre");
let apellidosInput = document.querySelector("#input-apellidos");
let edadInput = document.querySelector("#input-edad");
let dniInput = document.querySelector("#input-dni");
let fechaInput = document.querySelector("#input-fecha-nacimiento");
let montoInput = document.querySelector("#input-monto");
const tabla = document.querySelector(".tabla");
let arregloDeObjetos = [];


function registrarDatos(){ 
    const cliente = new Cliente(nombreInput.value,apellidosInput.value,edadInput.value,dniInput.value,fechaInput.value,montoInput.value);
    arregloDeObjetos.push(cliente);
    console.log(arregloDeObjetos);
    crearCasillas(nombreInput.value,apellidosInput.value,edadInput.value,dniInput.value,fechaInput.value,montoInput.value);
}

function crearFila(){
    // crear una fila en la table y tambien las casilla
    const fila = document.createElement("TR");
    fila.classList.add("fila-tabla");
    tabla.appendChild(fila);
    return fila;
}

function crearCasillas(nombre,apellidos,edad,dni,fechaNacimiento,monto){
    const filaAuto = crearFila();
    const casillas = Array(6);
    
    //creacion de las casillas de la fila
    for(let i=0;i<casillas.length;i++){
        console.log(casillas.length);
        const casillaCreada = document.createElement("TD"); 
        casillas[i] = casillaCreada;
        casillas[i].classList.add("info-tabla");
        filaAuto.appendChild(casillas[i]);
        switch(i){
            case 0:
                casillaCreada.innerText = nombre;
                break;
            case 1:
                casillaCreada.innerText = apellidos;
                break;
            case 2:
                casillaCreada.innerText = edad;
                break;
            case 3:
                casillaCreada.innerText = dni;
                break;
            case 4:
                casillaCreada.innerText = fechaNacimiento;
                break;
            case 5:
                casillaCreada.innerText = monto;
                break;
        }
    }
}