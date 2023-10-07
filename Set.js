const nomes = ["Ana","Clara", "Maria","Maria", "Joao", "Joao", "Joao"];

// const meuSet = new Set([1,1,2,3,4,4]);
// console.log(meuSet);
// const nomesSet = new Set(nomes);
const nomesAtualizados = [...new Set(nomes)];

console.log(nomesAtualizados, nomes);
