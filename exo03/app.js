
$(document).ready(function(){

    $("#submit").click (function(event){
        event.preventDefault();
        appelAjax();
    });

    function appelAjax() {
        $.ajax({
            type:"GET",
            url:"ajax.php",
            data:{
                personne : $("#personne").val()
            },
            success:function (data) {
                var result = $.parseJSON(data);
                console.log(result);
                var ouvertureTbale = "<table border = '1'>";
                var contentTable = " ";
                var femerTbale = "</table>";

                $.each(result, function (indice, objet) {
                    contentTable += "<tr>";
                    contentTable += "<td>"+  objet.id_employes + "</td>";
                    contentTable += "<td>"+  objet.prenom + "</td>";
                    contentTable += "<td>"+  objet.nom + "</td>";
                    contentTable += "<td>"+  objet.sexe + "</td>";
                    contentTable += "<td>"+  objet.service + "</td>";
                    contentTable += "<td>"+  objet.salaire + "</td>";
                    contentTable += "</tr>";
                });
                var table = ouvertureTbale + contentTable + femerTbale;
                $("#resultat").html(table);
              }
        });
     }
});
//     function appelAjax() {
//         $.get("ajax.php",function(data){
//             var result = $.parseJSON(data);
//             console.log(result);
//         });
//     }
// });
