function calculadora() {
    return{
        conta: document.querySelector('#conta'),
        nPessoas: document.querySelector('#pessoas'),
        botoes:document.querySelector('.grid-botoes'),

        calculoGorjeta(){
            let valorCompleto = number(this.conta);
            this.botoes.addEventListener('click', (e) => {
                let el = e.target;
                if(el.classList.contains('btn-tip')){
                    const total = this.conta.value * (el.value)/this.nPessoas;
                    console.log(total)
                }
            })
        },
    }
};

console.log(valorCompleto);
calculadora();
