
const produtos = [
    {
        nome: "Ovo de Páscoa",
        preco: 30.00,
        imagem: "",
    },
    {
        nome: "Chocolate Amargo",
        preco: 15.50,
        imagem: ""
    },
    {
        nome: "Caixa de Bombons",
        preco: 22.00,
        imagem: ""
    },
];

//alert(produtos[0].nome)  
//alert(produtos.length)            tamanho do array

/*const container = document.getElementById("container");    

produtos.forEach(element => {
    
});

  
    let novaCaixa = document.createElement("div");              //criar uma div 
    novaCaixa.textContent = caixa;
    alert(caixa)



// usar push para empurrar os itens para o carrinho


function compra(){
    let aside = document.getElementById("aside");
}
*/




produtos.forEach(produto => {
    const novaCaixa = document.createElement("div");
    novaCaixa.classList.add("base");

    novaCaixa.innerHTML = `
        <img src="${produto.imagem}" alt="${produto.nome}">
        <h1>${produto.nome}</h1>
        <p>R$ ${produto.preco.toFixed(2)}</p>
        <button class="btnComprar" onclick="compra('${produto.nome}')">Comprar</button>
    `;

    container.appendChild(novaCaixa);
});