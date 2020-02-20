<?php
    require_once("init.php");
    $prenom =  $_POST["personne"];

    $r = $pdo->query("INSERT INTO employes(prenom) VALUES ('$prenom')");

    $lastId = $pdo ->lastInsertId();
    if($lastId > 0) {
        echo "Bien insere"." ".$prenom."en bas";
    }

?>