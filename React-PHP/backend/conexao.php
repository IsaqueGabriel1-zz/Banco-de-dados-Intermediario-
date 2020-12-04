<?php

class Connection{
    public static function getDb()
    {
        $conn = new PDO(
            "mysql:host=localhost;dbname=feletro;",
            "root",
            ""
        );

        if ($conn){
            return $conn;
        } else{
            echo "Falha ao conectar";
        }
    }
}
