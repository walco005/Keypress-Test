$(document).ready(function() {
 //   $("#word2").hide();
});

$(document).keydown(function(key) {
    //Grabs the keyCode of the key pressed & displays it in the typed div
    $("#typed").html(key.keyCode);

    //When the left arrow key is pressed, removes the rightmost value in word1 and puts it in word2.
    if(key.keyCode == 37) {
        var w1 = $("#word1").text();
        var w2 = $("#word2").text();
        var last1 = w1.substr(w1.length - 1);
        var newW1 = w1.slice(0,-1);
        var newW2 = last1 + w2;
        $("#word1").text(newW1);
        $("#word2").text(newW2);
    };

    //When the right arrow key is pressed, removes the leftmost value in word2 and puts it in word1.
    if(key.keyCode == 39) {
        var w1 = $("#word1").text();
        var w2 = $("#word2").text();
        var first2 = w2.charAt(0);
        var newW2 = w2.slice(1,w2.length);
        console.log("New Word 2: " + newW2);
        var newW1 = w1 + first2;
        $("#word1").text(newW1);
        $("#word2").text(newW2);
    };
});
