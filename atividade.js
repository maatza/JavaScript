// Definição do objeto SimuladorJogo
function SimuladorJogo() {
    // Propriedades do simulador de jogo
    this.pontuacao = 0;
    this.nivel = 1;

    // Construtor para inicializar o simulador de jogo
    this.inicializar = function () {
        this.pontuacao = 0;
        this.nivel = 1;
        console.log("Simulador de jogo iniciado. Nível: " + this.nivel + ", Pontuação: " + this.pontuacao);
    };

    // Método para jogar uma rodada
    this.jogarRodada = function () {
        // Simula uma rodada de jogo
        var pontuacaoRodada = Math.floor(Math.random() * 10) + 1; // Gera uma pontuação aleatória de 1 a 10
        this.pontuacao += pontuacaoRodada;

        // Verifica se o jogador avança de nível
        if (this.pontuacao >= this.nivel * 10) {
            this.nivel++;
            console.log("Avançou para o próximo nível! Novo Nível: " + this.nivel);
        }

        console.log("Rodada concluída. Pontuação atual: " + this.pontuacao);
    };
}

// Criando uma instância do SimuladorJogo
var simuladorJogo = new SimuladorJogo();

// Função para ser chamada quando o usuário realizar alguma ação (por exemplo, clicar em um botão)
function acaoDoUsuario() {
    // Inicia o simulador de jogo
    simuladorJogo.inicializar();

    // Loop para simular rodadas de jogo até que o usuário decida parar
    while (confirm("Deseja jogar mais uma rodada?")) {
        simuladorJogo.jogarRodada();
    }
}

// Adicionando um ouvinte de evento ao botão (pode ser adaptado conforme o contexto)
document.getElementById("meuBotao").addEventListener("click", acaoDoUsuario);
