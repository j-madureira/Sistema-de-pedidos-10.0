//Início
alert(`Bem vindo ao sistema de pedidos!`);

//Recebendo o nome do cliente
var nome;
if(nome = prompt(`Informe seu nome:`)){
    alert(`${nome}, faça cadastro para utilizar nosso sistema!`);
}

else{
    while(nome == ""){
    alert(`Você ainda não informou seu nome!`);
    if(nome = prompt(`Informe seu nome para continuar:`)){
    alert(`${nome}, faça cadastro para utilizar nosso sistema!`);
    break;
    }
    }
}

//CADASTRO
//Método para receber o nome de usuário
function criarNome(){
    if(usuario.nome = prompt(`Crie seu nome de usuário:`)){
    }

    else{
    while(usuario.nome == ""){
    alert(`Você ainda não criou seu nome de usuário!`);
    if(usuario.nome = prompt(`Crie seu nome de usuário para continuar:`)){
    break;
    }
    }
    }
}

//Método para criar a senha
function criarSenha(){
    if(usuario.senha = prompt(`Crie sua senha:`)){
    alert(`Você já pode fazer Login!`);
    }

    else{
    while(usuario.senha == ""){
    alert(`Você ainda não criou sua senha!`);
    if(usuario.senha = prompt(`Crie sua senha para continuar:`)){
    alert(`Você já pode fazer Login!`);
    break;
    }
    }
    }
}

//Objeto usuário com as seguintes propriedades - Nome e senha
var usuario = {
               nome: criarNome,
               senha: criarSenha
}

criarNome();
criarSenha();

//Método para fazer Login
function vLoginN(){
    usuarioLogin.nome = prompt(`Nome de usuário:`);
    if(usuarioLogin.nome == usuario.nome){
    }

    else{
    while(usuarioLogin.nome != usuario.nome){
    alert(`Nome de usuário incorreto!`);
    usuarioLogin.nome = prompt(`Digite seu nome de usuário para continuar:`);
    if(usuarioLogin.nome == usuario.nome){
    break;
    }
    }
    }
}

//Método para fazer Login senha
function vLoginS(){
    usuarioLogin.senha = prompt(`Senha:`);
    if(usuarioLogin.senha == usuario.senha){
    alert(`Bem vindo ${nome} !`);
    }

    else{
    while(usuarioLogin.senha != usuario.senha){
    alert(`Senha incorreta!`);
    usuarioLogin.senha = prompt(`Digite sua senha para continuar:`);
    if(usuarioLogin.senha == usuario.senha){
    alert(`Bem vindo ${nome}`);
    break;
    }
    }
    }
}

//Objeto para Login
var usuarioLogin = {
                    nome: vLoginN,
                    senha: vLoginS
}

vLoginN();
vLoginS();

//Cardápio de lanches e pedido
alert(`Cardápio lanches:\n
                Lanche: Big Bacon\n
                Lanche: Small Chease\n
                Lanche: Big Chease`);

//Array com os lanches e também recebendo o pedido
var lanches = ["Big Bacon","Small Chease","Big Chease"];
var pedidoLanche = prompt(`Peça seu lanche:`);

var index_lanche = lanches.indexOf(pedidoLanche);
if(index_lanche != -1){
}

else{
    while(index_lanche == -1){
    alert(`Não temos esse lanche aqui!`);
    pedidoLanche = prompt(`Peça algum lanche do cardápio:`);
    index_lanche = lanches.indexOf(pedidoLanche);
    if(index_lanche != -1){
    break;
    }
    }
}

//Cardápio de bebidas e pedido
alert(`Cardápio bebidas:\n
                Bebida: Coca 120ML\n
                Bebida: Kuat 120ML\n
                Bebida: Morango Refri 120ML`);

//Array com bebidas e recebendo pedido
var bebidas = ["Coca 120 ML","Kuat 120 ML","Morango Refri 120ML"];
var pedidoBebida = prompt(`Peça sua bebida:`);

var index_bebida = bebidas.indexOf(pedidoBebida);
if(index_bebida != -1){
   alert(`Tudo certo com seu pedido ${nome}, só precisamos saber onde entregar!\n
          Informe pra gente!`);
}

else{
    while(index_bebida == -1){
    alert(`Não temos essa bebida aqui!`);
    pedidoBebida = prompt(`Peça alguma bebida do cardápio:`);
    index_bebida = bebidas.indexOf(pedidoBebida);
    if(index_bebida != -1){
    alert(`Tudo certo com seu pedido ${nome}, só precisamos saber onde entregar!\n
    Informe pra gente!`); 
    break;   
    }
    }
}

/* Recebendo a localização do cliente que são as seguintes:
Cidade
Bairro
Rua
Número da Casa
*/

//Recebendo a cidade
var cidade;
if(cidade = prompt(`Cidade:`)){
}

else{
    while(cidade == ""){
    alert(`Você ainda não informou a sua cidade!`)
    if(cidade = prompt(`Informe sua cidade para continuar:`)){
    break;
    }
}
}

//Recebendo o bairro
var bairro;
if(bairro = prompt(`Bairro:`)){
}

else{
    while(bairro == ""){
    alert(`Você ainda não informou seu bairro!`);
    if(bairro = prompt(`Informe seu bairro para continuar:`)){
    break;
    }
    }
}

//Recebendo a rua
var rua;
if(rua = prompt(`Rua:`)){
}

else{
    while(rua == ""){
    alert(`Você ainda não informou sua rua!`);
    if(rua = prompt(`Informe sua rua para continuar:`)){
    break;
    }
    }
}

//Recebendo o número da casa
var numeroCasa;
if(numeroCasa = prompt(`Número da casa:`)){
    alert(`Tudo certo ${nome}, seu pedido foi realizado e está a caminho!!`);
}

else{
    while(numeroCasa == ""){
    alert(`Você ainda não informou o número da sua casa!`);
    if(numeroCasa = prompt(`Informe o número da casa para continuar:`)){
    alert(`Tudo certo ${nome}, seu pedido foi realizado e está a caminho!!`);
    break;
    }
    }
}

//Funções do sistema, exibir os pedidos e informar onde entregar!
function clickPedido(){
    var pedido = document.getElementById("click");
    pedido.innerHTML = `<p>O cliente ${nome} fez um pedido!<p>
                        <p>Um lanche: ${pedidoLanche}</p>
                        <p>E uma bebida: ${pedidoBebida}</p>`;
}

function clickEntrega(){
    var entrega = document.getElementById("segclick");
    entrega.innerHTML = `<p>Cidade: ${cidade}</p>
                         <p>Bairro: ${bairro}</p>
                         <p>Rua: ${rua}</p>
                         <p>Número da casa: ${numeroCasa}</p>`;
}