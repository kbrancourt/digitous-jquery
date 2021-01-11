$(document).ready(function(){
    $("button").click(function(){
        $("#square").animate({
            right: '50px',
            top: '180px' 
    }, 2000, function(){
        console.log("animation finie");
    })
   
})
})