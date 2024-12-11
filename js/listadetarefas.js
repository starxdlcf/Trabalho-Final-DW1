const button = document.querySelector(".botao")
const listaCompleta = document.querySelector('.lista-tarefas')
const contato = document.querySelector(".contato-box")
const body = document.querySelector("body")
const select = document.querySelector("#select")
const caixa = document.querySelector(".box")
const input = document.querySelector(".selecionar")
const botao = document.querySelector(".botao")
const h1 = document.querySelector("h1")
const lista = document.querySelector();

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
    if(select.value == "azul"){
        body.style.backgroundImage = "url('../imagensfundo/gelo fundo.jpeg')";
        caixa.style.backgroundColor = "var(--gelo-cor-caixa)";
        input.style.color = "var(--gelo-cor-texto)";
        input.style.backgroundColor = "var(--gelo-cor-input)";
        botao.style.backgroundColor = "var(--gelo-cor-botao-adicionar)";
        botao.style.color = "var(--gelo-cor-botoes-lista)";
        h1.style.color = "var(--gelo-cor-texto)";
        lista.style.backgroundColor = "blue"
        
    } else{
        if(select.value == "vermelho"){
            body.style.backgroundImage = "url('../imagensfundo/lava fundo.jpeg')"
            caixa.style.backgroundColor = "var(--lava-cor-caixa)"
            input.style.color = "var(--lava-cor-texto)"
            input.style.backgroundColor = "var(--lava-cor-input)"
            botao.style.backgroundColor = "var(--lava-cor-botao-adicionar)"
            botao.style.color = "var(--lava-cor-botoes-lista)"
            h1.style.color = "var(--lava-cor-texto)"

        } else{
            if(select.value == "cinza"){
                body.style.backgroundImage = "url('../imagensfundo/montanha-fundo.jpeg')"
                caixa.style.backgroundColor = "var(--montanha-cor-caixa)"
                input.style.color = "var(--montanha-cor-texto)"
                input.style.backgroundColor = "var(--montanha-cor-input)"
                botao.style.backgroundColor = "var(--montanha-cor-botao-adicionar)"
                botao.style.color = "var(--montanha-cor-botoes-lista)"
                h1.style.color = "var(--montanha-cor-texto)"

            } else{
                if(select.value == "marrom"){
                    body.style.backgroundImage = "url('../imagensfundo/terra fundo.jpeg')"
                    caixa.style.backgroundColor = "var(--terra-cor-caixa)"
                    input.style.color = "var(--terra-cor-texto)"
                    input.style.backgroundColor = "var(--terra-cor-input)"
                    botao.style.backgroundColor = "var(--terra-cor-botao-adicionar)"
                    botao.style.color = "var(--terra-cor-botoes-lista)"
                    h1.style.color = "var(--terra-cor-texto)"

                } else{
                    if(select.value == "verde" || select.value == "selecionar"){
                        body.style.backgroundImage = "url('../imagensfundo/pexels-taryn-elliott-4840134.jpg')"
                        caixa.style.backgroundColor = "var(--floresta-cor-caixa)"
                        input.style.color = "var(--floresta-cor-texto)"
                        input.style.backgroundColor = "var(--floresta-cor-input)"
                        botao.style.backgroundColor = "var(--floresta-cor-botao-adicionar)"
                        botao.style.color = "var(--floresta-cor-botoes-lista)"
                        h1.style.color = "var(--floresta-cor-texto)"

                    }
                }
            }
        }
    }
}

button.addEventListener('click', inputvalor)
