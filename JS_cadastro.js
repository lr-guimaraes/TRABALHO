function cad(){
    var nome = document.getElementById("nome").value;
    var sobrenome = document.getElementById("sobrenome").value;
    var usuario = document.getElementById("usuario").value;
    var endereço = document.getElementById("endereço").value;
    var senha = document.getElementById("senha").value;
    
    var cadastro = [];
    var verificador = 0;


    cadastro.push(nome);
    cadastro.push(sobrenome);
    cadastro.push(matricula);
    cadastro.push(usuario);
    cadastro.push(endereço);
    cadastro.push(senha);

    storage = window.localStorage;
   
    var cadastroStorage = JSON.parse(JSON.stringify(cadastro));
   
    localStorage.setItem('cadastroStorage',JSON.stringify(cadastroStorage));

    for(i=0; i<cadastro.length; i++){
        if (cadastro[i] != ""){
            verificador = verificador + 1;
        }
    }
    if (verificador == 6){
        alert("seu cadastro foi efetudo com sucesso");
    }


window.localStorage.clear;
}