class Pessoa {
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
}


class Gabriel extends Pessoa {
    private _profissao: string = "Dev FullStack"

    constructor() {
        super('Gabriel', 24)
    }

    get profissao() {
        return this._profissao
    }

    set profissao(valor: string) {
        this._profissao = valor
    }
}


const dev = new Gabriel()

console.log(dev.profissao)

dev.profissao = "Dev BackEnd"

console.log(dev.profissao)

