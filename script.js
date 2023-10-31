function somar(){
    //pega valor digitado na caixa de texto dos valores 1,2
    let num1 = parseFloat(document.getElementById('primeiroValor').value);

    let num2 = parseFloat(document.getElementById('segundoValor').value);
    //Adiciona conteúdo na tag P com ID resultado
    document.getElementById('resultado').innerHTML = 'Resultado: ' +(num1 + num2)
}
function subtrair(){
    //pega valor digitado na caixa de texto dos valores 1,2
    let num1 = parseFloat(document.getElementById('primeiroValor').value);

    let num2 = parseFloat(document.getElementById('segundoValor').value);
    //Adiciona conteúdo na tag P com ID resultado
    document.getElementById('resultado').innerHTML = 'Resultado: ' +(num1 - num2)
}
function multiplicar(){
    //pega valor digitado na caixa de texto dos valores 1,2
    let num1 = parseFloat(document.getElementById('primeiroValor').value);

    let num2 = parseFloat(document.getElementById('segundoValor').value);
    //Adiciona conteúdo na tag P com ID resultado
    document.getElementById('resultado').innerHTML = 'Resultado: ' +(num1 * num2)
}
function dividir(){
    //pega valor digitado na caixa de texto dos valores 1,2
    let num1 = parseFloat(document.getElementById('primeiroValor').value);

    let num2 = parseFloat(document.getElementById('segundoValor').value);
    //Adiciona conteúdo na tag P com ID resultado
    document.getElementById('resultado').innerHTML = 'Resultado: ' +(num1 / num2)
}