
$(document).ready(function(){
        $(action).click(function () {
        $.ajax({
            url:"text.txt",
            dataType:"text",
            success:function(data){
                $("#demo").html(data);
            }
        });
     });
});