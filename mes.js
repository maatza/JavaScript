function determinarEstacao(mes) {
  if (mes >= 1 && mes <= 12) {
    if (mes >= 3 && mes <= 5) {
      return "Primavera";
    } else if (mes >= 6 && mes <= 8) {
      return "Verão";
    } else if (mes >= 9 && mes <= 11) {
      return "Outono";
    } else {
      return "Inverno";
    }
  } else {
    return "Por favor, digite um número de mês válido (entre 1 e 12).";
  }
}

// Solicitar ao usuário que digite um número de mês
var mesDigitado = prompt("Digite um número de mês:");

// Converter a entrada do usuário para um número inteiro
var mes = parseInt(mesDigitado, 10);

// Chamar a função e exibir o resultado
var estacao = determinarEstacao(mes);
alert(estacao);