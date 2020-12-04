<?php

require "conexao.php";

class produto{
    public $idproduto;
    public $categoria;
    public $descricao;
    
    public static function getAll(){
        $conexao = Connection::getDb();

        $stmt = $conexao->query("select * from produtos");
        return $stmt->fetchall(PDO::FETCH_ASSOC);
    }
}