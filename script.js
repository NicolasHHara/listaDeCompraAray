
const produtos = [
    {
        nome: "Ovo de Páscoa",
        preco: 30.00,
        imagem: "",
    },
    {
        nome: "Chocolate Amargo",
        preco: 15.50,
        imagem: "",
    },
    {
        nome: "Caixa de Bombons",
        preco: 22.00,
        imagem: "",
    },
];





produtos.forEach(produto => {                           //pega todos os itens que esta deNtro do array "produto"
    const novaCaixa = document.createElement("div");        //cria mais uma div chamada novaCaixa
    novaCaixa.classList.add("base");                        //transforma a nova variavel "novaCaixa" em uma classe ja existente a base

    novaCaixa.innerHTML = `                                     
        <img src="${produto.imagem}" alt="">
        <h1>${produto.nome}</h1>                                         
        <p>R$ ${produto.preco.toFixed(2)}</p>                    
        <button class="btnComprar" onclick="compra()">Comprar</button>
    `;
                                            //no innerHTML ele cria a div "novaCaixa" no HTML
                                            // to.Fixed(2) serve para que haja 2 casas após o ponto no preco
                                            //para criar um codigo do html dentro do javascript e necessario colocar `` e em seguida colocar o que quer
    
    


        container.appendChild(novaCaixa);  //coloca esse elemento dentro do container como filho
                                            //para que eles nao fiquem em cima do primeiro produto (criado no HTMl)
}); 



//alert(produtos[0].nome)  
//alert(produtos.length)            tamanho do array

/*const container = document.getElementById("container");    

produtos.forEach(element => {
    
});

  
    let novaCaixa = document.createElement("div");              //criar uma div 
    novaCaixa.textContent = caixa;
    alert(caixa)



// usar push para empurrar os itens para o carrinho

*/

function compra(){
    const novaCaixaAside = document.createElement("div");
    novaCaixaAside.classList.add("baseAside");

    novaCaixaAside.innerHTML = `                                     
        <img src="${produto.imagem}" alt="">
        <h1>${produto.nome}</h1>                                         
        <p>R$ ${produto.preco.toFixed(2)}</p>                    
        <button class="btnComprar" onclick="compra()">Comprar</button>
    `;
                                            


        container.appendChild(novaCaixaAside);
                                          
}