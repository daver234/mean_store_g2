mean_store.factory('Order_Factory', function($http) {
          console.log('just started in Order_Factory');
          var factory = {};
          var orders = [];

          factory.getOrders = function(callback) {
          $http.get('/getOrders').success(function(output) {
            console.log('back from getOrders in Factory');
            orders = output;
            callback(orders);
            }) 
          }

          factory.addOrder = function(info, callback) {
          console.log('new order in factory',info);
          // {order_name: info.order_name, order_qty: info.order_qty, customer_name: info.customer_name}
          $http.post('/addOrder', info).success(function() {
           console.log('in Order Factory; back from adding order');
           callback();
          }) 
          }
          // this is to help keep focus on the link selected in the Nav bar
          // $scope.getClass = function (path) { 
          //   if ($location.path().substr(0, path.length) == path) 
          //     { if (path == "/" && $location.path() == "/") 
          //       { return "active"; } else if (path == "/") { return ""; } return "active" } else { return "" } };

          return factory;
        });