<?php

require "conexao.php";

class Cliente
{
    public $nome;
    public $endereco;
    public $telefone;
    public $produto;
    public $valorUni;
    public $quantidade;
    public $valorTot;
    
    public static function getAll()
    {
        $conexao = Connection::getDb();

        $stmt = $conexao->query("select * from pedidos");
        return $stmt->fetchall(PDO::FETCH_ASSOC);
    }
    
    public function registerCliente() 
    {
        $conexao = Connection::getDb();
        
        $stmt = $conexao->query("INSERT INTO pedidos (cliente, endereco, telefone, produto, valorUni, quantidade, valorTot)
        values('$this->nome', '$this->endereco', '$this->telefone', '$this->produto', '$this->valorUni', '$this->quantidade', '$this->valorTot')");                                                                
        
        if ($stmt->rowCount() > 0) {
            return true;
        } else {
            return false;
        }
    }
}