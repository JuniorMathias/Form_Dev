let nome = document.getElementById('nome');
let email = document.getElementById('email');
let checkBoxes = document.getElementsByClassName("check");
var element = document.getElementsByClassName("p1");


function cadastrar(e){
    if(nome.value.length != 0 && email.value.length != 0  ){
        checkBoxes = document.getElementsByClassName("check")
        let noCheckedBoxes = true
        for (i = 0; i< checkBoxes.length; ++i) {
            if(checkBoxes[i].checked) {
                noCheckedBoxes = false
                alert("Cadastro realizado com sucesso!!" + 
                " " + (element[0].innerHTML) + " " + nome.value);
            }
        }
        if(noCheckedBoxes) {
            alert(nome.value + " Você deve selecionar 'Sim' ou 'Não'");
        }
    }
}
