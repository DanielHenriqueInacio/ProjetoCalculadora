function insert(num) {
    var numero = document.getElementById('result').value;
    document.getElementById('result').value = numero + num;
}

function clean() {
    document.getElementById('result').value = '';
}

function back() {
    var resultado = document.getElementById('result').value;
    document.getElementById('result').value = resultado.substring(0, resultado.length -1)
}

function calcular() {
    var resultado = document.getElementById('result').value;
    if(resultado) {
        document.getElementById('result').value = eval(resultado);
    } else {
        document.getElementById('result').value = ""
    }

}