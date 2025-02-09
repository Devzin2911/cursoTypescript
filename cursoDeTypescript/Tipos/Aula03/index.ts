
// quando eu declaro o ARRAY dessa maneira ele permite 
// que apenas um elemento seja declarado dentro do ARRAY
let array1: [string] = ["Gabriel"];


// quando eu declaro o ARRAY dessa maneira ele permite 
// que dois elementos sejam declarados dentro do ARRAY
let array2: [string, string] = ["Gabriel", "Ana Carolina"];


// Aqui é um formato de declaração que vai fazer com que 
//O Array funcione da maneira que estamos acostumandos a ver
let array3: Array<string> = ["Gabriel Cortes", "Ana Cortes", "Zoe Cortes"]; 


//Também conseguimos realizar junções de tipos diferentes de dados em um Array

let array4: Array<string | number > = ["Gabriel Cortes", 24,  "Ana Cortes", 23, "Zoe Cortes", 0]; 


let obj1: { nome: string; sobrenome: string; idade: number;  deuBom: true} = {
    nome: "Gabriel",
    sobrenome: "Cortes",
    idade: 24,
    deuBom: true
}


let obj2: Array<{ nome: string; sobrenome: string; idade: number; deuBom: true }> =
    [
        {
            nome: "Gabriel",
            sobrenome: "Cortes",
            idade: 24,
            deuBom: true
        },
        {
            nome: "Ana",
            sobrenome: "Cortes",
            idade: 23,
            deuBom: true
        },
        {
            nome: "Zoe",
            sobrenome: "Cortes",
            idade: 0.2,
            deuBom: true
        }
    ]
    
console.log(array1)
console.log(array2)
console.log(array3)
console.log(array4)


console.log(obj1)
console.log(obj2)