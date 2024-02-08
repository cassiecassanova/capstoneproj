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
app.get("/", function(req, res) {
    
});

  const port = 3001;
  console.log("server starting on port: " + port );
  app.listen(port);