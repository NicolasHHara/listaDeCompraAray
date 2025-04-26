// array de produtos
const produtos = [ 
    {
        nome: "Ovo de Páscoa",
        preco: 30.00,
        imagem: "",
    },
    {
        nome: "Chocolate Amargo",
        preco: 15,
        imagem: "",
    },
    {
        nome: "Caixa de Bombons",
        preco: 22,
        imagem: "",
    },
    {
        nome: "Chocolate ao Leite",
        preco: 20,
        imagem: "",
    },
];

// array do carrinho de compras
const produtosAside = new Array();


// percorre todos os produtos do array e cria a listagem
let contador = 0;

produtos.forEach(produto => {
    //cria mais uma div chamada novaCaixa
    const novaCaixa = document.createElement("div");
    //transforma a nova variavel "novaCaixa" em uma classe ja existente a base
    novaCaixa.classList.add("base");
    // cria o HTML da caixa
    novaCaixa.innerHTML = `                                     
        <img src="${produto.imagem}" alt="">
        <h1>${produto.nome}</h1>                         
        <p>R$ ${produto.preco.toFixed(2)}</p>
        <button class="btnComprar" onclick="compra(${contador})">Comprar</button>`;
    //no innerHTML ele cria a div "novaCaixa" no HTML
    // to.Fixed(2) serve para que haja 2 casas após o ponto no preco
    //para criar um codigo do html dentro do javascript e necessario colocar `` e em seguida colocar o que quer

    //coloca esse elemento dentro do container como filho
    document.getElementById('listagem').appendChild(novaCaixa);
    //para que eles nao fiquem em cima do primeiro produto (criado no HTMl)
    contador++;
});
function openAise(produtox){
    // declara a classe
    const novaCaixaAside = document.createElement("aside");
    // adiciona o estilo para ele
    novaCaixaAside.classList.add("containerAside");

    //verifica se ja existe um aside
    if (document.querySelector(".containerAside")) {
        return; 
    }
    // cria a caixa
    novaCaixaAside.innerHTML = `                
            <div class="containerAside">
                <svg class="imgAside" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-basket2-fill" viewBox="0 0 16 16">
                    <path d="M5.929 1.757a.5.5 0 1 0-.858-.514L2.217 6H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h.623l1.844 6.456A.75.75 0 0 0 3.69 15h8.622a.75.75 0 0 0 .722-.544L14.877 8h.623a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1.717L10.93 1.243a.5.5 0 1 0-.858.514L12.617 6H3.383zM4 10a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0zm3 0a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0zm4-1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1"/>
                </svg>
                <button id="btnExitAside" onclick="closeAside"()></button>
            </div>`;

    //funciona da mesma forma anteriormente, para que o Aside se torne filho do container
    document.getElementById('listagem').appendChild(novaCaixaAside);

    // adiciona o item do carrinho/produtoAside
    produtosAside.push(produtos[item]);
};

// metodo do clique do comprar
function compra(item) {
    // declara a classe
    const novaCaixaAside = document.createElement("aside");
    // adiciona o estilo para ele
    novaCaixaAside.classList.add("containerAside");

    //verifica se ja existe um aside
    if (document.querySelector(".containerAside")) {
        return; 
    }
    // cria a caixa
    novaCaixaAside.innerHTML = `                
            <div class="containerAside">
                <svg class="imgAside" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-basket2-fill" viewBox="0 0 16 16">
                    <path d="M5.929 1.757a.5.5 0 1 0-.858-.514L2.217 6H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h.623l1.844 6.456A.75.75 0 0 0 3.69 15h8.622a.75.75 0 0 0 .722-.544L14.877 8h.623a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1.717L10.93 1.243a.5.5 0 1 0-.858.514L12.617 6H3.383zM4 10a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0zm3 0a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0zm4-1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1"/>
                </svg>
                <button id="btnExitAside"></button>
            </div>`;

    //funciona da mesma forma anteriormente, para que o Aside se torne filho do container
    document.getElementById('listagem').appendChild(novaCaixaAside);


    // adiciona o item do carrinho/produtoAside
    produtosAside.push(produtos[item]);

    //forEach dos produtos aside criar os htmls dos produtos
    produtosAside.forEach((produto, index) => {
        const containerAside = document.querySelector(".containerAside");
    
        // arante que o container exista antes de prosseguir
        if (!containerAside) return;
    
        // Cria uma nova div
        const novaCaixaProdutoBase = document.createElement("div");
        novaCaixaProdutoBase.classList.add("baseAside");
    
        // cria o HTML da caixa
        novaCaixaProdutoBase.innerHTML = `                                     
            <img src="${produto.imagem}" alt="">
            <h1>${produto.nome}</h1>                                         
            <p>R$ ${produto.preco.toFixed(2)}</p>                    
            <button class="btnremove" onclick="remove(${index})">Remover</button>
        `;

        //novaCaixaProdutoBase ser filho do containerAside
        containerAside.appendChild(novaCaixaProdutoBase);
    });
}

function closeAside(){
    containerAside.close()
    
}




//let produtosAside1 = ["Camiseta", "Tênis", "Boné"];
//o primeiro item (produto) no parantese faz com q fale o produto, e o segundo item (index) revela a posicao q ele esta 
/*produtosAside1.forEach((produto, index) => {
    console.log("Produto:", produto);
    console.log("Posição:", index);
});
*/

//alert(produtos[0].nome)  
//alert(produtoss.length)            tamanho do array

/*const container = document.getElementById("container");    

produtos.forEach(element => {
    
});

  
    let novaCaixa = document.createElement("div");              //criar uma div 



// usar push para empurrar os itens para o carrinho

*/

/*function compra(){
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
        criava varios carrinhos um em cima do outro
*/

/*
function compra() {
    const novaCaixaAside = document.createElement("aside");

    novaCaixaAside.classList.add("containerAside");

    if (document.querySelector(".containerAside")) {            //verifica se ja existe um aside
        return; //se existir, nao repete
    }

    novaCaixaAside.innerHTML = `                                     
            <div class="caixaAside">
                <svg id="imgAside" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-basket2-fill" viewBox="0 0 16 16">
                    <path d="M5.929 1.757a.5.5 0 1 0-.858-.514L2.217 6H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h.623l1.844 6.456A.75.75 0 0 0 3.69 15h8.622a.75.75 0 0 0 .722-.544L14.877 8h.623a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1.717L10.93 1.243a.5.5 0 1 0-.858.514L12.617 6H3.383zM4 10a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0zm3 0a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0zm4-1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1"/>
                </svg>
                <button id="btnExitAside"></button>
            </div>
        `;
    document.getElementById('listagem').appendChild(novaCaixaAside);   //funciona da mesma forma anteriormente, para que o Aside se torne filho do contaienr

    //console.log(novaCaixaAside);


    const novaCaixaProdutoBase = document.createElement("div");
    novaCaixaProdutoBase.classList.add("baseAside");

    novaCaixaProdutoBase.innerHTML = produtos.push(produtosAside);
    

    document.querySelector(".containerAside").appendChild(novaCaixaProdutoBase);

    console.log(novaCaixaProdutoBase);

    /*produtos.forEach((produto, index) => {                           //pega todos os itens que esta deNtro do array "produto"
        const novaCaixaProduto = document.createElement("div");        //cria mais uma div chamada novaCaixa
        novaCaixaProduto.classList.add("baseAside");                        //transforma a nova variavel "novaCaixa" em uma classe ja existente a base

        novaCaixaProduto.innerHTML = `                                     
            <img src="${produto.imagem}" alt="">
            <h1>${produto.nome}</h1>                                         
            <p>R$ ${produto.preco.toFixed(2)}</p>
`;

        
        //no innerHTML ele cria a div "novaCaixa" no HTML
        // to.Fixed(2) serve para que haja 2 cxasas após o ponto no preco
        //para criar um codigo do html dentro do javascript e necessario colocar `` e em seguida colocar o que quer



        document.querySelector(".containerAside").appendChild(novaCaixaProduto);
        //document.getElementsByClassName("containerAside").appendChild(novaCaixaAside);  //coloca esse elemento dentro do container como filho

    }); */
//}





/*let resposta = "sim";

while (resposta === "sim") {

    console.log("Olá! Quer ser cumprimentado novamente?");

    resposta = prompt("Digite 'sim' para continuar ou qualquer outro valor para sair:");

}
*/

//caso o usuario digite sim aparecera o comentario novamente, se escrever outra coisa nao aparecera a pergunta


/*do {

    // código a ser executado

} while (condição);*/
