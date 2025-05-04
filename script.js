//armazena um array dentro da variavel "produtos"
const produtos = [ 
    { 
    nome: "Ovo de Páscoa Dudu",
    preco: 30.00,
    imagem: ""
    },
    {
    nome: "Chocolate Amargo",
    preco: 15,
    imagem: "" 
    },
    {
    nome: "Caixa de Bombons",
    preco: 22,
    imagem: ""
    },
    {
    nome: "Chocolate ao Leite",
    preco: 20,
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsqQbbVU5yutLzyGZ2WCj4_Y-05K6_DqHwvXYSJ6hGAQ&s&ec=72940542"
    },
];

//cria um array vazio, onde sera armazenado os produtos do aside
const produtosAside = [];

let contador = 0;

//pega todos os itens do array e transformam em div, dando a classe "base" para eles e inserindo eles para o HTML 
produtos.forEach(produto => {
    const novaCaixa = document.createElement("div");
    novaCaixa.classList.add("base");
    novaCaixa.innerHTML = `
        <img src="${produto.imagem}" alt="">
        <h1>${produto.nome}</h1>
        <p>R$ ${produto.preco.toFixed(2)}</p>
        <button class="btnComprar" onclick="compra(${contador})">Comprar</button>
    `;

    //pega a div "novaCaixa" e torna filho do Id "listagem"
    document.getElementById('listagem').appendChild(novaCaixa);
    contador++;
});


function compra(item) {
    if (!document.querySelector(".containerAside")) {
        criaAside();
    }

    //empurra os itens do array "produtos" para o array "produtosAside"
    produtosAside.push(produtos[item]);
    atualizaAside();
    console.log(produtosAside)
}

//transforma o Id "produtosAside" em uma varivel "containerProdutosAside"
function atualizaAside() {
    const containerProdutosAside = document.getElementById('produtosAside');
    containerProdutosAside.innerHTML = "";

    //cria uma div, da uma classe e insere no HTML
    produtosAside.forEach((produto, index) => {
        const novaCaixaProdutoBase = document.createElement("div");
        novaCaixaProdutoBase.classList.add("baseAside");

        novaCaixaProdutoBase.innerHTML = `
            <img src="${produto.imagem}" alt="">
            <h1>${produto.nome}</h1>
            <p>R$ ${produto.preco.toFixed(2)}</p>
            <button class="btnremove" onclick="remove(${index})">Remover</button>
        `;
        //torna a div "novaCaixaProdutoBase" filho da variavel "containerProdutosAside"
        containerProdutosAside.appendChild(novaCaixaProdutoBase);
    });
}
function remove(index) {
    produtosAside.splice(index, 1);
    atualizaAside();
}

function openAise(){
    const novaCaixaAside = document.createElement("aside");
    novaCaixaAside.classList.add("containerAside");
    novaCaixaAside.innerHTML = `
        <div class="headerAside">
            <svg class="imgAside" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-basket2-fill" viewBox="0 0 16 16">
                <path d="M5.929 1.757a.5.5 0 1 0-.858-.514L2.217 6H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h.623l1.844 6.456A.75.75 0 0 0 3.69 15h8.622a.75.75 0 0 0 .722-.544L14.877 8h.623a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1.717L10.93 1.243a.5.5 0 1 0-.858.514L12.617 6H3.383zM4 10a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0zm3 0a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0zm4-1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1"/>
            </svg>
            <button id="btnExitAside" onclick="closeAside()">Fechar</button>
        </div>
        <div id="produtosAside"></div>
    `;
    //torna o aside "novaCaixaAside" filho do Id "listagem"
    document.getElementById('listagem').appendChild(novaCaixaAside);
}

//variaveis que pega 
const aside = document.getElementById("containerAside");
const btnAbrir = document.getElementById("btnAbreAside");
const btnFechar = document.getElementById("btnExitAside");


function abrirAside (){
    aside.style.right = 0;
};
btnAbrir.addEventListener('click', abrirAside);

function closeAside () {
    aside.style.right = "-100rem";
    btnAbrir.style.right = 0;
}

btnFechar.addEventListener('click', closeAside);
