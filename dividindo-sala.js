const alunos = ['John','Juliana','Ana', 'Caio','Lara','Marjorie','Guilherme','Aline','Fabiana','Andre','Carlos','Paulo','Bia','Vivian','Isabela','Vinicius','Renan','Renata', 'Renata', 'Daisy','Camilo',];

const sala1 = alunos.slice(0,alunos.length/ 4);
const sala2 = alunos.slice(alunos.length / 4 ,alunos.length/2);
const sala3 = alunos.slice(alunos.length/ 2, alunos.length/1.4);
const sala4= alunos.slice(alunos.length/1.4);

console.log(sala1, sala2, sala3, sala4);
console.log(alunos);

