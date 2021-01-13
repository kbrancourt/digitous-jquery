$(document).ready(function () {
    $("button").click(function () {
        $.ajax({
            url : 'https://restcountries.eu/rest/v2/name/'+ $("input").val(),
            success: function (value) {
                $("#country").html(value[0].name);
                $("#capital").html(value[0].capital);
            }
        });
    })
})