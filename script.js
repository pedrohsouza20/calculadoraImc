const enviar = document.querySelector('.enviar');

function escreverNoInput(event) {
  event.preventDefault();

  const peso = document.querySelector('.peso');
  const altura = document.querySelector('.altura');
  const resultado = document.querySelector('.resultado');

  const pesoValor = +peso.value;
  const alturaValor = +altura.value;

  const calcularIMC = pesoValor / alturaValor ** 2;
  resultado.value = calcularIMC.toFixed(2);
}

enviar.addEventListener('click', escreverNoInput);