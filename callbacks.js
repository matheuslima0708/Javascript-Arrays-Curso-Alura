const nomes = ["Evaldo", "Mari", " Camis"];

// nomes.forEach(function(nome){
//     console.log(nome);
// })

// nomes.forEach((nome) => {
//     console.log(nome);
// })

function imprimeNome(nome, indice) {
    console.log(nome, indice);
}

nomes.forEach(imprimeNome);