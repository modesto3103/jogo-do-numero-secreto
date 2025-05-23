function calcularIMC(altura, peso) {
    return peso / (altura*altura);
}
let IMC = calcularIMC(1.8, 86);
console.log(IMC);

//////////////////////////////////////////

function calcularFatorial(numero) {
    let resultado = 1;
    let contador = numero;
    while (contador > 1) {
        resultado *= contador;
        contador--;
    }
    return resultado;
}

console.log(calcularFatorial(5));

//////////////////////////////////////////

function conversaoDolarReal(dolar) {
    return dolar*4.80;
}

conversaoDolarReal(1);

//////////////////////////////////////////

function calcularArea(raio) {
    return 3.14 * (raio*raio);
}

function calcularPerimetro(raio) {
    return 2 * 3.14 * raio;
}

console.log(calcularArea(10), calcularPerimetro(10));

//////////////////////////////////////////

function calcularTabuada(numero) {
    let contador = 1;
    let resultado = 0;
    while (contador < 11) {
        resultado = numero * contador;
        contador++;
        console.log(resultado);
    }
    return resultado;
}

console.log(calcularTabuada(10))