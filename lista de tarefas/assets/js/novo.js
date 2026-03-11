function tarefas() {
    return {
        tarefa:document.querySelector('.tarefa'),
        exibir: document.querySelector('.exibir'),
        botao: document.querySelector('.enviar'),
        container: document.querySelector('.container'),

        mostrar() {
            this.verificar();
            this.apagarItem();
        },

        verificar(){
            this.botao.addEventListener('click', e => {
                e.preventDefault();

                if(!this.tarefa) {
                    alert('Favor adicionar uma tarefa');
                    return;
                };
                this.criarLista();
           }),

            this.tarefa.addEventListener('keypress', e => {
                if(!this.tarefa) {
                    alert('Favor adicionar uma tarefa');
                    return;
                };
                if(e.key === 'Enter') this.criarLista();
           })
        },

        apagarItem(){
            this.container.addEventListener('click', e =>{
                let el = e.target;

                if(el.classList.contains('apagar')){
                    el.parentElement.remove();
                    this.armazenarTarefa();
                }
            })
        },

        criarLista(textoTarefa) {
            let lista = document.createElement('li');

            if(textoTarefa){
                lista.innerText = textoTarefa;
            }else {
                if (!this.tarefa.value.trim()) return; // Evita tarefa vazia
                lista.innerText = this.tarefa.value; }

            this.exibir.appendChild(lista);
            this.botaoDelete(lista);
            this.limparInput();
            this.armazenarTarefa();
        },

        limparInput(){
            this.tarefa.focus();
            this.tarefa.value = '';
        },

        botaoDelete(li){
            let apagar = document.createElement('button');
            apagar.setAttribute('class', 'apagar');
            apagar.innerText = 'apagar';
            li.appendChild(apagar);
        },

        armazenarTarefa(){
            let task = this.exibir.querySelectorAll('li');
            let tarefasLista = [];

            for(t of task){
                let tareTexto = t.innerText;
                tareTexto = tareTexto.replace('apagar', '').trim(); // Remove o texto do botão
                tarefasLista.push(tareTexto);
            }
            
            const taskA = JSON.stringify(tarefasLista);

            localStorage.setItem('tarefaSalva', taskA)
        },

        restaurarTarefa(){
            const tarefaJ = localStorage.getItem('tarefaSalva');
            if (!tarefaJ) return;
            const tarefaA = JSON.parse(tarefaJ);

            for(t of tarefaA){
                this.criarLista(t);
            }
        }
    }   
}

const listaT = tarefas();
listaT.mostrar();
listaT.restaurarTarefa();