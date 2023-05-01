

btn_salvar.addEventListener("click", ()=>{

    nome_jogador.innerText = digite_nome.value==""? alert("digite outro numero") :   dv_jogador.hidden = true         ;
    nome_jogador.innerText = digite_nome.value;
    
    
      })
    
    
    



let positions = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];
  
  
  var maquina = [];
  var jogador = [];   
  var jogando = true; 
  
  
  








var pecas = document.querySelectorAll("button");   
var resultado = document.querySelector("#resultado");











function Init() {
maquina = [];
jogador = [];
jogando = true;




for (let n = 0; n < pecas.length; n++) {
    
    pecas[n].innerText = "";
    pecas[n].style.color = "black";
    pecas[n].style.fontSize = "20px";


pecas[n].addEventListener("click", Marca);

}




}




Init()




function Marca(e) {
 
    if (digite_nome.value == "" || nome_jogador.innerText== "") { alert("digite e salve seu nome pra começa"); return }
    
    
    var index = Number(e.target.getAttribute("data-peca"));
    
    e.target.removeEventListener("click", Marca);
    jogador.push(index) 
    
    //console.log(`${jogador_pontos}:`"valor jogador: "+ index);
    
    
    
    if (jogando==true)  e.target.innerText = "x"
    
     verificar();
    

    
    }
    
    
    
    


function verificar() {
    if (!(jogando)) {  return;}  
    
    
    for (pot of positions) {
     
        if (pot.every( (item) => jogador.includes(item))) {
            resultado.innerHTML =   `<b>${nome_jogador.innerText}</b> ganhou!!`;
     
          //  jogador_pontos
    
    
      for (let n = 0; n < pot.length; n++) {
        pecas[ (pot[n] - 1) ].style.color = "blue"
        pecas[(pot[n] -1)].style.fontSize = "30px"
        
        
      }
    
    
    
    
    Number(partidas.innerText++)
    Number(jogador_pontos.innerText++);
    
    
          jogando = false;
    
    
    
    
    setTimeout(() => {
        
    
    
    
    
    
    
    
    setTimeout(() => {
        resultado.innerText = "Jogo está iniciando..."
      
    }, 500);
    
    
    Init()
    
    
    jogando = true;
    
    
    }, 5000);
    
    
    
    
    
    
    
    
    
    
    
          return;
        }
     }
    
     
    
    
     Maquina()
     for (teste of positions) { 
    
     
     if (teste.every( (item) => maquina.includes(item))) {
    resultado.innerText = "Maquina ganhou!!";
    
    
    for (let n = 0; n < pot.length; n++) {
        pecas[ (teste[n] - 1) ].style.color = "blue"
        pecas[(teste[n] -1)].style.fontSize = "30px"
        
        
      }
    
    
    Number(partidas.innerText++)
    Number(maquina_pontos.innerText++);
    
     
    //Init();
    
    
    
    
    
    
    
    
    setTimeout(() => {
        
    
    
    
    
    
    
    
        setTimeout(() => {
            resultado.innerText = "Jogo está iniciando..."
          
        }, 500);
        
        
        Init()
        
        
        jogando = true;
        
        
        }, 5000);
        
        
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
     
       return;
     }
     
    
    
    
    }
    
    
    
    
    
    
    
    
    }
    
    
    




function Maquina() {
    


        
    if ((maquina.length + jogador.length) < 8) {
        
        do {
         var   num = Math.floor(Math.random() * 9) + 1;
        
        
          } while (jogador.includes(num) || maquina.includes(num) );
           
        
          maquina.push(num);  
        pecas[(num -1)].innerText=  "0"; 
        console.log("gerado: "+ num)
        
    
    console.log("valor: "+ (maquina.length + jogador.length))
            
        }else{
    
            resultado.innerText = "Jogo de impate";
 



setTimeout(()=>{

    Number(partidas.innerText++)

setTimeout(() => {
    resultado.innerText = "Jogo está iniciando..."
  
}, 500);


Init()


jogando = true;


}, 5000);




        }
        
    

    }
    
    

 


    
    