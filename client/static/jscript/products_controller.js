mean_store.controller('Products_Controller', function($scope, Product_Factory) {
        Product_Factory.getProducts(function(data5) {
          console.log('in Products_Controller back from getProducts client Factory');
          console.log('here is data from getProducts',data5);
          $scope.products = data5;
      		});

        $scope.addProduct = function() {
          console.log('in addProduct controller', $scope.new_product);
          Product_Factory.addProduct($scope.new_product, function() {
            console.log('in product Controller back from addProduct Factory,');
            $scope.products = Product_Factory.getProducts(function(data2){
              $scope.products = data2;
              });
            });
        }
      });