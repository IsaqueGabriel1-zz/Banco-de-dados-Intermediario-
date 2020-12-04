<?php

header("Access-Control-Allow-Origin:*");
header("Content-type: application/json");

require "./models/cliente.php";
 
$cliente = Cliente::getAll();

echo json_encode($cliente);
