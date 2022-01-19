let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(num[0] + num[1])//[ ] Faça um programa que SOME 2 números


//

console.log(num[0] * num[3] + 10)//[ ] Faça um programa que multiplique 2 números e o resultado adicione 10


//

let root = 9
const mult = [10]
const div = [33]
console.log(Math.sqrt(root,2)*mult[0]/div[0])//[ ] Faça um programa que encontre a raiz quadrada de um número, multiplique o resultado por 10 e divida por 33


//

const names = ["Antonio", "João", "José", "Maria", "Bruno", "Bianca", "Diogo"]
console.log(`Olá, meu nome é ${names[0]} e meu partner do CodeClub é ${names[6]}`)//[ ] Faça um programa que inicie com dois nomes, e o programa imprima na tela o seguinte dado: Olá, meu nome é (nome 1) e meu partner do CodeClub é (nome2)


//

console.log(`Antonio = Antonio ? ${names[0] == names[0]} and José = Maria ? ${names[2] == names[3]}`)//[ ] Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Ex: João e João, imprime true. João e Maria, imprime false.


//

console.log(`Antonio = Antonio ? ${names[0] != names[0]} and José = Maria ? ${names[2] != names[3]}`)//[ ] Faça um programa que imprima na tela se um nome é diferente ao outro nome digitado. Ex: João e João, imprime false. João e Maria, imprime true.


//

console.log(`Bruno = Bruno ? ${names[4] == names[4]} and Bianca = Maria ? ${names[5] == names[3]}`)//[ ] Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Porém, os dois nomes devem estar em um Array. Ex: const array = ["João", "Maria"]. João e João, imprime true. João e Maria, imprime false.


//

console.log(`Bruno = Bruno ? ${names[4] != names[4]} and Bianca = Maria ? ${names[5] != names[3]}`)//[ ] Faça um programa que imprima na tela se um nome é diferente ao outro nome digitado. Porém, os dois nomes devem estar em um Array. Ex: const array = ["João", "Maria"]. João e João, imprime false. João e Maria, imprime true.


//

const data =  [//[ ] Criei 5 Objetos, neles devem conter os dados de 5 pessoas que você conhece. Mínimo 5 dados por pessoa.
    {
        name: "antonio",
        age: 20,
        sex: "male",
        height: 1.89,
        weight: "80kg"
},
    {
        name: "diogo",
        age: 18,
        sex: "male",
        height: 1.75,
        weight: "69kg"
},
    {
        name: "ingrid",
        age: 22,
        sex: "female",
        height: 1.65,
        weight: "70kg"
},
    {
        name: "rodrigo",
        age: 20,
        sex: "male",
        height: 1.85,
        weight: "100kg"
},
    {
        name: "guilherme",
        age: 20,
        sex: "male",
        height: 1.75,
        weight: "70kg"
}
]


//

const object1 = {name:"João"}
const object2 = {name:"Maria"}
console.log(`joão = João ? ${object1 == object1} joão = Maria ? ${object1 == object2}`)//[ ] Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Porém, os dois nomes devem estar em dois objetos separados. Ex: const object1 = {name:"João"}, object1 = {name:"Maria"}. João e João, imprime true. João e Maria, imprime false


//

const name1 = {firstName:"João", seccondName:"Maria"}
console.log(`João = João ? ${name1.firstName ==name1.firstName} and João = Maria? ${name1.firstName ==name1.seccondName}`)//Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Porém, os dois nomes devem estar em um objeto. Ex: const object1 = {firstName:"João", seccondName:"Maria"}. João e João, imprime true. João e Maria, imprime false.


//

console.log(Math.floor((Math.random() * 100) + 1))//[ ] Faça um programa onde toda vez que ele rodar, coloca na tela um número aleatório entre 1 e 100. 


//

const a =25 //[ ] Faça um programa onde colocamos dois numeros ímpares e o programa imprima o resto da divisão. Ex: 7/3 deve imprimir: 1, 25/5 deve imprimir: 0.
const b = 5
const y = 7 
const x = 3
let remainder1 = y % x
let remainder2 = a % b
console.log(`7/3 sobra ${remainder1} 25/5 sobra ${remainder2}`)


//

const d = 2 //[ ] Faça um programa onde entramos com dois números, e ele imprime se o primeiro número é maior que o segundo. Ex: 2 e 5. Imprime: false.
const e = 5
console.log(d > e) 


//

const f = 2//[ ] Faça um programa onde entramos com dois números, e ele imprime se o primeiro número é menor que o segundo. Ex: 2 e 5. Imprime: true.
const g = 5
console.log(f < g)


//

const array = ["banana", "Maça", "laranja", "Uva"]//[ ] Crie um programa que mostra o tamanho do Array. Ex: const array = ["banana", "Maça", "laranja"] imprime: 3
console.log(array.length)
//
