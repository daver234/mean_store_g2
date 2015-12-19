var mongoose = require('mongoose');
var Order = mongoose.model('Order');
var Customer = mongoose.model('Customer');
var moment = require('moment');
moment().format(); 

module.exports = (function() {
  return {
  start_orders: function(req, res) {
    console.log('in start for Orders in server Controler:');
       // Order.find({}, function(err, orders) {
    Order.find({}).sort({created_at: 'descending'}).exec(function(err, orders) {
      if(err){
          console.log("something wrong in finding all customers");
        } else {
          console.log('got all customers');
        }
      res.json(orders); 
    })
  },

  new_order: function(req, res) {
    console.log('In new_order');
    console.log('order name is:', req.body.customer_name)
    var order_date = moment().format("MMMM DD, YYYY");

    var order = new Order({order_qty: req.body.order_qty, order_name: req.body.order_name, order_date: order_date, customer_name: req.body.customer_name});
    
    order.save(function(err){
         if(err) {
            console.log('something went wrong in saving new order');
          } else { 
            res.end();
                 
                }
          })
        }
      }
  }) ();