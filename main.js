//Test array of strings
var arr = ["these","words","are","really","super","cool","and","kinda","random","yep",];

$(document).ready(function() {
    initializeWords();
});


function printRandoms(number) {
    var i = 0;
    while(i < number) {
        i++;
        var rand = Math.floor(Math.random() * arr.length);
        console.log("Random Number #" + i + ": " + rand);
    }
};

// Initializes the first three words to type.
function initializeWords() {
    var r1 = Math.floor(Math.random() * arr.length);
    var r2 = Math.floor(Math.random() * arr.length);
    var r3 = Math.floor(Math.random() * arr.length);
    $("#toType").text(arr[r1]);
    $("#notTyped1").text(arr[r2]);
    $("#notTyped2").text(arr[r3]);
};

$(document).keydown(function(key) {

//    //When the down arrow key is pressed, removes the rightmost value in word1 and puts it in word2.
//    if(key.keyCode == 40) {
//        var w1 = $("#word1").text();
//        var w2 = $("#word2").text();
//        var last1 = w1.substr(w1.length - 1);
//        var newW1 = w1.slice(0,-1);
//        var newW2 = last1 + w2;
//        $("#word1").text(newW1);
//        $("#word2").text(newW2);
//    };
//
//    //When the up arrow key is pressed, removes the leftmost value in word2 and puts it in word1.
//    if(key.keyCode == 38) {
//        var w1 = $("#word1").text();
//        var w2 = $("#word2").text();
//        var first2 = w2.charAt(0);
//        var newW2 = w2.slice(1,w2.length);
//        var newW1 = w1 + first2;
//        $("#word1").text(newW1);
//        $("#word2").text(newW2);
//    };

    //Checks if the character typed is the first character in the span "toType" and moves it to the span "typed"
    var charToType = $("#toType").text().charAt(0);
    var keyPressed = String.fromCharCode(key.keyCode);
    if(keyPressed.toLowerCase() == charToType) {
        var typed = $("#typed").text();
        typed += charToType;
        $("#typed").text(typed);
        var type = $("#toType").text();
        type = type.substr(1, type.length);
        $("#toType").text(type);
    };

    //Checks if space is being pressed as well as if the span #toType is empty, if so it triggers divMove(left).
    if((key.keyCode == 0 || key.keyCode == 32) && $("#toType").text() == "") {
            $("#typed2").text($("#typed1").text());
            $("#typed1").text($("#typed").text());
            $("#typed").text("");
            $("#toType").text($("#notTyped1").text());
            $("#notTyped1").text($("#notTyped2").text());
            var rand = Math.floor(Math.random() * arr.length);
            $("#notTyped2").text(arr[rand]);
    };
});
