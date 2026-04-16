function extensoes() {
    return {
        //declarando os objetos
        card: document.querySelector('.extensoes'),
        nav: document.querySelector('.cabecalho'),
        btns: document.querySelectorAll('button'),

        //chama as funções para o código executar
        iniciar() {
            this.excluir();
            this.menu();
        },

        //Gerencia a remoção de cards e outras interações dentro da seção de extensões
        excluir() {
            const divs = document.querySelectorAll('article');
            this.card.addEventListener('click', e => {
                let el = e.target;
                if (el.classList.contains('remover')) {
                    const card = el.closest('article');
                    if (card) {
                        card.remove();
                    }
                };

                if(el.type ==='checkbox'){
                  if(el.checked === true){
                    this.inativos();
                  } else{
                    this.ativos();
                  }
                }
            })
        },

        //e esse monitora os eventos do nav
        menu() {
            this.nav.addEventListener('click', (e) => {
                let el = e.target;
                if (el.tagName === 'BUTTON') {
                    this.todos(el);
                }
            })
        },

        //limpa qualquer elemento que esteja oculto
        limparClass() {
            const divs = document.querySelectorAll('article');
            for (let classes of divs)
                if (classes.classList.contains('invisivel')) {
                    classes.classList.remove('invisivel')
                }
        },

        //serve para esconder todos os inputs que não estiverem marcados
        ativos() {
            const divs = document.querySelectorAll('article');
            this.limparClass(); //limpa a classe antes de aplicar uma nova
            for (let ar of divs) {
                let slide = ar.querySelector('input[type ="checkbox"]');
                if (slide.checked === false) {
                    let article = slide.closest('article')
                    article.classList.add('invisivel');
                };
            }
        },

        //e esse metódo esconde todos os que estiverem marcados
        inativos() {
            const divs = document.querySelectorAll('article');
            this.limparClass();
            for (let arti of divs) {
                let slide = arti.querySelector('input[type ="checkbox"]');
                if (slide.checked === true) {
                    let article = slide.closest('article')
                    article.classList.add('invisivel');
                };
            }
        },

        //esse metódo monitora todo a funcionalidade do menu, aplica uma classe quando o botão é apertado e executa os metódos correspondentes a esse botão
        todos(elemento) {
            //limpa as classes  antes de aplicar uma nova
            const divs = document.querySelectorAll('article');
            for (let bt of this.btns) {
                bt.classList.remove('clicado');
            }
            elemento.classList.add('clicado');

            //chama um metódo diferente de acordo com o botão clicado
            if (elemento.classList.contains('active')) this.ativos();
            if (elemento.classList.contains('all')) this.limparClass();
            if (elemento.classList.contains('inactive')) this.inativos();
        },
    }
}

const extensao = extensoes();
extensao.iniciar();
