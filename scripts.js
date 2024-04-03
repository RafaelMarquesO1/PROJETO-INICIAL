var botao = document.getElementById("botao");
botao.addEventListener("click", alertar, false);
var nome = document.getElementById("nome");
var email = document.getElementById("email");
var telefone = document.getElementById("telefone");
var cep = document.getElementById("cep");
var logradouro = document.getElementById("logradouro");
var numero = document.getElementById("numero");
var complemento = document.getElementById("complemento");
var bairro = document.getElementById("bairro");
var cidade = document.getElementById("cidade");
var estado = document.getElementById("estado");

var saida = document.getElementById("saida-de-dados");

function alertar(event){

        // alert("Você clicou no botão!!!" + event);
        // var numero = 6;
        //  resultado = numero % 2;

       // if(resultado == 0){

        const url = `https://viacep.com.br/ws/${cep.value}/json`;

        fetch(url).then(function(resposta){
                return resposta.json();
        })
        .then(
                function(dadosDoEndereco){
                        logradouro.value = dadosDoEndereco.logradouro;
                        bairro.value = dadosDoEndereco.bairro;
                        cidade.value = dadosDoEndereco.localidade;
                        estado.value = dadosDoEndereco.uf;
                        complemento.value = dadosDoEndereco.complemento;
                }
        )

        .catch(function(e){
                alert(e.message());
        });
        

        saida.innerText = "Nome: " + nome.value + "\nEmail: " + email.value + "\nTelefone: " + telefone.value + "\nCEP: " + cep.value + "\nLogradouro: " + logradouro.value + "\nNúmero da casa: " + numero.value + "\nComplemento: " + complemento.value +"\nBairro: " + bairro.value + "\nCidade: " + cidade.value + "\nEstado: " + estado.value;

        // if(resultado == 0){
                
                saida.innerText = "Nome: " + nome.value + "\nEmail: " + email.value + "\nTelefone: " + telefone.value + "\nCEP: " + cep.value + "\nLogradouro: " + logradouro.value + "\nNúmero da casa: " + numero.value + "\nComplemento: " + complemento.value + "\nCidade: " + cidade.value + "\nEstado: " + estado.value;

}


