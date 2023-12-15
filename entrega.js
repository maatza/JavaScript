function calcularSoma() {
  
  let numero1 = parseInt(prompt("Digite o primeiro número:"));

  
  if ((numero1) == true) {
    alert("Por favor, insira um número válido.");
    return;
  }

  
  let numero2 = parseInt(prompt("Digite o segundo número:"));

  
  if ((numero2) == true) {
    alert("Por favor, insira um número válido.");
    return;
  }

  
  let soma = numero1 + numero2;

  
  console.log("A soma de " + numero1 + " e " + numero2 + " é: " + soma);
}

calcularSoma();