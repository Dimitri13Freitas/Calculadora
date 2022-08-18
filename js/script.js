const numeros = document.querySelectorAll('[data-numero]');
const operadores = document.querySelectorAll('.jsOperador');
let calculo = document.querySelector('.calculo p');
let resultado = document.querySelector('.calculo h1')


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
      calculo.innerHTML += e.getAttribute('value');
    });
  });
};
digitaOperacao();

// Apaga Tudo
function apagaTudo() {
  calculo.innerHTML = '';
  resultado.innerHTML = '';
};

function apaga() {
  let apaga = calculo.innerHTML;
  calculo.innerHTML = apaga.substring(0, apaga.length -1); // slice tbm funciona novideo do mano seila 8==D
};

// Resultado
function resultadoFinal() {

  let resultadoConta = calculo.innerHTML;
  if (resultadoConta) {
    resultado.innerHTML = eval(resultadoConta);
  } else {
    document.getElementById('resultado').innerHTML = "Nada...";
  };

  calculo.innerHTML += ' =';
};

function porcentagem() {
  let teste = 0
  teste = calculo.innerHTML; 
  console.log(teste);
  teste = `0.${teste} * `;
  calculo.innerHTML = teste
}

// Troca de tema
function changeMode() {
  const btn = document.querySelector('.btnChangeMode');
  btn.classList.toggle('ativo');
  document.documentElement.classList.toggle('changeMode');
}