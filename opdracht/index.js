"use strict";

async function loadAsync() {
    const data = await fetch('http://openlibrary.org/search.json?author=J._K._Rowling');
    const dataJson = await data.json();
    
   

    const htmlString = `
    <li> ${dataJson.title}</li>
    <li> ${dataJson.author_name}</li>
    <li> ${dataJson.first_publish_year}</li>

    `;

    const contentElement = document.getElementById("content");
    contentElement.innerHTML = htmlString;

    dataJson.sort(function(bookA, bookB) {
     if(bookA.first_publish_year <= bookB.first_publish_year) {
         return -1
     } else {
         return 1
     }
    });

    let max10 = dataJson.sort((a,b) => b-a).slice(0,10);

    try{document.getElementById("authorName")
}

    catch(err) {
        document.getElementById("authorName").innerHTML = err.message;
    }

    console.log(max10);
    console.log(dataJson);
    console.log(coverJson);
}
loadAsync();



// let keyData = document.getElementById("authorName");
// $.ajax({
//     url: "http://openlibrary.org/search.json?author=" + keyData + "&jscmd=details&callback=mycallback",
//     dataType: "jsonp",
//     success: function(data) {
//         let getData = data["author=" + keyData];
//         let title = getData.details.title,
//         author = getData.details.authors[0].name;
//         $('.title').text(title);
//         $('.author').text(author);
//     }
// });
