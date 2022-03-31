let sValor = '';
let ehNovoNumero = true;
let valorAnterior = 0;
let operacaoPendente = null;

function atualizaVisor() {
    let [parteInteira, parteDecimal] = sValor.split(',');
    let v = '';
    c = 0;
    for (let i = parteInteira.length - 1; i >=0; i--) {
        if(++ c > 3) {
            v = '.' + v;
            c = 1;
        }
        v = parteInteira[i] + v;
    }
    v = v + (parteDecimal ? ',' + parteDecimal : '');
    document.getElementById('result').value = v;
}

function insert(n) {
    if (ehNovoNumero) {
        sValor = '' + n;
        ehNovoNumero = false;
    }else sValor += n;
    atualizaVisor();
}

function virgula() {
    if (sValor.indexOf(',') == -1) 
    sValor += ',';
    atualizaVisor();
}

function clean() {
    ehNovoNumero = true;
    valorAnterior = 0;
    sValor = '';
    operacaoPendente = null;
    atualizaVisor();
}

function back() {
    sValor = sValor.substring(0, sValor.length -1);
    atualizaVisor();
}

function valorAtual() {
    return parseFloat(sValor.replace(',', '.'));
}

function operador(op) {
    calcular();
    valorAnterior = valorAtual();
    operacaoPendente = op;
    ehNovoNumero = true;
}

function calcular() {
    if(operacaoPendente != null){
        let resultado;
        switch(operacaoPendente){
            case '+': 
                resultado = valorAnterior + valorAtual(); 
                break;
            case '-': 
                resultado = valorAnterior - valorAtual(); 
                break;
            case '*': 
                resultado = valorAnterior * valorAtual(); 
                break;
            case '/': 
                resultado = valorAnterior / valorAtual(); 
                break;
        }
        sValor = resultado.toString().replace('.', ',');
    }
    ehNovoNumero = true;
    operacaoPendente = null;
    valorAnterior = 0;
    atualizaVisor();
}

// function insert(num) {
//     var numero = document.getElementById('result').value;
//     document.getElementById('result').value = numero + num;
// }

// function clean() {
//     document.getElementById('result').value = '';
// }

// function back() {
//     var resultado = document.getElementById('result').value;
//     document.getElementById('result').value = resultado.substring(0, resultado.length -1)
// }

// function calcular() {
//     var resultado = document.getElementById('result').value;
//     if(resultado) {
//         document.getElementById('result').value = eval(resultado);
//     } else {
//         document.getElementById('result').value = ""
//     }

// }