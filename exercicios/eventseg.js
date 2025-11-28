//6. Peça a duração de um evento em segundos. Mostre esse tempo em horas, minutos e segundos.

//entrada
const eventoseg = Number(prompt('Insira o tempo do evento em segundos'));

//processamento
const horas = Math.floor(eventoseg / 3600);
const minutos = Math.floor((eventoseg % 3600) / 60);
const segundos = (eventoseg % 60);

//saida
alert("O evento durou " + horas + " horas, " + minutos + " minutos e " + segundos + " segundos");