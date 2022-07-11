function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
	nome: 'Carla',
	idade: 40,
};

const pessoa2 = {
	nome: 'Jose',
	idade: 44,
};

const pessoa3 = {
	nome: 'Luiza',
	idade: 10,
};

const pessoa4 = {
	nome: 'Rafaela',
	idade: 19,
};

const pessoa5 = {
	nome: 'Vitor',
	idade: 21,
};

console.log(calculaIdade.call(pessoa3, 25));
console.log(calculaIdade.apply(pessoa2, [25]));
console.log(calculaIdade.call(pessoa1, 25));
console.log(calculaIdade.apply(pessoa5, [25]));
console.log(calculaIdade.apply(pessoa4, [25]));

