const id_selector = "#product-cards";

$(document).ready(function() {
    renderThumbs();
});

function renderThumbs(article) {
    $.getJSON("/json/products.json", function(json) {
        renderInfo(json);
    });
}

function renderInfo(data) {
    for (let item in data) {
        let val = data[item];
        $(id_selector).append(
            '<a href="/product/' + item + '" class="news">' +
            '<article>' +
            '<div class="img-wrapper">' +
            '<img src="' + val["Bild"] + '" class="thumbnail" alt="' + val["Namn"] + '">' +
            '</div>' +
            '<div class="info">' +
            '<h3>' + val["Namn"] + '</h3>' +
            '<p>' + val["Beskrivning1"] + '</p>' +
            '</div>' +
            '</article>' +
            '</a>'
        );
    }
}