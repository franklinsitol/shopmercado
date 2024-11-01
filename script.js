const apiUrl = 'https://api.awin.com/publishers/1759561/products';
const apiKey = '0ff84c9e-f757-4868-be49-4209f2581c50';

async function fetchProdutos() {
    try {
        const response = await fetch(apiUrl, {
            headers: {
                'Authorization': `Bearer ${apiKey}`
            }
        });

        if (!response.ok) {
            throw new Error('Erro ao buscar produtos');
        }

        const data = await response.json();
        displayProdutos(data.products);
    } catch (error) {
        console.error(error);
        document.getElementById('produto-lista').innerHTML = '<p>Erro ao carregar produtos.</p>';
    }
}

function displayProdutos(produtos) {
    const lista = document.getElementById('produto-lista');
    lista.innerHTML = '';

    produtos.forEach(produto => {
        const produtoDiv = document.createElement('div');
        produtoDiv.className = 'produto';
        produtoDiv.innerHTML = `
            <img src="${produto.imageUrl}" alt="${produto.name}">
            <h3>${produto.name}</h3>
            <p>Preço: R$${produto.price}</p>
            <a href="${produto.link}" target="_blank">Ver Produto</a>
        `;
        lista.appendChild(produtoDiv);
    });
}

document.addEventListener('DOMContentLoaded', fetchProdutos);
