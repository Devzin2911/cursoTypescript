abstract class Pessoa {
    nome: string = "";
    idade: number = 0;


    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }


    comer(comida: string) {
        return `O ${this.nome} comeu ${comida}`
    }    

    fezAniversario() {
        return `O ${this.nome} fez tantos ${++this.idade} anos hoje`
    }

    protected abstract profissao: string;
    public abstract qualSuaProfissao(): string;
}

class Gabriel extends Pessoa {
    protected profissao: string = "Dev FullStack"

    constructor() {
        super('Gabriel', 24)
    }

    public qualSuaProfissao(): string {
        return `Sua profissão é ${this.profissao}`
    }
}
