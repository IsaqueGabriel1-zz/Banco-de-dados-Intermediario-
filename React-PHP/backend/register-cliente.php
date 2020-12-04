<?php

header("Access-Control-Allow-Origin:*");
header("Content-type: application/json");

require "./models/cliente.php";

$cliente = new Cliente;

$cliente->nome = $_POST['nome'];
$cliente->endereco = $_POST['endereco'];
$cliente->telefone = $_POST['telefone'];
$cliente->produto = $_POST['produto'];
$cliente->valorUni = $_POST['valorUni'];
$cliente->quantidade = $_POST['quantidade'];
$cliente->valorTot = $_POST['valorTot']; 

$validate = $cliente->registerCliente();

if ($validate){
    echo json_encode("Registro inserido");      
} else{
    echo json_encode("Não foi possivel inserir o registro");
}

print_r($cliente);
