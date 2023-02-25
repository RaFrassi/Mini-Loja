// Define uma variável global para armazenar os itens no carrinho
let carrinho = [];

function adicionarAoCarrinho(item, preco) {
        const index = carrinho.findIndex(i => i.item === item);
        if (index !== -1) {
                carrinho[index].quantidade++;
                carrinho[index].total = carrinho[index].quantidade * preco;
        } else {
                carrinho.push({
                        item: item,
                        preco: preco,
                        quantidade: 1,
                        total: preco
                });
        }
        atualizarCarrinho();
}

function removerDoCarrinho(index) {
        carrinho.splice(index, 1);
        atualizarCarrinho();
}

function atualizarCarrinho() {
        const tbody = document.querySelector('.carrinho tbody');
        let html = '';
        let total = 0;
        carrinho.forEach((item, index) => {
                html += `
            <tr>
                <td>${item.item}</td>
                <td>R$ ${item.preco.toFixed(2)}</td>
                <td>
                    <button onclick="decrementarQuantidade(${index})">-</button>
                    ${item.quantidade}
                    <button onclick="incrementarQuantidade(${index})">+</button>
                </td>
                <td>R$ ${item.total.toFixed(2)}</td>
                <td><button onclick="removerDoCarrinho(${index})">Remover</button></td>
            </tr>
        `;
                total += item.total;
        });
        tbody.innerHTML = html;
        document.querySelector('.carrinho .total').textContent = `Total: R$ ${total.toFixed(2)}`;
}

function decrementarQuantidade(index) {
        carrinho[index].quantidade--;
        carrinho[index].total = carrinho[index].quantidade * carrinho[index].preco;
        if (carrinho[index].quantidade === 0) {
                carrinho.splice(index, 1);
        }
        atualizarCarrinho();
}


function incrementarQuantidade(index) {
        carrinho[index].quantidade++;
        carrinho[index].total = carrinho[index].quantidade * carrinho[index].preco;
        if (carrinho[index].quantidade === 0) {
                carrinho.splice(index, 1);
        }
        atualizarCarrinho();
}

document.addEventListener('DOMContentLoaded', () => {
        atualizarCarrinho();
});
