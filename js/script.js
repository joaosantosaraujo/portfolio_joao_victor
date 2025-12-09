//Início do formulário//
var formulario = document.getElementById("formulario");

//Pós-envio//
if (formulario) {
    formulario.addEventListener("submit", function (e) {
        e.preventDefault(); //Evita o envio normal do formulário//

        //Extrai valores dos campos//
        var nome = document.getElementById("nome").value;
        var email = document.getElementById("email").value;
        var mensagem = document.getElementById("mensagem").value;

        //Verifica se existem campos em branco//
        if (nome == "" || email == "" || mensagem == "") {
            alert("Por favor, preencha corretamente os campos antes do envio!");
            return false;
        }

        //Verifica os sinais de @ e . no email//
        if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
            alert("Por favor, digite um e-mail válido!");
            return false;
        }

        //Limpando os campos se tiver tudo ok//
        document.getElementById("nome").value = "";
        document.getElementById("email").value = "";
        document.getElementById("mensagem").value = "";

        //Mensagem de sucesso no envio//
        alert("Mensagem enviada com sucesso! Aguarde 3 dias úteis para retorno.");

    });
}

//Variável para saber se o tema já está escuro
var temaEscuro = false;

// Função para mudar o tema
function mudarTema() {
    var body = document.body;
    var conteudo = document.querySelector('.conteudo');
    var menu = document.querySelector('.menu');
    var titulos = document.querySelectorAll('.conteudo h1, .conteudo h3');
    var paragrafos = document.querySelectorAll('.conteudo p');
    
    if(temaEscuro == false) {
        // muda pro tema escuro
        body.style.backgroundColor = '#1a1a1a';
        body.style.color = '#ffffff';
        if(conteudo) {
            conteudo.style.backgroundColor = '#2d2d2d';
            conteudo.style.color = '#ffffff';
        }
        if(menu) {
            menu.style.backgroundColor = '#111';
        }
        // muda cor dos titulos
        for(var i = 0; i < titulos.length; i++) {
            titulos[i].style.color = '#ffffff';
        }
        // muda cor dos paragrafos
        for(var i = 0; i < paragrafos.length; i++) {
            paragrafos[i].style.color = '#dddddd';
        }
        temaEscuro = true;
    } else {
        // volta pro tema claro
        body.style.backgroundColor = '#f4f4f4';
        body.style.color = '#333';
        if(conteudo) {
            conteudo.style.backgroundColor = '#ffffff';
            conteudo.style.color = '#666';
        }
        if(menu) {
            menu.style.backgroundColor = '#333';
        }
        // volta cor dos titulos
        for(var i = 0; i < titulos.length; i++) {
            titulos[i].style.color = '#333';
        }
        // volta cor dos paragrafos
        for(var i = 0; i < paragrafos.length; i++) {
            paragrafos[i].style.color = '#666';
        }
        temaEscuro = false;
    }
}

// Adiciona o botão de tema
var botaoTema = document.getElementById('botao-tema');
if(botaoTema) {
    botaoTema.addEventListener('click', mudarTema);
}






    