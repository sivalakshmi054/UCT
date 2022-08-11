var HROBController = angular.module('HROBController', ['ui.router', 'angucomplete-alt', 'smart-table', 'daypilot', 'frapontillo.bootstrap-duallistbox',  'ngSanitize']);
HROBController.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/CompanyHome');

    // $stateProvider
        $stateProvider

        .state('Home', {
            url: '/Home',
            templateUrl: 'LoginHome.html',
            controller: 'HomeController'
        })
        
        // .state('Company', {
        //     url: '/Company',
        //     templateUrl: 'views/company/createcompany.html',
        //     controller: 'HomeController'
        // });
        
});
