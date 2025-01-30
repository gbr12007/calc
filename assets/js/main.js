function criarCalculadora(){
  return{
    display: document.querySelector('.display'),
    btnClear: document.querySelector('.btn-clear'),
    btnDel: document.querySelector('.btn-del'),

    get iniciar(){
      this.clicarBotao();
      this.pressionarEnter();
    },

    clicarBotao(){
      document.addEventListener('click', (e)=>{
        const el = e.target;
        if(el.classList.contains('btn-num')){
          this.btnParaDisplay(el.innerText);
        }
        if(el.classList.contains('btn-clear')){
          this.limparTela();
        }
        if(el.classList.contains('btn-del')){
          this.deletar();
        };
        if(el.classList.contains('btn-eq')){
          this.fazerConta();
        }
      })
    },

    pressionarEnter(){
      this.display.addEventListener('keyup', (e)=>{
        if(e.keyCode == 13){
          this.fazerConta();
        }
      })
    },

    fazerConta(){
      let conta = this.display.value;
      
      try{
        conta = eval(conta);
        if(!conta && conta !== 0){
          alert('Conta Invalída');
          return
        }
        this.display.value = conta;
      }catch(error){
        alert('Conta Invalída');
        window.console.log(error.messenge);
        return
      }
    },

    btnParaDisplay(valor){
      this.display.value += valor;
    },

    limparTela(){
      this.display.value = '';
    },

    deletar(){
      this.display.value = this.display.value.slice(0, -1);
    },
  };
}
const calculadora = criarCalculadora();
calculadora.iniciar;