function Login(){
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;
    var i =  false;
;
    LoginStorage = window.localStorage;
    
    var cadastro  = JSON.parse(LoginStorage.getItem('cadastroStorage'));
    //usar while = false qnd entrar o usario usar true 
    // colocar alert e/ou
    
    do {
        console.log("Usuario" +usuario);
        console.log("Storange"+cadastro[0]);
        console.log("Senha:"+ senha);
        console.log("Storage"+cadastro[5]);
        if (usuario == cadastro[0] && senha == cadastro[5]){
            alert("Login realizado com sucesso");
            i = true;
        }else{//Fazer ler o print
            alert("Usuário e/ou senha incorreto, tente novemente");
            break;
            
        }
    }while (i = false );
  
}

