$(document).ready(function() {
 //   $("#word2").hide();
});

$(document).keydown(function(key) {

//    //When the left arrow key is pressed, removes the rightmost value in word1 and puts it in word2.
//    if(key.keyCode == 37) {
//        var w1 = $("#word1").text();
//        var w2 = $("#word2").text();
//        var last1 = w1.substr(w1.length - 1);
//        var newW1 = w1.slice(0,-1);
//        var newW2 = last1 + w2;
//        $("#word1").text(newW1);
//        $("#word2").text(newW2);
//    };
//
//    //When the right arrow key is pressed, removes the leftmost value in word2 and puts it in word1.
//    if(key.keyCode == 39) {
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

    //Right arrow press
    if(key.keyCode == 39) {
        $("#notTyped2").text($("#notTyped1").text());
        $("#notTyped1").text($("#toType1").text());
        $("#toType1").text($("#typed1").text());
        $("#typed1").text($("#typed2").text());
    };

    //Left arrow press
    if(key.keyCode == 37) {
        $("#typed2").text($("#typed1").text());
        $("#typed1").text($("#toType1").text());
        $("#toType1").text($("#notTyped1").text());
        $("#notTyped1").text($("#notTyped2").text());
    };

//    function moveDivs(direction) {
//        if(direction = "left") {
//            $("#typed2").text($("#typed1").text());
//            $("#typed1").text($("#toType1").text());
//            $("#toType1").text($("#notTyped1").text());
//            $("#notTyped1").text($("#notTyped2").text());
//        } else if(direction = "right") {
//            $("#notTyped1").text($("#notTyped2").text());
//            $("#toType1").text($("#notTyped1").text());
//            $("#typed1").text($("#toType1").text());
//            $("#typed2").text($("#notTyped1").text());
//        }
//     }
});
