LoginStorage = window.localStorage;
var produtos = [['Trator','trator.jpg', 'R$ 660.000'],['Colhedeira','colheitadeira.jpg', 'R$90.000'],['Esteira','esteira.jpg','R$ 20.000'],
                ['Grade agrícola','grade.jpg','R$18.000'],['Plantadeira','plantadeira.jpg','R$450.000'],['Pulverizador','pulverizador.jpg','R$500.000']];
var cadastro  = JSON.parse(LoginStorage.getItem('ProdStorage'));
var quantidade = 1;

window.onload = function(){
    adicionados();
}

function adicionados(){
    var i =false;
    var v = 0;
    
    do {
        document.getElementById("tabela").innerHTML = "";
        var conteudo = "";
        conteudo += '<table>';
        conteudo += '<tr>';
        for(var j = 0; j < produtos.length; j++){
            for(var k = 0; k < cadastro.length; k++){
                if (produtos[j][0] == cadastro[k]){
                    
                    conteudo += '<tr>';
                    conteudo += '<td>';
                    conteudo += '<div class ="Desing_produto ">';
                    conteudo += '<div>';
                    conteudo += '<p> '+ produtos[j][0] +' </p>';
                    conteudo += '</div>';
                    conteudo += '<div>';
                    conteudo += '<img src="img/' + produtos[j][1] + '" />';
                    conteudo += '</div>';
                    conteudo += '<div>';
                    conteudo += '<p ><font color="#cc0707">'+produtos[j][2] +' </font></p>';
                    conteudo += '</div>'
                    conteudo += '<div>';
                    conteudo += '<p> Quantidade:'+ quantidade +'</p>';
                    conteudo += '</div>';
                    conteudo += '<div>';
                    conteudo += '<button  class="Desing_botaoComprar">';
                    conteudo += '+';
                    conteudo += '</button>';
                    conteudo += '<button  class="Desing_botaoComprar">';
                    conteudo += '-';
                    conteudo += '</button>';
                    conteudo += '</div>';
                    conteudo += '</td>';
                    conteudo += '</tr>';
             
                    
                    v +=1;
                    if (v == 3 || v == 6) {
                        conteudo += '</tr>';
                        conteudo += "<tr>"
                    }

                }
            }
        }
        conteudo += '<tr>'
        conteudo += '<td align=center>';
        conteudo += '<div>';
        conteudo += '<button  class="Desing_botaoComprar">';
        conteudo += 'Pagar';
        conteudo += '</button>';
        conteudo += '</div>';
        conteudo += '</td>';
        conteudo += '</tr>';
        
        conteudo += '</tabletr>';
        conteudo += '</table>';
        conteudo += '</div>';  
        document.getElementById("tabela").innerHTML += conteudo;
        i = true;
    }while (i = false );
  
}




