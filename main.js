//Test array of strings
var arr = ["these","words","are","really","super","cool","and","kinda","random","yep", "her's", "their's", "them's", "these's"];
var wordCount = 0;

$(document).ready(function() {
    initializeWords();
    printWordLength();
});

//A test function to print out "number" amount of random integers from 0 to the length of the array arr.
function printRandoms(number) {
    var i = 0;
    while(i < number) {
        i++;
        var rand = Math.floor(Math.random() * arr.length);
    }
};

//Gives the "word bonus" of a word based on it's length. The average word has a length of 5 characters, so it divides the length by 5.
function wordBonus(length) {
    var bonusLength = length/5;
    return bonusLength;
};

//Goes through an array printing the word, word length, and the word bonus.
function printWordLength() {
    var i = 0;
    while (i < arr.length) {
        console.log("Number " + (i));
        var length = arr[i].length
        console.log("Word: " + arr[i] + ", Length: " + length + ", Bonus: " + wordBonus(length));
        console.log("");
        i++;
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

    //Checks if space is being pressed as well as if the span #toType is empty, if so it moves the contents of each div to the left and populates
    //   the rightmost div with a random word from the array.
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
