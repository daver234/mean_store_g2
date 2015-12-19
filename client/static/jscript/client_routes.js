var mean_store = angular.module('mean_store', ['ngRoute']);

mean_store.config(function ($routeProvider) {
        $routeProvider
            .when('/',{
                templateUrl: 'partials/login.html'
            })
            .when('/dashboard',{
                templateUrl: 'partials/dashboard.html'
            })
            .when('/products',{
                templateUrl: 'partials/products.html'
            })
            .when('/orders',{
                templateUrl: 'partials/orders.html'
            })
            .when('/customers',{
                templateUrl: 'partials/customers.html'
            })
            .when('/settings',{
                templateUrl: 'partials/settings.html'
            })
            .when('/show_orders',{
                templateUrl: 'partials/show_orders.html'
            })
            .otherwise({
              redirectTo: '/'
            });
        });