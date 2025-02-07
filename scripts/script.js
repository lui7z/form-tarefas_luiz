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

corPrioridade()

function criarTarefa(){
    const listaDeTarefas = document.getElementById('listaDeTarefas');
    
    console.log(listaDeTarefas);
}

