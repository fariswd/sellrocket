const _ = require('lodash');

//buat function product(app){

//}

const product = app => {
  let _products = [];

  //create
  app.post('/api/products', (req, res) => {
    _products.push(req.body);
    res.json({"info": "Product Created"})
    //_products.push(req)
  })

  //read
  app.get(("/api/products"), (req, res) => {
    res.json(_products)
  })

  //update
  app.put(("/api/products/:id"), (req, res) => {
    //proses update
    const index = _.findIndex(_products, {
      id: parseInt(req.params.id)
    })
    _.merge(_products[index], req.body)
    res.json({"info": "Product Updated"});
  })

  //delete
  app.delete('/api/products/:id', (req, res) => {
    _.remove(_products, product => {
      return product.id === parseInt(req.params.id)
    })
  res.json({"info": "Product Removed"})
  })

}

module.exports = product
