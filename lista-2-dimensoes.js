const alunos = ["John", "Juliana", "Ana", "Caio", 'Antonio'];
const notasPrimeiroSemestre  = [10, 8, 7.5, 9, 7];
const notasSegundoSemestre = [7, 4, 6, 5, 8];
const notasUnificadas = [notasPrimeiroSemestre, notasSegundoSemestre];
let medias = [];

function calculaMedias(){
    for (let i = 0; i < alunos.length; i++) {
        medias = (notasUnificadas[0][i] + notasUnificadas[1][i]) /2;
            console.log(`${alunos[i]} -- ${notasUnificadas[0][i]} -- ${notasUnificadas[1][i]} -- ${medias}`);   
    };
    
}
calculaMedias();


// console.log(listaDeAlunosEMedias);

// console.log(`A aluna da posicao 1 da lista de alunos e: ${listaDeAlunosEMedias[0][1]} que tem a nota ${listaDeAlunosEMedias[1][1]}`);



