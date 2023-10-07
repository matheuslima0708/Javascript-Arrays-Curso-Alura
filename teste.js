const cadastroAluno = {
    alunos : "Tiago",
    notasPrimeiroBimestre  : 8,
    notasSegundoBimestre : 7,
    notasTerceiroBimestre : 8,
    notasQuartoBimestre : 7
}

// const {alunos} = cadastroAluno

// console.log(alunos);

function imprimeDados({alunos, notasPrimeiroBimestre, notasSegundoBimestre, notasTerceiroBimestre, notasQuartoBimestre} ){    
    console.log(alunos, notasPrimeiroBimestre, notasSegundoBimestre, notasTerceiroBimestre, notasQuartoBimestre);
}

imprimeDados(cadastroAluno);
