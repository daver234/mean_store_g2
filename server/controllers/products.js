var mongoose = require('mongoose');
var Product = mongoose.model('Product');
var Customer = mongoose.model('Customer');
var Order = mongoose.model('Order');
var moment = require('moment');
moment().format(); 

module.exports = (function() {
  return {
  start_products: function(req, res) {
    console.log('in start for Products in server Controler:');
    Product.find({}, function(err, products) {
      if(err){
          console.log("something wrong in finding all products");
        } else {
          console.log('got all products');
        }
      res.json(products); 
    })
  },

  update_qty: function (req, res) {
    console.log('in change_quantity on Server Products js');

    Product.findOne({product_name: req.body.order_name}, function(err,product) {
      console.log('err & person',err, product)
      if(err) {
        console.log('problem finding product',err);
        res.json(err);
      } else { 
        console.log('found',product);
        var new_qty = product.product_qty - req.body.order_qty;
        var updated_qty = {product_qty: new_qty};

        Product.update({product_name: req.body.order_name}, updated_qty, function(err) {
        if(err) {
          console.log ('could not update quantity');
        } else {
          console.log ('updated quantity');
          }
        })  
        res.end();
         }
         }); 
        


    
  },

  new_product: function(req, res) {
    console.log('In new_product server controller');
    console.log('product name is:', req.body.product_name)
    var date_display = moment().format("MMMM DD, YYYY");

    //Customer.findOne({_id: req.params.id}, function(err, customer) {
      // console.log('here is customer', customer);
      var product = new Product({product_qty: req.body.product_qty, product_name: req.body.product_name, product_desc: req.body.product_desc, date_display: date_display, image_url: req.body.image_url});
      // customer.orders.push(order);
      product.save(function(err){
         if(err) {
            console.log('something went wrong in saving new product');
          } else { 
            console.log('successfully added a product!');
            res.end();
                  }
          })
        }
      }
  }) ();