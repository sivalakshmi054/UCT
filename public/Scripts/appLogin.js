var HROBController = angular.module('HROBController', ['ui.router','angucomplete-alt','smart-table','daypilot','frapontillo.bootstrap-duallistbox']);
HROBController.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/CompanyHome');
    var baseUrl = $("base").first().attr("href");
    // console.log(baseUrl);
    $stateProvider

    .state('loginpage', {
        url: '/loginpage',        
        templateUrl: 'Logincreate.html',
        controller: 'LoginPageController',        
      })

      .state('Home', {
        url: '/Home',
        templateUrl: 'hrdashboard.html',
        controller: 'CandidateController'
    })

      .state('Dashboard', {
        url: '/Dashboard',
        templateUrl: 'LoginHome.html',
        controller: 'HomeController'
       
    })
      .state('CompanyDashboard', {
        url: '/CompanyDashboard',
        templateUrl: 'companydashboard.html',
        controller: 'UserController'
    })
    
      .state('CompanyList', {
        url: '/CompanyList',
        templateUrl: 'views/company/companylist.html',
        controller: 'CompanyController'
    })
      .state('preview_company', {
        url: '/preview_company/:CompanyId',
        templateUrl: 'views/company/company.html',
        controller: 'CompanyController'
    })
      .state('edit_company', {
        url: '/edit_company/:CompanyId',
        templateUrl: 'views/company/companyedit.html',
        controller: 'CompanyController'
    })


      .state('Company', {
        url: '/Company',
        templateUrl: 'views/company/createcompany.html',
        controller: 'CompanyController'
    })

      .state('PackageList', {
        url: '/PackageList',
        templateUrl: 'views/package/packagelist.html',
        controller: 'PackageController'
    })
      .state('preview_package', {
        url: '/preview_package/:PackageId',
        templateUrl: 'views/package/package.html',
        controller: 'PackageController'
    })
      .state('edit_package', {
        url: '/edit_package/:PackageId',
        templateUrl: 'views/package/packageedit.html',
        controller: 'PackageController'
    })


      .state('AddPackage', {
        url: '/AddPackage',
        templateUrl: 'views/package/createpackage.html',
        controller: 'PackageController'
    })



    .state('CandidateSearch', {
      url: '/CandidateSearch',
      templateUrl: 'views/candidate/candidatesearch.html',
      controller: 'CandidateController'
  })
    .state('Candidates', {
      url: '/Candidates/:CandidateId',
      templateUrl: 'views/candidate/candidate.html',
      controller: 'CandidateController'
  })
    .state('EditCandidates', {
      url: '/EditCandidates/:CandidateId',
      templateUrl: 'views/candidate/candidateedit.html',
      controller: 'CandidateController'
  })
    .state('CandidateList', {
      url: '/CandidateList',
      templateUrl: 'views/candidate/candidatelist.html',
      controller: 'CandidateController'
  })

    .state('AddCandidate', {
      url: '/AddCandidate',
      templateUrl: 'views/candidate/createcandidate.html',
      controller: 'CandidateController'
  })
    .state('Candidateoffers', {
      url: '/Candidateoffers/:CandidateId',
      templateUrl: 'views/candidate/createcandidateoffer.html',
      controller: 'CandidateController'
  })
    
    .state('UserList', {
      url: '/UserList',
      templateUrl: 'views/users/userlist.html',
      controller: 'UserController'
  })
    .state('UserAdd', {
      url: '/UserAdd',
      templateUrl: 'views/users/createuser.html',
      controller: 'UserController'
  })
  .state('preview_user', {
    url: '/preview_user/:UserId',
    templateUrl: 'views/users/user.html',
    controller: 'UserController'
  })
  .state('edit_user', {
    url: '/edit_user/:UserId',
    templateUrl: 'views/users/useredit.html',
    controller: 'UserController'
  })
  // .state('consent', {
  //   url: '/consent',
  //   // templateUrl: 'views/layouts/companymaster.blade.php',
  //   // controller: 'CompanyController'
  //   templateUrl: 'views/company/company2.html',
  //   controller: 'CompanyController'
  // })



    

;});