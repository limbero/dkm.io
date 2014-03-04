var date = new Date();

$(document).ready(function () {
    if(date.getDay() === 3) {
        $('#checker').html("Idag är det pub! :D");
    }
    else {
        $('#checker').html("Idag är det inte pub :(");
    }
});