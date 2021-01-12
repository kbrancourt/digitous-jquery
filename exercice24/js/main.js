$(document).ready(function(){
    $("button").click(function(){
        $("#bg").animate({
            marginLeft: '100px'
    }, 2000, function(){
        console.log("animation finie");
    })
   
})
})