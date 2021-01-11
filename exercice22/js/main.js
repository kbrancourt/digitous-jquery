$(document).ready(function(){
    $("button").click(function(){
        $("#text").animate({
            fontSize: '+=50px'
        }, 2000, function(){
            console.log("animation finie");
        })
    })
})