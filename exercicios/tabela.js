//8. Peça um número inteiro e mostre a tabuada dele (do 0 até o 10).

//entrada
const num = Number(prompt('Insira um número'));

//processamento
const zero = num * 0;
const um = num * 1;
const dois = num * 2;
const tres = num * 3;
const quatro = num * 4;
const cinco = num * 5;
const seis = num * 6;
const sete = num * 7;
const oito = num * 8;
const nove = num * 9;
const dez = num * 10;

alert("tabela de " + num + " é: " + "\n" +
    num + " x 0 = " + zero + "\n" +
    num + " x 1 = " + um + "\n" +
    num + " x 2 = " + dois + "\n" +
    num + " x 3 = " + tres + "\n" +
    num + " x 4 = " + quatro + "\n" +
    num + " x 5 = " + cinco + "\n" +
    num + " x 6 = " + seis + "\n" +
    num + " x 7 = " + sete + "\n" +
    num + " x 8 = " + oito + "\n" +
    num + " x 9 = " + nove + "\n" +
    num + " x 10 = " + dez);