var comprado = [];

function prod1(){
    var produtos = [document.getElementById("prod1").innerHTML,'Trator',false];
    storage = window.localStorage;
    if( produtos[2] == false ) {
        comprado.push(produtos[1]);
        produtos[2] = true;
        var ProdStorage = JSON.parse(JSON.stringify(comprado));
        localStorage.setItem('ProdStorage',JSON.stringify(ProdStorage));  
        alert("Item adicionado ao seu carrinho");
    }
}  

function prod2(){
    var produtos =  [document.getElementById("prod2").innerHTML,'Colhedeira',false];
    storage = window.localStorage;
    if( produtos[2] == false ) {
        comprado.push(produtos[1]);
        produtos[2] = true;
        var ProdStorage = JSON.parse(JSON.stringify(comprado));
        localStorage.setItem('ProdStorage',JSON.stringify(ProdStorage));  
        alert("Item adicionado ao seu carrinho");
    }
}  

function prod3(){
    var produtos = [document.getElementById("prod4").innerHTML,'Esteira',false];
    storage = window.localStorage;
    if( produtos[2] == false ) {
        comprado.push(produtos[1]);
        produtos[2] = true;
        var ProdStorage = JSON.parse(JSON.stringify(comprado));
        localStorage.setItem('ProdStorage',JSON.stringify(ProdStorage));  
        alert("Item adicionado ao seu carrinho");
    }
}  

function prod4(){
    var produtos = [document.getElementById("prod5").innerHTML,'Grade agrícola',false];
    storage = window.localStorage;
    if( produtos[2] == false ) {
        comprado.push(produtos[1]);
        produtos[2] = true;
        var ProdStorage = JSON.parse(JSON.stringify(comprado));
        localStorage.setItem('ProdStorage',JSON.stringify(ProdStorage));  
        alert("Item adicionado ao seu carrinho");
    }
}  

function prod5(){
    var produtos = [document.getElementById("prod6").innerHTML,'Plantadeira',false];
    storage = window.localStorage;
    if( produtos[2] == false ) {
        comprado.push(produtos[1]);
        produtos[2] = true;
        var ProdStorage = JSON.parse(JSON.stringify(comprado));
        localStorage.setItem('ProdStorage',JSON.stringify(ProdStorage));  
        alert("Item adicionado ao seu carrinho");
    }
}  
function prod6(){
    var produtos = [document.getElementById("prod8").innerHTML,'Pulverizador',false];
    storage = window.localStorage;
    if( produtos[2] == false ) {
        comprado.push(produtos[1]);
        produtos[2] = true;
        var ProdStorage = JSON.parse(JSON.stringify(comprado));
        localStorage.setItem('ProdStorage',JSON.stringify(ProdStorage));  
        alert("Item adicionado ao seu carrinho");
    }
}  
