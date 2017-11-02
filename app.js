let express = require('express');
let app = express();

app.use(express.static('www'));

app.listen(3000, function () {
  console.log('Webserver listening on port 3000');
});

app.get('/product/:Id', function (req, res) {
  res.sendFile(__dirname + '/www/productinfo/index.html')
})