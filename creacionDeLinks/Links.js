// NECESITAMOS OBTENER EL VALOR DE LOS 
// DOS INPUTS PARA ASÍ CONCATENAR CON EL
// LINK BASE Y MOSTRARLO EN PANTALLA
// https://unheval.webex.com/join/echuquiyauriP1: 
let linkBase = "https://unheval.webex.com";
const tabla = document.querySelector(".tabla");
//necesitamos  obtener los valores
let valorFecha
let valorHour;
let valorTeacher;
let link1;

let cajaLink = document.querySelector(".link");

let numClase = 1;
//cantidad total de clases = 34 en el semestre
//Cada vez que se precione el boton generar link entonces:
/*
    N° Clase | fecha | Horario | Profesor| Link | Porcentaje de avance
*/
function crearLink(){
    valorFecha = document.getElementById("fechaInput").value;
    valorHour = document.getElementById("selecion-horario").value;
    valorTeacher = document.getElementById("selecion-profesor").value;
    link1 = `${linkBase}//${valorFecha}//${valorTeacher}`;
    let porcentajeCalc = (numClase/34)*100;
    
    crearLaFila(numClase,valorFecha,valorHour,valorTeacher,link1,porcentajeCalc.toFixed(3)+"%");
    cajaLink.innerHTML = `${link1}`;
    numClase++;
}

function crearLaFila(num,fecha,horario,profesorClase,link,porcentaje){
    //creacion de la fila
    const filaValores = document.createElement("TR");
    filaValores.classList.add("fila-tabla");
    tabla.appendChild(filaValores);


    //creacion de las columnas
    //debe recibir todos los valores
    const casillaNumClase = document.createElement("TD");
    casillaNumClase.classList.add("num-clase-table");
    casillaNumClase.innerHTML = num;
    filaValores.appendChild(casillaNumClase);

    const fechaClase = document.createElement("TD");
    fechaClase.classList.add("fecha-link-table");
    fechaClase.innerHTML = fecha;
    filaValores.appendChild(fechaClase);

    const horarioClase = document.createElement("TD");
    horarioClase.classList.add("horario-link-table");
    horarioClase.innerHTML = horario;
    filaValores.appendChild(horarioClase);

    const nombreProfesor = document.createElement("TD");
    nombreProfesor.classList.add("Profesor-link-table");
    nombreProfesor.innerHTML = profesorClase;
    filaValores.appendChild(nombreProfesor);

    const linkClase = document.createElement("TD");
    linkClase.classList.add("link-link-table");
    linkClase.innerHTML = link;
    filaValores.appendChild(linkClase);

    const avanceClase = document.createElement("TD");
    avanceClase.classList.add("avance-link-table");
    avanceClase.innerHTML = porcentaje;
    filaValores.appendChild(avanceClase);

}
function copiarLink(){
    
}

// function crearLink(){
//     let fecha = document.getElementById("fechaInput").value;
//     let teacher = document.getElementById("selecion-profesor").value;
//     let cajaLink = document.querySelector(".link");
//     cajaLink.innerHTML = `${linkBase}//${fecha}//${teacher}`;
// }