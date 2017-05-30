// constructing a queryURL variable we will use instead of the literal string inside of the ajax method

	var title = "space+jam";
    var queryURL = "http://www.omdbapi.com/?t=" + title + "&y=&plot=short&apikey=40e9cece";
    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response) {
      console.log(response);
      console.log(response.Runtime);
    });
// ---------------------------------------------------------
    console.log("This console.log will probably happen first because of asynchronicity.");
    var x = 2;
    var y = 10;
    var z = 13;
    console.log("We can also assign some variables and do some arithmetic while we wait too: 2 + 10 + 13 = ", x + y + z);