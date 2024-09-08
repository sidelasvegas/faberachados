// Array com os dados dos cupons (substitua pelos seus dados)
const cupons = [
    { codigo: 'SHOPEEMARCA10', valor: '10% de desconto', validade: '31/12/2023' },
    { codigo: 'SHOPEENOVOCLIENTE', valor: 'R$ 20 off', validade: '15/11/2023' },
    // ... adicione mais cupons aqui
];

const cupomContainer = document.querySelector('.cupom-container');

// Função para criar um elemento de cupom
function criarCupom(cupom) {
    const cupomElement = document.createElement('div');
    cupomElement.classList.add('cupom');

    cupomElement.innerHTML = `
        <p class="cupom-codigo">${cupom.codigo}</p>
        <p>${cupom.valor}</p>
        <p>Válido até: ${cupom.validade}</p>
        <button class="copiar-botao" onclick="copiarCodigo(this)">Copiar</button>
    `;

    cupomContainer.appendChild(cupomElement);
}

// Função para copiar o código do cupom
function copiarCodigo(botao) {
    const codigo = botao.parentElement.querySelector('.cupom-codigo').textContent;
    navigator.clipboard.writeText(codigo);
    alert('Código copiado para a área de transferência!');
}

// Criar os elementos dos cupons
cupons.forEach(criarCupom);