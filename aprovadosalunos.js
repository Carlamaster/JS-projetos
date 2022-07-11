const alunos = [
	{
		nome: 'Vitor',
		nota: 5,
		turma: '1B',
	},
	{
		nome: 'Rafaela',
		nota: 9,
		turma: '1B',
	},
	{
		nome: 'Luiza',
		nota: 6,
		turma: '2C',
	},
    {
        nome: 'Sidney',
        nota: 4,
        turma: '2C'
    },
];

function alunosAprovados(alunos, media) {
	let aprovados = [];

	for (let i = 0; i < alunos.length; i++) {
		let { nota, nome } = alunos[i];

		if (nota >= media) {
			aprovados.push(nome);
		}
	}

	return aprovados;
}

console.log(alunosAprovados(alunos, 5));