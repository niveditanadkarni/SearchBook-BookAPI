$(document).ready(function() {
    $("#myform").submit(function() {
        var search = $("#books").val();

        if (search == ' ') {
            alert("please enter text");
        } else {
            var title = ' ';
            var authors = ' ';
            $.get("https://www.googleapis.com/books/v1/volumes?printType=books&q=" + search, function(response) {
                console.log(response);

            });

        }
    });
    return false;
});