import { TAREFAS } from './constantes.js'

document.addEventListener('DOMContentLoaded', carregarFuncoes);

function carregarFuncoes(){
    corPrioridade();
    ordemPrioridade();
    criarTarefa();
}

function corPrioridade() {
    var prioridades = document.getElementsByClassName("prioridade");
    Array.from(prioridades).forEach(prio => {
        if (prio.textContent == 'Alta') {
            prio.classList.add('prioridade-alta');
        } else if (prio.textContent == 'Média') {
            prio.classList.add('prioridade-media');
        } else if (prio.textContent == 'Baixa') {
            prio.classList.add('prioridade-baixa');
        }
    });
}

function ordemPrioridade(){
    var ordem = document.getElementsByClassName("ordem")[0];
    var altaPrioridade = [];
    var mediaPrioridade = [];
    var baixaPrioridade = [];
    var prioridades = document.getElementsByClassName("prioridade");

    Array.from(prioridades).forEach(prio => {
        var lista = prio.closest("li");
        if (prio.textContent == 'Alta') {
            altaPrioridade.push(lista);
        } else if (prio.textContent == 'Média') {
            mediaPrioridade.push(lista);
        } else if (prio.textContent == 'Baixa') {
            baixaPrioridade.push(lista);
        }
    });

    while (ordem.firstChild) {
        ordem.removeChild(ordem.firstChild);
    }

    altaPrioridade.forEach(lista => ordem.appendChild(lista));
    mediaPrioridade.forEach(lista => ordem.appendChild(lista));
    baixaPrioridade.forEach(lista => ordem.appendChild(lista));
}

function criarTarefa(){
    const listaDeTarefas = document.getElementById('listaDeTarefas');

    console.log(listaDeTarefas);
}

