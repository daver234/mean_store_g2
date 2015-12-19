mean_store.factory('Product_Factory', function($http) {
          var factory = {};
          var products = [];

          factory.getProducts = function(callback) {
            console.log('in getProducts Factory Client');
            $http.get('/get_Products').success(function(output) {
            console.log('back from getProducts in Factory');
            customers = output;
            callback(customers);
            }) 
          }

          factory.addProduct = function(info, callback) {
          console.log('new product', info);
          $http.post('/addProduct', info).success(function(result) {
           console.log('back from adding product, will show err if one',result);
           callback(result);
          }) 
          }

          factory.update_Qty = function(info, callback) {
          console.log('bbbbbbb ready to update qty in Product Factory', info);
          console.log('hellow');
          $http.post('/change_quantity', info).success(function(result) {
            console.log('back from updating quantity, will show err if exists',result);
            callback(result);
          }) 
          }
          // factory.removeCustomer = function(info,callback) {
          //   console.log('removeCustomer in Factory', info._id);
          //   $http.post('removeCustomer', {_id: info._id}).success(function() {
          //   console.log('back from removing customer');
          //   callback();
          //     })
          // }
          return factory;
        });