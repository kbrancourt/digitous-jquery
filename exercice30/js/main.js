$(document).ready(function(){
    $("input").keyup(function(){
        
            if($("input").val().length > 5){
                $("input").addClass("is-valid").removeClass("is-invalid");
            }else{
                $("input").addClass("is-invalid").removeClass("is-valid");
            }
    
        })
})