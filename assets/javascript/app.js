$(document).ready(function(){
    // var count = 60;


// function countdown(){


//     for(var i = 1; i <= 60; i++){
//     count --;
//     }

//     $("#timeremaining").html(count);
//     };

// setTimeout(countdown, 1000)

var count = setTimeout(function(){
    for(var i = 1; i <= 60; i++){
        count --;
        }
    $("#timeremaining").html(count);
}, 1000);






});
