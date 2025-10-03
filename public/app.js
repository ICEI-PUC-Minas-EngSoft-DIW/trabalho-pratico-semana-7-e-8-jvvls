const blocos = document.querySelectorAll('.bloco');

blocos.forEach(bloco => {
  bloco.addEventListener('click', () => {
    window.location.href = 'detalhes.html';
  });
});
