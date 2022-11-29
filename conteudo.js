let nome = document.getElementById('nome');
let email = document.getElementById('email');


function cadastrar(){
    if(nome == ""){
        alert("Preencha o campo NOME");
    }else if(email == ""){
        alert("Preencha o campo EMAIL");
    }
        alert("Cadastro realizado com sucesso!!");
}