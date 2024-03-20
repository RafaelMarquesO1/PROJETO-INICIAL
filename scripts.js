var botao = document.getElementById("botao");
botao.addEventListener("click", alertar, false);
var nome = document.getElementById("nome");
var email = document.getElementById("email");
var telefone = document.getElementById("telefone");
var CEP = document.getElementById("CEP");
var Logradouro = document.getElementById("Logradouro");
var numero = document.getElementById("numero");
var complemento = document.getElementById("complemento");
var cidade = document.getElementById("cidade");
var estado = document.getElementById("estado");

var saida = document.getElementById("saida-de-dados");

function alertar(event){

        // alert("Você clicou no botão!!!" + event);
        // var numero = 6;
        //  resultado = numero % 2;
       // if(resultado == 0){
                saida.innerText = "Nome: " + nome.value + "\nEmail: " + email.value + "\nTelefone: " + telefone.value + "\nCEP: " + CEP.value + "\nLogradouro: " + Logradouro.value + "\nNúmero da casa: " + numero.value + "\nComplemento";
}


