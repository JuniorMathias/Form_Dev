let nome = document.getElementById('nome');
let email = document.getElementById('email');


function cadastrar(){
    if(nome.value.length == 0){
        alert("Preencha o campo NOME");
    }else if(email.value.length == 0){
        alert("Preencha o campo EMAIL");
    }else{
        alert("Cadastro realizado com sucesso!!");
    }    
}