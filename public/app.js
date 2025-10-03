const itens = [
  { id: 1, titulo: "O que é Bitcoin?", img: "img/btc2.png", texto: "O Bitcoin é a primeira e mais conhecida criptomoeda do mundo, criada em 2009 por uma pessoa (ou grupo) sob o pseudônimo Satoshi Nakamoto. Ele funciona como um dinheiro digital descentralizado, ou seja, não é controlado por governos ou bancos, mas sim por uma rede de computadores que validam e registram todas as transações em um livro público chamado blockchain. <br> A principal ideia do Bitcoin é permitir transferências de valor diretas entre pessoas de forma rápida, segura e transparente, sem intermediários. Seu valor é limitado (máximo de 21 milhões de unidades), o que o torna escasso e, muitas vezes, comparado ao ouro digital." },
  { id: 2, titulo: "Como começar?", img: "img/btc1.png", texto: "As carteiras de Bitcoin (wallets) são programas ou dispositivos que permitem armazenar, enviar e receber bitcoins com segurança. Elas podem ser digitais (em aplicativos no celular ou computador), online (em sites e corretoras), ou até físicas (hardware wallets e carteiras de papel), oferecendo diferentes níveis de praticidade e proteção. <br> Para comprar Bitcoin, é possível usar corretoras (exchanges), que aceitam transferência bancária, Pix ou cartão, ou recorrer a P2P (pessoa a pessoa), comprando diretamente de outros usuários. Também existem caixas eletrônicos de Bitcoin em alguns lugares. A escolha do meio depende do nível de segurança, praticidade e taxas que o usuário deseja." },
  { id: 3, titulo: "Investimentos", img: "img/eth-sol.png", texto: "Além do Bitcoin, existem diversas criptomoedas importantes que cumprem papéis diferentes no mercado. O Ethereum (ETH), por exemplo, é a segunda maior e ficou famoso por permitir a criação de contratos inteligentes e aplicativos descentralizados. Já moedas como Tether (USDT) e USD Coin (USDC) são chamadas de stablecoins, pois têm seu valor atrelado ao dólar, oferecendo mais estabilidade para quem quer negociar sem se preocupar com a alta volatilidade. <br>Outras redes como Cardano (ADA) e Solana (SOL) competem diretamente com o Ethereum, trazendo soluções que buscam mais velocidade, escalabilidade e eficiência. Essas criptomoedas mostram que o universo das “altcoins” vai muito além do Bitcoin, ampliando as possibilidades de uso da tecnologia blockchain em áreas como pagamentos, investimentos, contratos digitais e finanças descentralizadas." }
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
