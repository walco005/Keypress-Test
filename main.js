$(document).ready(function() {
    $("#word2").hide();
});

$(document).keypress(function(key) {
    $("#typed").html(key.keyCode);
});
