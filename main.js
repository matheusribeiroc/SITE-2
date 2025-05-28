const botoes =document.querySelectorAll(".botoes");
const textos =document.querySelectorAll(".aba-conteudo");
for (let i=0; i <botoes.length; i++){
    botoes [i].onclick = function(){
        for (let j=0; j < botoes.length; j++){
            botoes [j].classList.remove("ativo");
        textos[j] .classList.remove("ativo");
            }
            botoes[i].classList.add("ativo");
            textos[i].classList.add("ativo");
    }
}
const contadores = document.querySelectorAll("contador");
const tempoObjetivovol = new Date ("2026-02-01 12:00");
const tempoObjetivovo2 = new Date ("2026-02-01 00:00");
const tempoObjetivovo3 = new Date ("2027-02-01 12:00");
const tempoObjetivovo4 = new Date ("2125-03-01 12:12");
const tempos = [tempoObjetivovol, tempoObjetivovo2, tempoObjetivovo3, tempoObjetivovo4]
function atualizaCronometro (){
    for (let i = 0; i < contadores.length; i++){
        document.getElementById ("dias"+i).textContent = calculaTempo(tempos[i])[0];
        document.getElementById ("horas"+i).textContent = calculaTempo(tempos[i])[1];
        document.getElementById ("min"+i).textContent = calculaTempo(tempos[i])[2];
        document.getElementById ("seg"+i).textContent = calculaTempo(tempos[i])[3];
    }
    for(let i = 0; i < contadores.length; i++){
        //contadores[i].textContent = calculaTempo (tempos[i]);
    }
}
function comecaCronometro (){
    atualizaCronometro ();
    setInterval (atualizaCronometro, 1000);
}
comecaCronometro ();