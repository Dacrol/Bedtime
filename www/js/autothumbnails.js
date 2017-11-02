const id_selector = "#product-cards";

$(document).ready(function () {
    renderThumbs();
});

function renderThumbs(article) {
    $.getJSON("/json/products.json", function (json) {
        renderInfo(json);
    });
};

function renderInfo(data) {
    $.each(data, function () {
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
    });
};