mean_store.factory('Customer_Factory', function($http) {
          var factory = {};
          var customers = [];

          factory.getCustomers = function(callback) {
            console.log('in getCustomers Factory Client');
            $http.get('/getCustomers').success(function(output) {
            console.log('back from getCustomers in Factory');
            customers = output;
            callback(customers);
            }) 
          }

          factory.addCustomer = function(info, callback) {
          console.log('new customer', info);
          $http.post('/addCustomer', info).success(function(result) {
          console.log('back from adding customer, will show err if one',result);
          callback(result);
          }) 
          }

          factory.checkCustomer = function(info, callback) {
          console.log('here is login',info);
          $http.post('/checkCustomer',info).success(function(result) {
          console.log('back from adding customer, will show err if one',result);
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