// Defina a data alvo da contagem regressiva (ano, mês - 1, dia, hora, minuto, segundo)
const targetDate = new Date("2024-02-21T23:59:59").getTime();

// Atualize o contador a cada segundo
const timer = setInterval(function() {
  const now = new Date().getTime();
  const timeRemaining = targetDate - now;

  // Calcula os dias, horas, minutos e segundos restantes
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Exiba o contador na página HTML
  document.getElementById("days").innerText = padZero(days);
  document.getElementById("hours").innerText = padZero(hours);
  document.getElementById("minutes").innerText = padZero(minutes);
  document.getElementById("seconds").innerText = padZero(seconds);

  // Se o contador chegar a zero, exiba uma mensagem
  if (timeRemaining < 0) {
    clearInterval(timer);
    document.querySelector('.countdown').innerHTML = "Chegou!";
  }
}, 1000);

// Função auxiliar para adicionar um zero à esquerda para números menores que 10
function padZero(value) {
  return value < 10 ? "0" + value : value;
}
