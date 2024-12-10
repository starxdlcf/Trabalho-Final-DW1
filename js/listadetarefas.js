const button = document.querySelector(".botao")
const input = document.querySelector(".selecionar")
const listaCompleta = document.querySelector('.lista-tarefas')
const contato = document.querySelector(".contato-box")
const body = document.querySelector("body")

let arraylista = []



function inputvalor() {
    arraylista.push({

        tarefanome: input.value,
        concluida: false,
    })

    console.log(arraylista)
    mostrartarefas()
    atualizarprogresso()
    input.value = ''

}

function mostrartarefas() {

    let tarefa = ''


    arraylista.forEach((item, posição) => {

        tarefa = tarefa + `
        <li class="tarefas ${item.concluida && "feito"}">
        <button class="check" onclick = "concluirtarefa(${posição})">
            <i class=" check-feito ${item.concluida && "bi bi-check2"}" ></i>
        </button>
        <div class="texto-tarefa">
            <p>
                ${item.tarefanome}
            </p>

        </div>

        <div class="icons">
            <i class="bi bi-pencil-square" onclick="editartarefa(${posição})"></i>
            <i class="bi bi-trash" onclick = "deletaritem(${posição})" ></i>
        </div>
    </li>
 `
    })

    listaCompleta.innerHTML = tarefa
}

function deletaritem(posição) {
    arraylista.splice(posição, 1)

    console.log(posição)

    mostrartarefas()
    atualizarprogresso()
}


function concluirtarefa(posição) {
    arraylista[posição].concluida = !arraylista[posição].concluida

    mostrartarefas()
    atualizarprogresso()
    console.log(posição)
}


function editartarefa(posição) {
    const itemElement = listaCompleta.children[posição]; // Encontra o item na lista
    const textoTarefaDiv = itemElement.querySelector('.texto-tarefa');

    
    textoTarefaDiv.innerHTML = `
        <input type="text" value="" class="edit-input">`;


    const inputElement = textoTarefaDiv.querySelector('.edit-input');
    inputElement.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            salvartarefa(posição, inputElement.value);
        }
    });

    // Coloca o foco no campo de entrada
    inputElement.focus();
}


function salvartarefa(posição, novovalor) {
    // Atualiza o valor no array
    arraylista[posição].tarefanome = novovalor;

    // Re-renderiza a lista de tarefas

    mostrartarefas();

}


function atualizarprogresso(){
    const totaltarefas = arraylista.length; // Calcula o total de tarefas dinamicamente
    const tarefasconcluidas = arraylista.filter(item => item.concluida).length; // Filtra as tarefas concluídas dinamicamente

    const progresso = totaltarefas > 0 ? (tarefasconcluidas / totaltarefas) * 100 : 0;

    const barraProgresso = document.querySelector('.progresso');
    barraProgresso.style.width = `${progresso}%`;

    const progressoTexto = document.getElementById('progresso-texto');
    progressoTexto.textContent = `Progresso: ${tarefasconcluidas} de ${totaltarefas} (${Math.round(progresso)}%) concluídas`;

}


document.addEventListener('keydown',(event) =>{
    if (event.ctrlKey && event.key === 'h') {
        event.preventDefault(); // Evita o comportamento padrão do navegador
        abrirContato();
    }

});

function abrirContato(){
    contato.style.display = "flex"
    contato.style.color = "blue"
}

function fechacontato(){
    contato.style.display = 'none'
    
}

function backgroundChange(){
    body.style.backgroundImage = "url(../imagensfundo/terra fundo.jpeg)"
}


button.addEventListener('click', inputvalor)
