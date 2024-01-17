let numero = parseInt(prompt("Digite um número"));

function verificarParOuImpar(numero) {
  if (numero % 2 === 0) {
    return "Par";
  } else {
    return "Ímpar";
  }
}

// Exemplo de uso:
var numeroExemplo = 7;
var resultado = verificarParOuImpar(numeroExemplo);
console.log(numero);