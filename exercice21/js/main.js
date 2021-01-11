$(document).ready(function(){
    $("button").click(function(){
        $("#square").animate({
            height: '+=500px'
    }, 2000, function(){
        console.log("animation finie");
    })
   
})
})