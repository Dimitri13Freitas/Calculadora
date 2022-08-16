const numeros = document.querySelectorAll('[data-numero]');
const operadores = document.querySelectorAll('.jsOperador');
let calculo = document.querySelector('.calculo p')


// Digita o calculo
function digitaCalculo() {
  numeros.forEach((e) => {
    e.addEventListener('click', () => {
      calculo.innerHTML += e.innerHTML
    });
  });
};
digitaCalculo();

// Digita operação
function digitaOperacao() {
  operadores.forEach((e) => {
    e.addEventListener('click', () => {
      calculo.innerHTML += e.querySelector('img').getAttribute('alt');
    });
  });
};
digitaOperacao();

// Apaga Tudo
function apagaTudo() {
  calculo.innerHTML = '';
};

// Resultado
function resultado() {
  
};