xmlhttp = new XMLHttpRequest();
xmlhttp.open('GET', 'db.xml', false);
xmlhttp.send();

let xmlDoc = xmlhttp.responseXML;

let allCards = xmlDoc.getElementsByTagName('cards');
let allObj = xmlDoc.getElementsByTagName('objetivos');

function cards() {
    for(let i = 0; i < allCards.length; i++) {
        document.write(
            "<li class='list-group'>" +
                "<div class='card' style='width:300px'>" + 
                    "<img class='card-img-top' src='" + allCards[i].getElementsByTagName('image')[0].attributes[0].nodeValue + "' alt='" + allCards[i].getElementsByTagName('image')[0].childNodes[0].nodeValue + "'>" +
                    "<div class='card-body'>" +
                        "<h4 class='card-title'>" + allCards[i].getElementsByTagName('nome')[0].childNodes[0].nodeValue + "</h4>" +
                        "<p class='card-text'>" + allCards[i].getElementsByTagName('funcao')[0].childNodes[0].nodeValue + "</p>" +
                        "<a href='#' class='btn btn-primary'>Contato</a>" +
                    "</div>" +
                "</div>" +
            "</li>"
        );
    }
}

function objetivos() {
    for(let i = 0; i < allObj.length; i++) {
        document.write(
            `<div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <a href="#" class="destaque ">  
                    <div class="container mb-3">
                        <i class='${allObj[i].getElementsByTagName('icons')[0].childNodes[0].nodeValue}' style='font-size:100px'></i>
                    </div>
                    <h5>${allObj[i].getElementsByTagName('title')[0].childNodes[0].nodeValue}</h5>
                    <p class="mb-0 text-body">
                        ${allObj[i].getElementsByTagName('text')[0].childNodes[0].nodeValue}
                    </p>
                </a>
            </div>`
        );
    }
}