let listaNumSecretos = [];
let chuteLimite = 3;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Olá, bem-vindo ao jogo do número secreto');
    exibirTextoNaTela('p', `escolha um número entre 1 e ${chuteLimite}`);
}

exibirMensagemInicial();

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function gerarNumeroAleatorio() {
    let numEscolhido = parseInt(Math.random() * chuteLimite + 1);
    let quantidadeDeElementosNaLista = listaNumSecretos.length;

    if (quantidadeDeElementosNaLista == chuteLimite) {
        listaNumSecretos = [];
    }
    
    if (listaNumSecretos.includes(numEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaNumSecretos.push(numEscolhido);
        console.log(listaNumSecretos);
        return numEscolhido;
    }
}
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}
function verificarChute(){
    let chute = document.querySelector('input').value;
    let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `Voce acertou o numero secreto com ${tentativas} ${palavraTentativas}`;
    let mensagemErrou = chute > numeroSecreto ? `O número secreto é menor que ${chute}` : `O número secreto é maior que ${chute}`;

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Voce acertou!');
        exibirTextoNaTela('p', mensagemTentativas );
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', mensagemErrou);
        } else {
            exibirTextoNaTela('p', mensagemErrou);
        }
        tentativas++;
        limparCampo();
    }
}
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}


