const items = [
        {
                id: 0,
                nome: "bike",
                descricao: "Bicicleta aro 26 Scott",
                img: "./assets/img/bike.jpg",
                quantidade: 0,
        },
        {
                id: 1,
                nome: "bike2",
                descricao: "Bicicleta aro 26 Scott",
                img: "./assets/img/bike 1.jpg",
                quantidade: 0,
        },
        {
                id: 2,
                nome: "bike3",
                descricao: "Bicicleta aro 26 Scott",
                img: "./assets/img/bike 2.jpg",
                quantidade: 0,
        },
];

inicializarLoja = () => {
        var containerProdutos = document.getElementById("produtos");
        items.map((val) => {
                containerProdutos.innerHTML +=
                        `
                <div class="produto-single">
                        <img src="`+ val.img + `"/>
                        <p>`+ val.nome + `</p>
                        <p>`+ val.descricao + `</p>
                        <a key="`+ val.id + `" href="#">Adicionar ao Carrinho!<a/>
                </div>
                `;
        });
};

inicializarLoja();

atualizarCarrinho = () => { };

var links = document.getElementsByTagName("a");

for (var i = 0; i < links.length; i++) {
        links[i].addEventListener("click", function () {
                let key = this.getAttribute("key");
                items[key].quantidade++;
                atualizarCarrinho();
                return false;
        });
}
