const express = require('express');
const dao = require("./data_access");
const app = express();
app.use(express.json());

app.get("/product/:id", function(req, res) {
    let product = dao.findProduct(req.params.isbn);
  
    if (product === undefined) {
      res.statusCode = 404;
      res.end();
    } else {
      res.send(product);
    }
  });