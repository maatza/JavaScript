// Definindo o construtor do objeto SimuladorBebidas
function SimuladorBebidas() {
    this.estoque = {
        cerveja: 10,
        refrigerante: 20,
        agua: 30
    };
    this.consumo = {
        cerveja: 0,
        refrigerante: 0,
        agua: 0
    };
}

SimuladorBebidas.prototype.adicionarBebida = function(tipo, quantidade) {
    if (this.estoque[tipo] !== undefined) {
        this.estoque[tipo] += quantidade;
        console.log(`${quantidade} ${tipo}(s) adicionado(s) ao estoque.`);
    } else {
        console.log(`Tipo de bebida '${tipo}' não reconhecido.`);
    }
};

SimuladorBebidas.prototype.consumirBebida = function(tipo, quantidade) {
    if (this.estoque[tipo] !== undefined && this.estoque[tipo] >= quantidade) {
        this.estoque[tipo] -= quantidade;
        this.consumo[tipo] += quantidade;
        console.log(`${quantidade} ${tipo}(s) consumido(s).`);
    } else {
        console.log(`Não há quantidade suficiente de ${tipo}(s) no estoque.`);
    }
};


const simuladorBebidas = new SimuladorBebidas();


simuladorBebidas.adicionarBebida('cerveja', 5);
simuladorBebidas.consumirBebida('refrigerante', 3);


console.log("Estado atual do estoque:", simuladorBebidas.estoque);
console.log("Quantidade consumida:", simuladorBebidas.consumo);
