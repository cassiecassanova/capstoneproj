const express = require('express');
const dao = require("./data_access");
const app = express();
app.use(express.json());

// app.get("/product/:id", function(req, res) {
//     let product = dao.findProduct(req.params.id);
  
//     if (product === undefined) {
//       res.statusCode = 404;
//       res.end();
//     } else {
//       res.send(product);
//     }
//   });

app.get("/", function(req, res) {
    console.log(res)
    res.send("hello")
});

app.get("/products", function(req, res) {
    dao.call('findAllProducts', {}, (result) => {
        if (result !== undefined) {
            res.send(result)
        } else {
            res.statusCode = 404;
            res.end()
        }
    })
})

const port = 3001;
console.log("server starting on port: " + port );
app.listen(port);