mean_store.controller('Customers_Controller', function($scope, Customer_Factory, Order_Factory) {

        $scope.checkCustomer = function() {
        Customer_Factory.checkCustomer($scope.login, function(err) {
        if (err == true) {
              console.log('back from checkCustomer',err);
              $scope.errors_log = [{msg: "Your Name Does Not Exist"}];
              console.log('errors_log',$scope.errors_log);
            } else {
              
                };
              });
            }
        Customer_Factory.getCustomers(function(data) {
          console.log('in Customers_Controller back from getCustomers client Factory');
          console.log('here is data from getCustomers',data);
          
          $scope.customers = data;
          
          $scope.current = new Date();
          console.log('current date',$scope.current);
          console.log('created_at',$scope.customers[6].created_at);
          $scope.dates = moment.duration($scope.customers[6].created_at, 'hours').humanize();
          console.log('dates',$scope.dates);

          var d1 = moment($scope.customers[6].created_at);
          var d2 = moment($scope.current);
          var hours= Math.floor(moment.duration(d2.diff(d1)).asHours());
          console.log('difference in minutes', hours);
         
          $scope.hours = hours;

            Order_Factory.getOrders(function(output) {
            console.log('in OrdersController back from factory',output);
            $scope.orders = output;
              }); 
          }); 

          $scope.addCustomer = function() {
          console.log('in addCustomer Customer Controller');
          Customer_Factory.addCustomer($scope.new_customer, function(err) {
            if (err != []) {
              console.log('back from addCustomer',err);
              $scope.errors = [{msg: "The name already exists"}];
            } else {
              $scope.errors =[];
              $scope.customers = Customer_Factory.getCustomers(function(data){
              $scope.customers = data;
                });
              }
            });
        }
      });