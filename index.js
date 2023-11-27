
// Criando uma classe Genérica para o herói ##
class heroi {
    constructor (nome, idade, tipo ) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo

    }

     // Apresentando Caracteristica do Heroi ##
    mostra() {
        console.log(`O nome do Heroi é: ${this.nome}, tem ${this.idade} anos e sua classe é ${this.tipo}.`);
      }
    // Criando a Função ataque ##
      atacar() {
        let ataque;
    
        // Inserindo as condições ##
        switch (this.tipo) {
          case 'mago':
            ataque = 'Magia';
            break;
          case 'guerreiro':
            ataque = 'espada';
            break;
          case 'Monge':
            ataque = 'artes marciais';
            break;
          case 'Ninja':
            ataque = 'shuriken';
            break;
          default:
            ataque = 'Escolha um tipo de Classe para o Herói';
        }
    
        console.log(`O ${this.tipo} atacou usando ${ataque}.`);
      }
    }
    
    // Criação de Herois...
    const charHeroi1 = new heroi('D1EXY', 31, 'Ninja');
    charHeroi1.mostra();
    charHeroi1.atacar();
    
    const charHeroi2 = new heroi('Bixu piruleta', 200, 'mago');
    charHeroi2.mostra();
    charHeroi2.atacar();