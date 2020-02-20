<?php
    require_once("init.php");
    $prenom =  $_GET["personne"];
    
   if(isset($prenom )){
       $r = $pdo->query("SELECT * FROM employes WHERE prenom = '$prenom'");
    //    var_dump($r);
   } ;
    $resultat= $r ->fetchAll(PDO::FETCH_ASSOC);
    // var_dump($resultat);
    $json = json_encode($resultat);
    echo $json;
// ?>


