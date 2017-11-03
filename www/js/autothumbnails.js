const id_selector = "#product-cards";

$(document).ready(function () {
    renderThumbs();
});

function renderThumbs(article) {
    $.getJSON("/json/products.json", function (json) {
        renderInfo(json, 3);
    });
};

function renderInfo(data, max) {
    $.each(data, function (i) {
        $(id_selector).append(
            '<a href="/product/' + this.Detaljer.Artikelkod + '" class="news">' +
            '<article>' +
            '<div class="img-wrapper">' +
            '<img src="' + this.Bild + '" class="thumbnail" alt="' + this.Namn + '">' +
            '</div>' +
            '<div class="info">' +
            '<h3>' + this.Namn + '</h3>' +
            '<p>' + this.Beskrivning1 + '</p>' +
            '</div>' +
            '</article>' +
            '</a>'
        );
        if (max != 0){
            return i<max;
        }
    });
};