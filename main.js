xmlhttp = new XMLHttpRequest();
xmlhttp.open('GET', 'db.xml', false);
xmlhttp.send();

let xmlDoc = xmlhttp.responseXML;

let allPosts = xmlDoc.getElementsByTagName('cards');

function cards() {
    for(let i = 0; i < allPosts.length; i++) {
        document.write(
            "<li class='list-group'>" +
                "<div class='card' style='width:300px'>" + 
                    "<img class='card-img-top' src='" + allPosts[i].getElementsByTagName('image')[0].attributes[0].nodeValue + "' alt='" + allPosts[i].getElementsByTagName('image')[0].childNode[0].nodeValue + "'>" +
                    "<div class='card-body'>" +
                        "<h4 class='card-title'>" + allPosts[i].getElementsByTagName('nome')[0].childNode[0].nodeValue + "</h4>" +
                        "<p class='card-text'>" + allPosts[i].getElementsByTagName('funcao')[0].childNode[0].nodeValue + "</p>" +
                        "<a href='#' class='btn btn-primary'>Contato</a>" +
                    "</div>" +
                "</div>" +
            "</li>"
        );
    }
}

