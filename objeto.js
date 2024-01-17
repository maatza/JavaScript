function Lampada() {
    this.estaLigada = false; // Propriedade para controlar o estado da lâmpada

    // Método para ligar a lâmpada
    this.ligar = function() {
      if (!this.estaLigada) {
        console.log("Lâmpada ligada.");
        this.estaLigada = true;
      } else {
        console.log("A lâmpada já está ligada.");
      }
    };

    // Método para desligar a lâmpada
    this.desligar = function() {
      if (this.estaLigada) {
        console.log("Lâmpada desligada.");
        this.estaLigada = false;
      } else {
        console.log("A lâmpada já está desligada.");
      }
    };
  }

  // Criando uma instância do objeto Lampada
  var minhaLampada = new Lampada();

  // Função para ligar ou desligar a lâmpada (invocar os métodos ligar ou desligar)
  function ligarOuDesligarLampada() {
    if (minhaLampada.estaLigada) {
      minhaLampada.desligar();
    } else {
      minhaLampada.ligar();
    }
  }