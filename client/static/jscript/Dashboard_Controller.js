mean_store.controller('Dashboard_Controller', function($scope, Customer_Factory, Order_Factory, Product_Factory) {
	     

        Product_Factory.getProducts(function(data6) {
          console.log('in Dashboard_Controller back from getProducts client Factory');
          //console.log('here is data from getProducts',data6);
          $scope.products = data6;
      		});

        Customer_Factory.getCustomers(function(data) {
          console.log('in Dashboard_Controller back from getCustomers client Factory');
          //console.log('here is data from getCustomers',data);
          for ( var i=0; i< data.length; i++){
            var now = new Date();
            var h1 = moment(data[i].created_at);
            var h2 = moment(now);
            var delta = Math.floor(moment.duration(h2.diff(h1)).asHours());
            data[i].time_diff = delta;
          };
          $scope.customers = data;
          });

        Order_Factory.getOrders(function(output2) {
          //console.log('in OrdersController back from factory',output2);
          for ( var i=0; i< output2.length; i++){
            var now = new Date();
            var h1 = moment(output2[i].created_at);
            var h2 = moment(now);
            var delta = Math.floor(moment.duration(h2.diff(h1)).asHours());
            output2[i].time_diff = delta;
          };

          $scope.orders = output2;
        });

        $scope.IsVisible = false;
            $scope.ShowHide = function () {
                //If DIV is visible it will be hidden and vice versa.
                $scope.IsVisible = $scope.IsVisible ? false : true;
            }
        $scope.IsVisibleOrders = false;
            $scope.ShowHideOrders = function () {
                //If DIV is visible it will be hidden and vice versa.
                $scope.IsVisibleOrders = $scope.IsVisibleOrders ? false : true;
            }  

         });