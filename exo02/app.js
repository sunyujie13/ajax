
$(document).ready(function(){

    $("#submit").click (function(event){
        event.preventDefault();
        appelAjax();
    });
    function appelAjax() {
        $.ajax({
            type:"POST",
            url:"ajax.php",
            data:{
                personne : $("#personne").val()
            },
            success:function (data) {
                // console.log(data);
                $("#resultat").html(data);
                $("#form").hide();
              }
        });
     }


});