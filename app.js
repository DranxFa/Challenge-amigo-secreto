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
    limpiarResultado();
}

function limpiarCaja(){
    document.getElementById("amigo").value = "";
}

function limpiarResultado(){
    resultadoSorteo.innerHTML = "";
}

function limpiarLista(){
    listaAmigos.innerHTML = "";
}

function llenarHTML(amigos){
    limpiarLista();
    amigos.forEach(amigo => {        
        let lista = document.createElement('li');
        lista.textContent = amigo;
        listaAmigos.append(lista);
    });
}

function sortearAmigo() {
    if (amigos.length < 2){
        alert("Por favor, ingrese al menos dos amigos para sortear.");
        return;
    }
    numeroAleatorio = Math.floor(Math.random()*amigos.length);

    limpiarLista();
    resultadoSorteo.textContent = `El amigo es ${amigos[numeroAleatorio]}`;
    amigos = [];
}
