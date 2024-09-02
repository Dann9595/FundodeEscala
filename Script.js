const toggleButton = document.getElementById('toggle-mode');
const body = document.body;

toggleButton.textContent = '🌙'; // Texto inicial

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    toggleButton.textContent = '☀️';
  } else {
    toggleButton.textContent = '🌙';
  }
});



function calcular() {
  const valorMedido = document.getElementById('valorMedido').value;
  const fundoEscala = document.getElementById('fundoEscala').value;

  // Verifica se algum dos campos está vazio
  if (!valorMedido) {
    alert("Por favor, preencha o campo 'Valor Medido'.");
    return;
  } else if (!fundoEscala) {
    alert("Por favor, preencha o campo 'Fundo de Escala'.");
    return;
  }

  // Se ambos os campos estiverem preenchidos, realiza o cálculo
  const resultado = ((parseFloat(valorMedido) - 4) * parseFloat(fundoEscala)) / 16;
  document.getElementById('resultado').textContent = `${resultado}`;
}

// Função de limpar permanece a mesma

function limpar() {
  document.getElementById('valorMedido').value = "";
  document.getElementById('fundoEscala').value = "";
  document.getElementById('resultado').textContent = "0";
}