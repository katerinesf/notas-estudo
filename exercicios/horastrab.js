//2. Peça o valor que a pessoa ganha por hora e a quantidade de horas trabalhadas no mês. Mostre quanto ela vai receber no final do mês.

//entrada
const horaTrab = Number(prompt('Informe quanto você ganha por hora trabalhada'));

const valorHora = Number(prompt('Informe quantas horas você trabalha por mês'));

const mensal = horaTrab * valorHora;

alert("seu salário mensal é R$ " + mensal);