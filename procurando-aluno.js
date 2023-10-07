const alunos =  ["John", "Juliana", "Ana", "Caio"];
const medias = [10, 8 , 7.5, 9];

const listaDeAlunoEMedias = [alunos, medias];

function exibeNomeENota(aluno) {
    if (listaDeAlunoEMedias[0].includes(aluno)) {
        // const alunos = listaDeAlunoEMedias[0];
        // const medias = listaDeAlunoEMedias[1];

        const [alunos,medias] = listaDeAlunoEMedias;
        const indice = alunos.indexOf(aluno);
        const mediaDoAluno = medias[indice];

        console.log(`${aluno} tem a media ${mediaDoAluno}`);

    } else{
        console.log("Aluno nao encontrado!");
    }
}

exibeNomeENota("Caio");