window.onload = carregarFuncoes;

function carregarFuncoes(){
    corPrioridade();
    ordemPrioridade();
}

var prioridade = document.getElementsByClassName("prioridade");

function corPrioridade() {
    var prioridade = document.getElementsByClassName("prioridade");
    Array.from(prioridade).forEach(prio => {
        if (prio.textContent == 'Alta') {
            prio.style.backgroundColor = '#CF3F3F';
            prio.style.border = '0px solid #CF3F3F';
        } else if (prio.textContent == 'Média') {
            prio.style.backgroundColor = '#FFBD3D';
            prio.style.border = '0px solid #FFBD3D';
        } else if (prio.textContent == 'Baixa') {
            prio.style.backgroundColor = '#72C240';
            prio.style.border = '0px solid #72C240';
        }
    });
}

function ordemPrioridade(){
    var ordem = document.getElementsByClassName("ordem")[0];
    var altaPrioridade = [];
    var mediaPrioridade = [];
    var baixaPrioridade = [];

    Array.from(prioridade).forEach(prio => {
        var lista = prio.closest("ul");
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
