//Importando o Express para o Projeto
const Express = require ("express");
//Inicializando o Express no projeto Node.js
const Aplicativo = new Express();

//GET - pedir algo pro servidor
Aplicativo.get('/',(RequisicaoCliente, RespostaServidor)=>{
    RespostaServidor.send("Hello World")
});


//Ultima parte da aplicação
//Configuração da porta de acesso aos recursos do Express via Http
Aplicativo.listen(1234, ()=> console.log("servidor ok..."))


