const botoes = document.querySelectorAll("botao");

for(let 1=0;i <length;i++){
    botoes[i].onclick = function(){

        for(let j=0;j<botoes.length;j++){
            botoes[j].classList.remove("ativo");
        }

        botoes[i].classlist.remove("ativo");
    }
}