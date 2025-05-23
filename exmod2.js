let nome = 'pedro';

function olaMundo(){
    console.log(`olá ${nome}`);
}

olaMundo();

// function exibirOlaNome(nome) {
//   console.log(`Olá, ${nome}!`);
// }

// exibirOlaNome("Alice");

//---//---//---//---//---//---//---

function multDobro(num){
    return num*2
}

let dobro = multDobro(5);
console.log(dobro);

//---//---//---//---//---//---//---

function calcularMedia(num, num1, num2) {
    return (num + num1 + num2)/3;
}

let media = calcularMedia(6,7,8);
console.log(media);

//---//---//---//---//---//---//---

function numMaior(num, num1) {
    return num > num1 ? `${num} é maior que ${num1}` : `${num1} é maior que ${num}`;
}

numMaior(4, 5);

//---//---//---//---//---//---//---

function calcularQuadrado(num) {
    return num * num;
}

let quadrado = calcularQuadrado(9);
console.log(quadrado);