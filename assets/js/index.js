const items = [
        {
                id: 0,
                nome: "Scott Aspect 940",
                descricao: "A SCOTT Aspect 940 é uma bicicleta rígida de montanha que foi desenvolvida para ser leve, eficiente e acessível. mariaEquipada com um sistema de bloqueio para a suspensão, travões de disco e componentes Syncros, esta bicicleta é perfeita para iniciantes ou ciclistas com um orçamento consciente.",
                img: "./assets/img/ASPECT940.jpg",
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

atualizarCarrinho = () => {
        var containerCarrinho = document.getElementById("carrinho");
        containerCarrinho.innerHTML = "";
        items.map((val) => {
                if (val.quantidade > 0) {
                        containerCarrinho.innerHTML += `
                <p>`+ val.nome + ` | quantidade: ` + val.quantidade + `</p>
                <hr>
                `;
                }
        });

};

var links = document.getElementsByTagName("a");

for (var i = 0; i < links.length; i++) {
        links[i].addEventListener("click", function () {
                let key = this.getAttribute("key");
                items[key].quantidade++;
                atualizarCarrinho();
                return false;
        });

}
