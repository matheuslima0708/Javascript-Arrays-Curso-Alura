// const arrayVazia = [,,,];

// console.log(arrayVazia.length);
// arrayVazia.push(50);
// console.log(arrayVazia);
// // console.log(arrayVazia[1]);
// console.log(arrayVazia.length);


// // // const arrayOriginal = ["Maria", "Carlos", "Eduardo", "Samanta"];
// // // const arrayConcat = arrayOriginal.concat(["andre", "fernanda"],["Ricardo", "Ana"],["Marcelo", "Bia"]);

// // const arrayOriginal = [50,60,70];
// // const arrayConcat = arrayOriginal.concat([80, [90,100]]);

// // console.log(arrayConcat);
// // console.log(arrayOriginal);

// const alunos = ["Tiago", "Otavio", "Juliana"];
// const notasPrimeiroBimestre  = [8,3,6];
// const notasSegundoBimestre = [7,5,8];
// const notasTerceiroBimestre = [8,3,6];
// const notasQuartoBimestre =[7,5,8];
// const listaDeAlunoENotas = [alunos,notasPrimeiroBimestre, notasSegundoBimestre, notasTerceiroBimestre, notasQuartoBimestre];

// function calculaMedias(aluno){
//     if (listaDeAlunoENotas[0].includes(aluno)) {
        
//         // const alunos = listaDeAlunoENotas[0];
//         // const notasPrimeiroBimestre = listaDeAlunoENotas[1];
//         // const notasSegundoBimestre =  listaDeAlunoENotas[2];
//         // const notasTerceiroBimestre = listaDeAlunoENotas[3];
//         // const notasQuartoBimestre = listaDeAlunoENotas[4];
//         const [alunos, notasPrimeiroBimestre, notasSegundoBimestre, notasTerceiroBimestre, notasQuartoBimestre] = listaDeAlunoENotas;
//         const indice = alunos.indexOf(aluno);
//         const mediaDoAluno = (notasPrimeiroBimestre[indice] + notasSegundoBimestre[indice]+ notasTerceiroBimestre[indice] + notasQuartoBimestre[indice]) / 4;
//         // console.log(`${aluno}-- ${mediaDoAluno}`);
//         if(mediaDoAluno >= 6 ){
//             console.log(`Parabens ${alunos[indice]} sua media final foi de ${mediaDoAluno} e por isso voce esta aprovado!`);
//         }else{
//             console.log(`${alunos[indice]} infelizmente voce teve uma media final de ${mediaDoAluno} e por isso voce esta reprovado!`);
//         }

//     } else{
//         console.log("Aluno nao encontrado!");
//     }
// }

// calculaMedias('Tiago');


// const notas1 = [10, 6.5, 8, 7.5];
// const notas2 = [9, 6, 6];
// const notas3 = [8.5, 9.5];


// const notasGerais = [notas1, notas2, notas3];

// let media = 0

// for (let i = 0; i < notasGerais.length; i++) {
//     for (let j = 0; j < notasGerais[i].length; j++) {
//         media += notasGerais[i][j]/notasGerais[i].length;        
//     }    
// }

// media = media/notasGerais.length

// console.log(media);

// const numerosPares = [];
// const numerosImpares = [];
// const nomes = ['Antonio', 'Tiago', 'Ana', 'Bia'];
// const novosNomes = [];

// for (let i=3; i >= 0 ; i--){
//     numerosPares.push(i);
// }
// for (let i=3; i>= 0; i--){
//     novosNomes.push(nomes[i]);
// }


// for (let i=1; i<= 3; i+=2){
//     numerosImpares.push(i);
// }

// console.log(novosNomes);

const lista = [1, 2, 3, 4, 5];
// //FOR TRADICIONAL
// for (let indice=0; indice < lista.length; indice++) {
//     console.log(lista[indice]);
// }

// // FOR ... OF
// let soma = 0;
// for(let elemento of lista) {
//     soma += elemento;
// }

// console.log(soma);

// const nome = "Alura";
// // ["A","l","u","r","a"]
// let nomeMaisculas = "";
// for(let i = 0; i < nome.length; i++) {
//     nomeMaisculas += nome[i].toUpperCase()
// }
// // console.log(nomeMaisculas);

// const nomeDoCurso = "Fundamentos de JS ";
// const nomeDaPlataforma = "Alura";

// const nomeCompleto = nomeDoCurso.concat(nomeDaPlataforma);
// console.log(nomeCompleto);

// const arrayNums = [1, 2, 3, 4];


// function multiplicaPorDez(numero) {
//     return numero * 10;
// }

// const arraySomada = arrayNums.map(multiplicaPorDez);

// console.log(arraySomada);

// const numerosMultiplicadoPor10 = arrayNums.map((numero)=> numero*10 );
// console.log(numerosMultiplicadoPor10);


// const numeros = [43, 50, 65, 12];
//// metodo mais conciso de escrever o codigo
// const soma = numeros.reduce((acc, atual,) => atual + acc, 0)

// console.log(soma);

////forma mais extensa de escrever o mesmo codigo sem a arrow function
// const soma = numeros.reduce(function(acc, atual){
//         return atual + acc;
// }, 0)

// console.log(soma);

////terceira forma de se escrever o mesmo codigo
// function operacaoNumerica(acc, atual){
//     return atual + acc
// }

// const soma = numeros.reduce(operacaoNumerica, 0);
// console.log(soma);



let num1 = 10;
let num2= num1;

num2 += 5;
num1 += 1;

console.log(`NUm e ${num1}. Num2 e ${num2}`);


let numeroOriginal = 10;
function alteraNumero(numero){
    numero = 50;

    console.log(`O numero do parametro e ${numero}. numeroOriginal e ${numeroOriginal}`);
}

alteraNumero(numeroOriginal);