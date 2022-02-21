let present = ["Hola"+"&#128522"+",mi nombre es Patrick, yo seré tu asiste virtual.<br>Elija una opción:<br>"];
let nivel = 0;
let dato1 = ["1.Informacion <br>","1.Informacion sobre la pagina <br> 2.Informacion sobre mi<br> 3.atras",["Toda la info sobre la pagina <br> 1.Volver","Tengo 17 años y vivo en Ambo <br> 1.Volver"]];
let dato2 = ["2.Contactos <br>","Correo: angelopatrick@gmail.com <br> Celular: 923929304 <br> 1.atras"];
let dato3 = ["3.Codigos","1.Codigo Java <br> 2.Codigo Python <br> 3.Codigo HTMl <br> 4.atras",["Codigo Java video1 <br>","Codigo Java Video2 <br>","Codigo python video1 <br>","Codigo python Video2 <br>","Codigo HTML video1 <br>","Codigo HTML Video2 <br>","1.atras"]];
let Menuinicio = `${dato1[0]}${dato2[0]}${dato3[0]}`;
const chat = document.querySelector(".mensaje-chat");

creacionDelDivBot(present[0]+Menuinicio);

function responderCliente(){
    let recibir = document.getElementById("mensaje").value;
    //creo dos tipos de div mensaje enviado y mensaje a recibir
    
    // Este if servirá para liminar los caracteres ingresados
    
    //creamos el div con el mensaje recibido del cliente
    creacionDelDivCliente(recibir);


    if(recibir !== "1" && recibir !== "2" && recibir !== "3" && recibir !== "4"){
        creacionDelDivBot(`Mensaja no válido &#128552`);
    }else{
        if(nivel === 0){
            if(recibir === "1"){
                creacionDelDivBot(dato1[1]);
                aux1 = "a";
            }
            if(recibir === "2"){
                creacionDelDivBot(dato2[1]);
                aux1 = "b";
            }
            if(recibir === "3"){
                creacionDelDivBot(dato3[1]);
                aux1 = "c";
            }
            /*Se puede agregar mas men+us*/
        }
        
        if(nivel === 1){
            if(aux1 === "a"){
                if(recibir === "1"){
                    creacionDelDivBot(dato1[2][0]);
                    aux2 = "grupo1";
                }
                if(recibir === "2"){
                    creacionDelDivBot(dato1[2][1]);
                    aux2 = "grupo2";
                }
                if(recibir === "3"){
                    nivel = nivel - 2;
                    creacionDelDivBot(Menuinicio);
                }
            }
            if(aux1 === "b"){
                if(recibir === "1"){
                    // este codigo es para volver atras
                    nivel = nivel - 2;
                    creacionDelDivBot(Menuinicio);
                }
            }
            if(aux1 === "c"){
                if(recibir === "1"){
                    aux2 = "grupo3";
                    creacionDelDivBot(`${dato3[2][0]}${dato3[2][1]}${dato3[2][6]}`);
                }
                if(recibir === "2"){
                    aux2 = "grupo4";
                    creacionDelDivBot(`${dato3[2][2]}${dato3[2][3]}${dato3[2][6]}`);
                }
                if(recibir === "3"){
                    aux2 = "grupo5";
                    creacionDelDivBot(`${dato3[2][4]}${dato3[2][5]}${dato3[2][6]}`);
                }
                if(recibir === "4"){
                    //este codiogo es para volver atras
                    nivel = nivel - 2;
                    creacionDelDivBot(Menuinicio);
                }
            }
            /*Se puede agregar mas men+us*/
        }
    
        if(nivel === 2){
            if(aux2 === "grupo1" || aux2 === "grupo2"){
                if(recibir === "1"){
                    nivel = nivel - 2;
                    creacionDelDivBot(dato1[1]);
                }
            }
            if(aux2 === "grupo3" || aux2 === "grupo4" || aux2 === "grupo5"){
                if(recibir === "1"){
                    nivel = nivel - 2;
                    creacionDelDivBot(dato3[1]);
                }
            }
        }
        nivel++;
    }
    
    
    document.getElementById("mensaje").value = "";
    // cuando se haga click en boton y ejecute la funcion todo ya estara condicionado para que pueda ingresar al if correspondiente
}
//creaaciones de div correpondientes a cada caso
/*
Existen dos casos el mensaje que envió el cliente
y el mensaje que va enviar el chat bot.
*/

function creacionDelDivCliente(recibirMensaje){
    const divDerecho = document.createElement("DIV");
    divDerecho.classList.add("div-derecho-chat-cliente");
    chat.appendChild(divDerecho);
    
    const divCliente = document.createElement("DIV");
    divDerecho.appendChild(divCliente);
    divCliente.classList.add("mensaje-cliente");
    divCliente.innerHTML = `${recibirMensaje}`;
}

function creacionDelDivBot(enviarMensajeBot){
    const divIzquierdo = document.createElement("DIV");
    divIzquierdo.classList.add("div-izquierdo-chat-bot");
    chat.appendChild(divIzquierdo);

    const divBot = document.createElement("DIV");
    divIzquierdo.appendChild(divBot);
    divBot.classList.add("mensaje-bot");
    divBot.innerHTML = `${enviarMensajeBot}`;
}

//funcion del boton para cerrrar el chat y mostra el icon
function cerrarChat(){
    const iconChat = document.getElementById("botonIconChat");
    const divChat = document.getElementById("chat");
    iconChat.style.display = "block";
    divChat.style.display = "none";
}