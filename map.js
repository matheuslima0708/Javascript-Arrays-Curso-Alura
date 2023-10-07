const notas = [10, 9.5, 8, 7, 5];
// tentar fazer o desafio com o forEach

// let notasAtualizadas = [];
// notas.forEach((nota) => {
//   nota + 1 >= 10 ? notasAtualizadas.push(10) : notasAtualizadas.push(nota + 1);

// })

// console.log(notasAtualizadas);

const notasAtualizadas = notas.map((nota) => {
    return nota + 1 >= 10 ? 10 : nota +1;  
})

console.log(notasAtualizadas, notas);

