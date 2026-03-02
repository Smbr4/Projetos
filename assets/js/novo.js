const tarefa = document.querySelector('.tarefa');
const botao = document.querySelector('.enviar');
const exibir = document.querySelector('.exibir');

//eventos do site

// monitora o click no botão enviar
botao.addEventListener('click', function(e){
    e.preventDefault();
    if (!tarefa.value) return;
    criarLista();
})

//monitora se o usuário pressiona enter 
tarefa.addEventListener('keypress', function(e){
    if (e.key === 'Enter'){
        e.preventDefault();
        if (!tarefa.value) return;
        criarLista();
    }   
})

//espera o usuário clicar em apagar
document.addEventListener('click', function(e){
    let el = e.target;

    if(el.classList.contains('apagar')){
        el.parentElement.remove();
        salvarTarefas();
    }
})

//funções para funcionamento do site

function criarLista(textoTarefa){
    const li = document.createElement('li');
    //se veio texto do localStorage, usa ele. Se não, usa o que está no input
    if (textoTarefa){
        li.innerText = textoInput;
    }else {
        li.innerText = tarefa.value;
    }

    exibir.appendChild(li);
    botaoApagar(li);
    limparInput();
    salvarTarefas();
}

function limparInput(){
    tarefa.value = '';
    tarefa.focus();
}

function botaoApagar(li){
    const apagar = document.createElement('button');
    apagar.innerText = 'Apagar';
    apagar.setAttribute('class', 'apagar');
    li.appendChild(apagar);
}

function salvarTarefas(){
    const listTa = exibir.querySelectorAll('li');
    const arrayTarefas = [];

    for (let tarefa of listTa){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', ' ').trim();
        arrayTarefas.push(tarefaTexto);
        console.log(arrayTarefas);
    }

    listaJson = JSON.stringify(arrayTarefas);

    //no setItem('como eu quero salvar', o que vou salvar);
    //armazena em um espaço reservado do navegador
    localStorage.setItem('tarefas', listaJson);
}

function adicionarSalvas(){
    //pega a string json e armazena
    const tarefasJ = localStorage.getItem('tarefas');

    // converte a string JSON em array
    const tarefaA = JSON.parse(tarefasJ);
    
    //percorre o array exibindo
    for (let tarefa of tarefaA){
        criarLista(tarefa);
    }
}

// é responsável por guardar os itens da lista quando a página for atualizada
adicionarSalvas();
