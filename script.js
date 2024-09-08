// Replace with your actual coupon data (adjust properties as needed)
const coupons = [
  {
    title: "Cupom 1",
    description: "Frete Grátis acima de R$100",
    link: "https://shopee.com.br/?smtt=0.0.9&enter_search=go&keyword=CODIGO123",
  },
  {
    title: "Cupom 2",
    description: "10% de desconto em Eletrônicos",
    link: "https://shopee.com.br/?smtt=0.0.9&enter_search=go&keyword=ELETRONICOS10",
  },
  {
    title: "Cupom 3",
    description: "Frete Grátis acima de R$100",
    link: "https://shopee.com.br/?smtt=0.0.9&enter_search=go&keyword=CODIGO123",
  },
  {
    title: "Cupom 4",
    description: "10% de desconto em Eletrônicos",
    link: "https://shopee.com.br/?smtt=0.0.9&enter_search=go&keyword=ELETRONICOS10",
  },
   {
    title: "Cupom 5",
    description: "Frete Grátis acima de R$100",
    link: "https://shopee.com.br/?smtt=0.0.9&enter_search=go&keyword=CODIGO123",
  },
  {
    title: "Cupom 6",
    description: "10% de desconto em Eletrônicos",
    link: "https://shopee.com.br/?smtt=0.0.9&enter_search=go&keyword=ELETRONICOS10",
  },
  {
    title: "Cupom 7",
    description: "Frete Grátis acima de R$100",
    link: "https://shopee.com.br/?smtt=0.0.9&enter_search=go&keyword=CODIGO123",
  },
  {
    title: "Cupom 8",
    description: "10% de desconto em Eletrônicos",
    link: "https://shopee.com.br/?smtt=0.0.9&enter_search=go&keyword=ELETRONICOS10",
  },
   {
    title: "Cupom 9",
    description: "Frete Grátis acima de R$100",
    link: "https://shopee.com.br/?smtt=0.0.9&enter_search=go&keyword=CODIGO123",
  },
  {
    title: "Cupom 10",
    description: "10% de desconto em Eletrônicos",
    link: "https://shopee.com.br/?smtt=0.0.9&enter_search=go&keyword=ELETRONICOS10",
  },
  {
    title: "Cupom 11",
    description: "Frete Grátis acima de R$100",
    link: "https://shopee.com.br/?smtt=0.0.9&enter_search=go&keyword=CODIGO123",
  },
  {
    title: "Cupom 12",
    description: "10% de desconto em Eletrônicos",
    link: "https://shopee.com.br/?smtt=0.0.9&enter_search=go&keyword=ELETRONICOS10",
  },
  // Add more coupon objects here... (as many as needed)
];

const couponContainer = document.getElementById('cupons');

function createCouponCard(coupon) {
  const couponCard = document.createElement('div');
  couponCard.classList.add('col-md-4', 'mb-4', 'coupon-card');

  couponCard.innerHTML = `
    <div class="card-body">
      <h5 class="card-title">${coupon.title}</h5>
      <p class="card-text">${coupon.description}</p>
      <a href="${coupon.link}" target="_blank" class="btn btn-primary">Ver Código e Ir para a Shopee</a>
    </div>
  `;

  return couponCard;
}

// Adjust the number of coupons here (you can have hundreds)
const numberOfCoupons = 100; 

for (let i = 0; i < numberOfCoupons; i++) {
  couponContainer.appendChild(createCouponCard(coupons[i % coupons.length]));
}
