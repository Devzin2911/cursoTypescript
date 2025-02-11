/**
 * Aula sobre modificadores de Acesso
 * private tbm pode ser declarado como _nome da variavel
 */


class Pessoas {
    private name: string = ''
    private idade: number = 0


    constructor(name: string, idade: number) {
        this.name = name
        this.idade = idade
    }


     public comer(comida: string) {
        return `O ${this.name} comeu ${comida}`
    }    

    protected fezAniversario() {
        return `O ${this.name} fez tantos ${++this.idade} anos hoje`
    }
}