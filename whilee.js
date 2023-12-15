function calcularDezena(numero) {
    // Garante que o número está entre 1 e 100
    if (numero < 1 || numero > 100) {
        return "Número fora do intervalo permitido (1 a 100)";
    }

    // Calcula a dezena usando switch
    var = dezena parseInt(prompt("Digite um número de 1 a 100:")); 
    switch (Math.floor((numero - 1) / 10) + 1) {
        case 1:
            dezena = "Primeira dezena (1-10)";
            break;
        case 2:
            dezena = "Segunda dezena (11-20)";
            break;
        case 3:
            dezena = "Terceira dezena (21-30)";
            break;
        case 4:
            dezena = "Quarta dezena (31-40)";
            break;
        case 5:
            dezena = "Quinta dezena (41-50)";
            break;
        case 6:
            dezena = "Sexta dezena (51-60)";
            break;
        case 7:
            dezena = "Sétima dezena (61-70)";
            break;
        case 8:
            dezena = "Oitava dezena (71-80)";
            break;
        case 9:
            dezena = "Nona dezena (81-90)";
            break;
        case 10:
            dezena = "Décima dezena (91-100)";
            break;
        default:
            dezena = "Algo deu errado!";
    }

    return dezena;
}

// Exemplo de uso
console.log(calcularDezena(42)); // Saída: Quinta dezena (41-50)
console.log(calcularDezena(76)); // Saída: Oitava dezena (71-80)
console.log(calcularDezena(105)); // Saída: Número fora do intervalo permitido (1 a 100)