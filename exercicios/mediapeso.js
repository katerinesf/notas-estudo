//3. Peça o peso de 5 pessoas e calcule a média desses pesos. Mostre o resultado.

//entrada
const people1 = Number(prompt('Peso da pessoa 1'));

const people2 = Number(prompt('Peso da pessoa 2'));

const people3 = Number(prompt('Peso da pessoa 3'));

const people4 = Number(prompt('Peso da pessoa 4'));

const people5 = Number(prompt('Peso da pessoa 5'));

//processo
const media = (people1 + people2 + people3 + people4 + people5) / 5;

alert("a média dos pesos das 5 pessoas é " + media + "kg");