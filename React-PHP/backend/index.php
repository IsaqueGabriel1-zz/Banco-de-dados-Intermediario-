<?php

require "./models/produtos.php";


header("Access-Control-Allow-Origin: *"); 
header ("Content-type: application / json"); 
$produtos = produto::getAll();


print_r(json_encode($produtos));
