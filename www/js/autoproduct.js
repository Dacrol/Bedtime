
const id_selectors = {
  productname: "#product-name",
  desc1: "#product-desc-1",
  delivery: "#product-delivery",
  desc2: "#product-desc-2",
  info: "#product-info",
  image: "#product-image"
}

const json_keys = {
  productname: "Namn",
  desc1: "Beskrivning1",
  delivery: "Leveranstid",
  desc2: "Beskrivning2",
  info: "Detaljer",
  image: "Bild"
}

$(document).ready(function() {
  renderCurrentProduct();
});

function renderCurrentProduct() {
  var id = getCurrentId();
  getProductAndRender(id);
}

function getCurrentId() {
  var path = window.location.pathname;
  var id = path
    .split("/")
    .pop()
    .split(".")
    .shift();
  return id;
}

function getProductAndRender(article) {
  $.getJSON("../json/products.json", function(json) {
    var data = json[article];
    renderInfo(data);
  });
}

function renderInfo(data) {
  for (let item in data[json_keys.info]) {
    let val = data[json_keys.info][item];
    $(id_selectors.info).append(
      '<tr><td class="tdspacing">' +
        item +
        '</td><td class="td"> ' +
        val +
        "</td></tr>"
    );
  }
  $(id_selectors.productname).text(data[json_keys.productname]);
  $(id_selectors.desc1).text(data[json_keys.desc1]);
  $(id_selectors.desc2).text(data[json_keys.desc2]);
  $(id_selectors.delivery).text(data[json_keys.delivery]);
  $(id_selectors.image).attr('src', data[json_keys.image]);
}
