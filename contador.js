// Solicita um número ao usuário
var numero = prompt("Digite um número para iniciar o ciclo:");

// Converte o input do usuário para um número inteiro
numero = parseInt(numero);

// Verifica se o input é um número válido
if (isNaN(numero)) {
    console.log("Por favor, digite um número válido.");
} else {
    console.log("Iniciando o ciclo...");

    // Loop enquanto o número for maior que 0
    while (numero > 0) {
        console.log("Número atual: " + numero);

        // Realize aqui as operações ou comparações desejadas
        // Neste exemplo, decrementamos o número a cada iteração
        numero--;

        // Pode-se adicionar mais lógica aqui, como alertas, outras operações, etc.

        // Exemplo de comparação
        if (numero % 2 === 0) {
            console.log("O número atual é par.");
        } else {
            console.log("O número atual é ímpar.");
        }
    }

    console.log("Ciclo concluído!");
}
