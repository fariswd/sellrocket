const _ = require('lodash')
const Product = require('../models/product.js')

//buat function product(app){

//}

const product = app => {
  let _products = [];

  //create
  app.post('/api/products', (req, res) => {
    const newProduct = new Product (req.body)
    newProduct.save().then(() => {
      res.json({"info": "Product Created"})
    }).catch(err => {
      console.error(err)
    })

  })

  //read
  app.get(("/api/products"), (req, res) => {
    Product.find().then(products => {
      res.json(products)
    }).catch(err => {
      console.error(err)
    })
  })

  //update
  app.put(("/api/products/:id"), (req, res) => {
    Product.update({ _id: req.params.id }, req.body)
    .then(() => {
      res.json({ "info": 'Product Updated'})
    }).catch(err => {
      console.error(err)
    })
  })

  //delete
  app.delete('/api/products/:id', (req, res) => {
    Product.remove({ _id: req.params.id })
    .then(() => {
      res.json({"info": "Product Removed"})
    }).catch(err => {
      console.error(err)
    })
  })

}

module.exports = product
