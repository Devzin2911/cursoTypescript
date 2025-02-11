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


class Funcionario extends Pessoa {
    cargo: string = ''
    salario: number = 0.0

    constructor(name: string, idade: number, cargo: string, salario: number) {
        super("Gabriel", 24)
        this.cargo = cargo
        this.salario = salario
    }
}



const func01 = new Funcionario("Gabriel", 24, 'Analista', 5000)


console.log(func01)
console.log(func01.comer("Barriga de Porco"))
console.log(func01.fezAniversario())

