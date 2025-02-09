// Basicamente no TS, se eu declaro uma variável ou const
// com um tipo predefinido, não posso adicionar a essa variavel declarada
//outro tipo de dados.

let pedido = "Pizza";
pedido = "Monitor HP";

let numero: number = 1234;
numero = 4321;

let deuBom: boolean = false;
deuBom = true;


// Aqui essa função só poderá retornar uma string
const fun = (value: string) => {
    return console.log(value);
}


// Aqui eu já especifico a saída do tipo String
const fun2 = (value: string): string => {
    return value;
}