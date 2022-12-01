let nome = document.getElementById('nome');
let email = document.getElementById('email');


function cadastrar(){
    if(nome.value.length != 0 && email.value.length != 0 ){
        alert("Cadastro realizado com sucesso!!");
    } 
}