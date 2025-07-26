// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = document.getElementById("listaAmigos");
let resultadoSorteo = document.getElementById("resultado");
let amigos = [];

function agregarAmigo() {
    let nombres = document.getElementById("amigo").value;
    if (nombres.trim() == ""){
        alert("Por favor, ingrese un nombre válido.");
        return
    }
    amigos.push(nombres);
    llenarHTML(amigos);
    limpiarCaja();
}

function limpiarCaja(){
    document.getElementById("amigo").value = "";
}

function llenarHTML(amigos){
    listaAmigos.innerHTML = "";
    amigos.forEach(amigo => {        
        let lista = document.createElement('li');
        lista.textContent = amigo;
        listaAmigos.append(lista);
    });
}

