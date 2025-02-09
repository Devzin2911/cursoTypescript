class Pessoas {
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