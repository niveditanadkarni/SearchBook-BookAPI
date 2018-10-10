function searchbook() {
    var search = document.getElementById('books').value
    document.getElementById('result').innerHTML = "";
    console.log(search)

    var googleAPI = "https://www.googleapis.com/books/v1/volumes?q=" + search +
        "&maxResults=5";

    $.getJSON(
        googleAPI,
        function(response) {
            var Books = [];

            for (var i = 0; i < response.items.length; i++) {
                var item = response.items[i];
                var title = item.volumeInfo.title;

                if (item.volumeInfo.authors) {
                    title += item.volumeInfo.authors.join(', ');
                }
                Books.push({
                    label: title,
                    value: title,
                });
            }
            $("#books").autocomplete({
                source: Books,
                select: function(event, ui) {
                    var disp = new google.books.DefaultViewer(
                        document.getElementById('result'));
                    disp.load(document.getElementById('value').value);

                }
            });
        });


    // $('search').typeahead({
    // function load_data(query, typeahead_search = 'yes') {
    //    $.ajax({
    //      url: "https://www.googleapis.com/books/v1/volumes?q=" + search + "&maxResults=5",
    //    method: "POST",
    //  data: { query: query, typeahead_search: typeahead_search }
    //dataType: "json",

    //success: function(data) {
    //  for (i = 0; i < data.items.length; i++) {
    //    result.innerHTML += "<h5>" + data.items[i].volumeInfo.title + "<h5>";

    //                    result.innerHTML += "<h7>" + data.items[i].volumeInfo.authors + "<h7>";


    //              }
    //            console.log(data)
    //      },

    //    type: 'GET'

    //
    //      });
    //}
    //});
}


//document.getElementById('button').addEventListener('click', searchbook, false);