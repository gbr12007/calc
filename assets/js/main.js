function criarCalculadora(){
  return{
    display: document.querySelector('.display'),
    btnClear: document.querySelector('.btn-clear'),
    btnDel: document.querySelector('.btn-del'),
    get iniciar(){
      this.clicarBotao();
      this.pressionarEnter();
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
        if(!conta){
          alert('Conta Invalída');
          return
        }
        this.display.value = conta;
      }catch(error){
        alert('Conta Invalída');
        return
      }
    },

    btnParaDisplay(valor){
      this.display.value += valor;
    },

    clicarBotao(){
      document.addEventListener('click', (e)=>{
        const el = e.target;
        if(el.classList.contains('btn-num')){
          this.btnParaDisplay(el.innerText);
        }
        if(el.classList.contains('btn-clear')) return this.display.value = '';
        if(el.classList.contains('btn-del')){
          let arm = this.display.value.slice(0, -1);
          this.display.value = this.display.value.slice(0, -1);
          console.log(arm);
        };
        if(el.classList.contains('btn-eq')){
          this.fazerConta();
        }
      })
    },

    

  };
}
const calculadora = criarCalculadora();
calculadora.iniciar;