
let lista = [];
let numero = document.getElementById('numero');
let indice = document.getElementById('indice');

ordenar();
numero.focus();


function adicionarFim() {
    lista.push(numero.value);

    numero.focus();
    numero.value = "";
    ordenar();

}

function adicionarInicio() {
    lista.unshift(numero.value);

    numero.focus();
    numero.value = "";
    ordenar();
}

function remover() {



    if (indice.value >= 0 && indice.value < lista.length) {

        lista.splice(indice.value, 1);
        indice.value = "";
        ordenar();




    } else {
        alert("Índice invalido!");
    }

}

function limpar() {
    lista = [];
    ordenar();
}

function ordenar() {
    lista.sort();
    document.getElementById("listaordenada").innerHTML = lista;
}


document.getElementById("btnFim").onclick = adicionarFim;
document.getElementById("btnInicio").onclick = adicionarInicio;
document.getElementById("btnLimpar").onclick = limpar;
document.getElementById("btnIndice").onclick = remover;