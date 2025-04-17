
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
    
    


        document.getElementById('listagem').appendChild(novaCaixa);  //coloca esse elemento dentro do container como filho
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
    const novaCaixaAside = document.createElement("aside");
    novaCaixaAside.classList.add("containerAside");
    
    novaCaixaAside.innerHTML = `                                     
        <div class"caixaAside">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-basket2-fill" viewBox="0 0 16 16">
                <path d="M5.929 1.757a.5.5 0 1 0-.858-.514L2.217 6H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h.623l1.844 6.456A.75.75 0 0 0 3.69 15h8.622a.75.75 0 0 0 .722-.544L14.877 8h.623a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1.717L10.93 1.243a.5.5 0 1 0-.858.514L12.617 6H3.383zM4 10a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0zm3 0a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0zm4-1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1"/>
            </svg>
        </div>`;
                                            

        container.appendChild(novaCaixaAside);
                                          
}