$(document).ready(function () {
    $("button").click(function () {
        $.ajax({
            url: 'https://restcountries.eu/rest/v2/name/france',
            success: function (value) {
                console.log(value[0].capital);
                console.log(value[0].name);
                console.log(value[0].population);
            }
        });
    })
})