mean_store.controller('Orders_Controller', function($scope, Order_Factory, Customer_Factory, Product_Factory) {
        console.log('just entered Orders_Controller')
        Order_Factory.getOrders(function(data) {
          console.log('in OrdersController back from factory',data);
          $scope.orders = data;
          
          Customer_Factory.getCustomers(function(output) {
          console.log('in Customers_Controller back from getCustomers client Factory');
          console.log('here is data from getCustomers',output);
          $scope.customers = output;
          }); 
          Product_Factory.getProducts(function(data7) {
          console.log('***** got products for product_drop ****');
          console.log('here is data from getProducts',data7);
          $scope.products2 = data7;
          });
        }); 

        $scope.addOrder = function() {
          console.log('checking to see if $scope new order works',$scope.new_order)
          Product_Factory.update_Qty($scope.new_order,function(err) {
              console.log ('updated qty finally!');
              // $scope.orders = Order_Factory.getOrders(function(data9){
              // $scope.orders = data9;
              });
            //};
          console.log('in addOrder controller', $scope.new_order);
          Order_Factory.addOrder($scope.new_order, function(err) {
            console.log('in Order Controller; back from addOrder Factory');
            $scope.orders = Order_Factory.getOrders(function(data1){
              $scope.orders = data1;
              });
            });
        }
      });