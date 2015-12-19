var customers = require('../controllers/Customers.js');
var orders = require('../controllers/Orders.js');
var products = require('../controllers/Products.js');

module.exports = function(app) {
  	app.get('/getCustomers', function(req, res) {
  		customers.start_customers(req, res);
  	});
  
  app.post('/addCustomer', function(req, res) {
    	console.log('in routes.js /addCustomer');
    	customers.new_customer(req, res);
    });
  app.post('/checkCustomer', function(req, res) {
      console.log('*****in routes.js /checkCustomer');
      customers.check_customer(req, res);
    });
  app.post('/removeCustomer', function(req, res) {
    	customers.remove_customer(req, res);
    });

  app.post('/addOrder', function(req, res) {
    console.log(' in /addOrder')
    orders.new_order(req, res);
    });

  app.get('/getOrders', function(req, res) {
    console.log(' in /getOrders route.js')
    orders.start_orders(req, res);
    });

  app.get('/get_Products', function(req, res) {
    console.log(' in /getProducts route.js')
    products.start_products(req, res);
    });

  app.post('/addProduct', function(req, res) {
    console.log(' in /addProduct')
    products.new_product(req, res);
    });
  app.post('/change_quantity', function(req, res) {
    console.log(' ****** in /updateQty')
    products.update_qty(req, res);
    });

  
};