//Média aritmética de 3 nota

//Entrada- variáveis

const nota1 = Number(prompt("Digite sua primeira nota"));
const nota2 = Number(prompt("Digite sua segunda nota"));
const nota3 = Number(prompt("Digite sua terceira nota"));

//processamento

const notaFinal = (nota1 + nota2 + nota3) / 3;

//saída

//maior que 7
//menor que 7
//menor que 3

if (notaFinal < 3) {
    alert(notaFinal + " Horrível");
} else if (notaFinal < 7) {
    alert(notaFinal + " Pode melhorar");
} else {
    alert(notaFinal + " Parabéns!");
}