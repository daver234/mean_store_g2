var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');
var moment = require('moment');
moment().format(); 
var validate = require('mongoose-validator');

module.exports = (function() {
  return {
  start_customers: function(req, res) {
    console.log('in start:');
    Customer.find({}, function(err, customers) {
      if(err){
          console.log("something wrong in finding all customers");
        } else {
          console.log('got all customers');
        }
      res.json(customers); 
    })
  },
  check_customer: function(req, res) {
    console.log('In check_customer server controller', req.body.name);
    
    Customer.findOne({name: req.body.name}, function(err,person) {
      console.log('err & person',err, person)
      if(person == null) {
        console.log('your name does not exist',err);
        err = true;
        res.json(err);
      } else { 
        console.log('you exist',person);
        res.end();
      }
    })
  },

  new_customer: function(req, res) {
    console.log('In new_customer server controller');
    var date_display = moment().format("MMMM DD, YYYY");
    var customer = new Customer({name: req.body.name, date_display: date_display});
    console.log('here is the new customer',customer);
    customer.save(function(err) {
      if(err) {
        console.log('something went wrong in saving new customer, perhaps the name exists',err);
        res.json(err);
      } else { 
        console.log('successfully added a customer!');
        res.end();
      }
    })
  },
  remove: function(req, res){
    console.log('in remove: function in customers.js', req.body._id);
    Customer.remove({_id: req.body._id}, function(err, customers) {
      if(err){
            console.log("something wrong in removing a customer");
          } else {
            console.log('removed a customer');
          }
      res.end();
      })
  }
}
  }) ();