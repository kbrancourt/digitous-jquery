$(document).ready(function(){
    $("button").click(function(){
        
            if($("input").val().length > 5){
                $("input").addClass("is-valid").removeClass("is-invalid");
            }else{
                $("input").addClass("is-invalid").removeClass("is-valid");
            }
    
        })
})