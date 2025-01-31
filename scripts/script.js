function corPrioridade() {
    const prioridade = document.getElementsByClassName("prioridade");
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

window.onload = definirPrioridade;
