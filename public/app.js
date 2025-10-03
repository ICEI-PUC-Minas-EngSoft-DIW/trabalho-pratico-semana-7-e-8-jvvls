const itens = [
  { id: 1, titulo: "O que é Bitcoin?", img: "img/btc2.png", texto: "O Bitcoin é a primeira e mais conhecida criptomoeda do mundo, criada em 2009..." },
  { id: 2, titulo: "Como começar?", img: "img/btc1.png", texto: "As carteiras de Bitcoin (wallets) permitem armazenar, enviar e receber bitcoins com segurança..." },
  { id: 3, titulo: "Investimentos", img: "img/eth-sol.png", texto: "Além do Bitcoin, existem diversas criptomoedas importantes que cumprem papéis diferentes no mercado..." }
];

function montarHome() {
  const container = document.getElementById('cards-container');
  if(!container) return; 

  itens.forEach(item => {
    const col = document.createElement('div');
    col.className = "col-md-4";

    col.innerHTML = `
      <div class="bloco h-100 p-3 text-center">
        <a href="detalhes.html?id=${item.id}" style="text-decoration: none; color: inherit;">
          <img src="${item.img}" alt="${item.titulo}" class="w-100 rounded mb-3">
          <h4>${item.titulo}</h4>
        </a>
      </div>
    `;
    container.appendChild(col);
  });
}

function montarDetalhes() {
  const detalheContainer = document.getElementById('detalhe');
  if(!detalheContainer) return; 

  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');

  const item = itens.find(i => i.id == id);

  if(item){
    detalheContainer.innerHTML = `
      <h4>${item.titulo}</h4>
      <img src="${item.img}" alt="${item.titulo}" class="w-100 rounded mb-3">
      <p>${item.texto}</p>
    `;
  } else {
    detalheContainer.innerHTML = "<p>Item não encontrado.</p>";
  }
}

document.addEventListener('DOMContentLoaded', () => {
  montarHome();
  montarDetalhes();
});
