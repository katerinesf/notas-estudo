//7. Peça uma distância em quilômetros e converta para metros e centímetros.

//entrada
const km = Number(prompt('Insira a quilometragem'));

//processamento
const metros = km * 1000;
const centimetros = km * 100000;

//saida
alert(km + "km são " + metros + " em metros e " + centimetros + " em centímetros");