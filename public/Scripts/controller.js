var baseUrl = $("base").first().attr("href");
if (baseUrl == "/") {
    baseUrl = "";
}

HROBController.directive('pageSelect', function () {
    return {
        restrict: 'E',
        template: '<input type="text" style="width: 30px;height: 22px;text-align: center;" class="select-page" ng-model="inputPage" ng-change="selectPage(inputPage)">',
        link: function (scope, element, attrs) {
            scope.$watch('currentPage', function (c) {
                scope.inputPage = c;
            });
        }
    }
});

HROBController.directive('itemsPage', function () {
    return {
        restrict: 'E',
        scope: {
            itemsOnPage: "=",
            totalItemstype: "=totalItems"
        },
        replace: false,
        template: '<select ng-model="pagesize" ng-change="selectPage(inputPage)" type="number"><option value=10>10</option><option value=20>20</option><option value="30">30</option><option value="40">40</option><option value="50">50</option><option value="0">All</option></select>',

        link: function (scope, element, attrs) {
            scope.pagesize = "10";
            scope.$watch('pagesize', function (c) {
                if (scope.pagesize == 0)
                    scope.itemsOnPage = scope.totalItemstype;
                else
                    scope.itemsOnPage = scope.pagesize;
            });

        }

    }
});

// This is for Login controller

HROBController.controller("HomeController", ['$scope', '$http', '$state', '$stateParams', '$filter', '$window', '$location',
    function ($scope, $http, $state, $stateParams, $filter, $window, $location) {

        $scope.submit_addedit= function () {

            alert("Hi Session Id is there");
            

            // console.log($scope.UserName);
            // console.log($window.sessionStorage['UserName']);
            
        }

        $scope.AdminDashboardList=[];
        $scope.AdminDashboard = function() {

            var dashboarddata = {
                Date:$filter('date')(new Date(), "yyyy-MM-dd"),
            }

            // console.log(dashboarddata);

            $http.post(baseUrl + '/Admin_Dashboard', dashboarddata).then(function success(response) {

                // $scope.emptydata=[];
                $scope.AdminDashboardList=[];
                $scope.AdminDashboardList=response.data;
                $scope.TotalCompany=response.data[0].TotalCompany;
                $scope.CompanyThisMonth=response.data[0].CompanyThisMonth;
                $scope.TotalCandidate=response.data[0].TotalCandidate;
                $scope.PlanExpiring=response.data[0].PlanExpiring;
                $scope.TotalOffers=response.data[0].TotalOffers;
                $scope.PlanExpired=response.data[0].PlanExpired;
                // console.log($scope.SearchHistoryList);

            })
        }



    }]);




HROBController.controller("LoginPageController", ['$scope', '$http', '$state', '$stateParams', '$filter', '$window', '$location',
    function ($scope, $http, $state, $stateParams, $filter, $window, $location) {

        $scope.Logindetails = [];

        
        $http.get(baseUrl + '/session/loginget').then(function success(response) {

            $scope.UserName = response.data;
            ////console.log($scope.UserId);
        });

        $scope.LoginRedirect = function () {

            // alert("HomeDefault");
            var Transobj = {
                UserName: $scope.UserName
            }

            ////console.log(new Date());
            $http.post(baseUrl + '/getLoginaccess', Transobj).then(function success(response) {
                // //console.log(response.data[1]);  

                // $window.sessionStorage['UserId'] = response.data[1];

                // alert(response.data[0].Val);

                if (response.data[0].Val == 1) {
                    // window.location.href = "http://localhost/Home#/Home";

                    window.location.href = baseUrl + "Home#/Home";
                    //$state.go('/Home#/HomeDefault');
                    return true;
                } else {
                    alert("Wrong Login access");
                    return false;
                }
            });

        }
        
        $scope.Validationcontrols = function () {
            // alert("Validationcontrols");
            // $scope.errorlist = null;
            if (typeof ($scope.UserName) == "undefined" || $scope.UserName == "") {
                alert("Please enter Username");
                return false;
            } else if (typeof ($scope.Password) == "undefined" || $scope.Password == "") {
                alert("Please enter Password");
                return false;
            }

            return true;

        };



        $scope.UserName = [];
        $scope.Login_AddEdit = function () {


            if ($scope.Validationcontrols() == true) {
                //$scope.EmployeeId = $window.sessionStorage['UserId'];
                $scope.Id = 0;

                var obj = {
                    // Id: $scope.Id,
                    UserName: $scope.UserName,
                    Password: $scope.Password,
                };
                // console.log(obj);

                $http.post(baseUrl + '/getLogin_InsertUpdate', obj).then(function success(response) {

                    // console.log(response.data[0]);


                    $window.sessionStorage.clear();
                    $scope.UserName = response.data[0].UserName;

                    $window.sessionStorage['UserName'] = response.data[0].UserName;
                    $window.sessionStorage['Id'] = response.data[0].Id;
                                    
                    //console.log(response.data[0].EmpName);

                    ////console.log($window.sessionStorage['UserId']);

                    if (response.data[0].data == 1) {

                       alert("Successfully Logged In");
                       $("#exampleModal23e").addClass('show');
                       $('#exampleModal23e').modal('show');
                    //    $("#modalClick").click();
                       

                        //  window.location.href = baseUrl + "/AdminHome#/Dashboard";
                          //  window.location.href = baseUrl + "/AdminHome#/consent";

                        //
                       // 
                       
                        // console.log($window.sessionStorage['UserName']);
                    //  } else if (response.data[0].data == 5){
                    //         $("#exampleModal23e").addClass('show');
                    //         $('#exampleModal23e').modal('show')

                    } else if (response.data[0].data == 11) {

                        alert("Login Failed \n Please check Username and password ");

                        // $scope.errorlist = "Your Login Date is Expired!";
                    } else if (response.data[0].data == 9) {

                        alert("Login Failed \n Please check Password ");

                        // $scope.errorlist = "Your Login Date is Expired!";
                    } else if (response.data[0].data == 3) {

                        alert("Login Failed \n Please check username ");

                        // $scope.errorlist = "Your Login Date is Expired!";
                    } else if (response.data[0].data == 10) {

                        alert("Inactive user cannot login");

                        //$scope.errorlist = "Inactive user cannot login";
                    }
                    else {

                        alert("Login Failed \n Please check username and password ");
                        //$scope.errorlist = "Login Failed \n Please check username and password ";
                    }


                });
            }

        }


        $scope.UserName = [];
        $scope.UserLogin_AddEdit = function () {
            //alert("ss");
            // $scope.errorlist = null;
            if ($scope.Validationcontrols() == true) {
                //$scope.EmployeeId = $window.sessionStorage['UserId'];


                var obj = {

                    UserName: $scope.UserName,
                    Password: $scope.Password,
                };
                // console.log(obj);

                $http.post(baseUrl + '/getUserLogin_InsertUpdate', obj).then(function success(response) {

                    // console.log(response.data[0]);

                    $scope.UserName = response.data[0].UserName;
                    $window.sessionStorage.clear();
                    $window.sessionStorage['UserName'] = response.data[0].UserName;
                    $window.sessionStorage['UId'] = response.data[0].UId;
                    $window.sessionStorage['CompanyId'] = response.data[0].CompanyId;

                    //console.log(response.data[0].EmpName);

                    ////console.log($window.sessionStorage['UserId']);

                    if (response.data[0].data == 1) {

                        alert("Successfully Logged In");
                       $("#exampleModal23e").addClass('show');
                       $('#exampleModal23e').modal('show');

                    }else if (response.data[0].data == 5){
                        $("#exampleModal23e").addClass('show');
                        $('#exampleModal23e').modal('show')


                    } else if (response.data[0].data == 11) {

                        alert("Login Failed \n Please check Username and password ");

                        // $scope.errorlist = "Your Login Date is Expired!";
                    } else if (response.data[0].data == 9) {

                        alert("Login Failed \n Please check Password ");

                        // $scope.errorlist = "Your Login Date is Expired!";
                    } else if (response.data[0].data == 3) {

                        alert("Login Failed \n Please check username ");

                        // $scope.errorlist = "Your Login Date is Expired!";
                    } else if (response.data[0].data == 10) {

                        alert("Inactive user cannot login");

                        //$scope.errorlist = "Inactive user cannot login";
                    }
                    else {

                        alert("Login Failed \n Please check username and password ");
                        //$scope.errorlist = "Login Failed \n Please check username and password ";
                    }


                });
            }

        }
     
        $scope.UserName = [];
        $scope.update_list = function () {
            var obj = {
                UserName: $scope.UserName,
                Password: $scope.Password,
            };
            $http.post(baseUrl + '/get_Update_List', obj).then(function success(response){
                $scope.UserName = response.data[0].UserName;
                $window.sessionStorage.clear();
                $window.sessionStorage['UserName'] = response.data[0].UserName;
                $window.sessionStorage['UId'] = response.data[0].UId;
                $window.sessionStorage['CompanyId'] = response.data[0].CompanyId;
            //   if (response.data[0].data == 5){
            //         $("#exampleModal23e").addClass('show');
            //         $('#exampleModal23e').modal('show')
            //   } else {
            //     $state.go('Dashboard')
            //   };

        });
    }


        $scope.UserName = [];
        $scope.CompanyLogin_AddEdit = function () {
            //alert("ss");
            // $scope.errorlist = null;
            if ($scope.Validationcontrols() == true) {
                //$scope.EmployeeId = $window.sessionStorage['UserId'];


                var obj = {

                    UserName: $scope.UserName,
                    Password: $scope.Password,
                };
                // console.log(obj);

                $http.post(baseUrl + '/getCompanyLogin_InsertUpdate', obj).then(function success(response) {

                    // console.log(response.data[0]);
                    $window.sessionStorage.clear();
                    $scope.UserName = response.data[0].UserName;

                    $window.sessionStorage['UserName'] = response.data[0].UserName;
                    $window.sessionStorage['CId'] = response.data[0].CId;
                    $window.sessionStorage['CompanyId'] = response.data[0].CompanyId;
                    //console.log(response.data[0].EmpName);

                    ////console.log($window.sessionStorage['UserId']);

                    if (response.data[0].data == 1) {

                        // window.location.href = baseUrl + "/CompanyHome#/CompanyDashboard";

                        alert("Successfully Logged In");
                        $("#exampleModal23e").addClass('show');
                       $('#exampleModal23e').modal('show');
                        // console.log($window.sessionStorage['UserName']);

                    } else if (response.data[0].data == 11) {

                        alert("Login Failed \n Please check Username and password ");

                        // $scope.errorlist = "Your Login Date is Expired!";
                    } else if (response.data[0].data == 9) {

                        alert("Login Failed \n Please check Password ");

                        // $scope.errorlist = "Your Login Date is Expired!";
                    } else if (response.data[0].data == 3) {

                        alert("Login Failed \n Please check username ");

                        // $scope.errorlist = "Your Login Date is Expired!";
                    } else if (response.data[0].data == 10) {

                        alert("Inactive user cannot login");

                        //$scope.errorlist = "Inactive user cannot login";
                    }
                    else {

                        alert("Login Failed \n Please check username and password ");
                        //$scope.errorlist = "Login Failed \n Please check username and password ";
                    }


                });
            }

        }
    }
]);


HROBController.controller("CompanyController", ['$scope', '$http', '$state', '$stateParams', '$filter', '$window', '$location', 'filterFilter',
    function ($scope, $http, $state, $stateParams, $filter, $window, $location, $ff) {

        $scope.Validationcontrols = function () {
            // alert("Validationcontrols");
            // $scope.errorlist = null;
            if (typeof ($scope.company_name) == "undefined" || $scope.company_name == "") {
                alert("Please enter Company Name");
                return false;
            } else if (typeof ($scope.company_address) == "undefined" || $scope.company_address == "") {
                alert("Please enter Company Address");
                return false;
            
            }  else if (typeof ($scope.Country) == "undefined" || $scope.Country == "") {
                alert("Please Select Country");
                return false;
            
            } else if (typeof ($scope.State) == "undefined" || $scope.State == "") {
                alert("Please Select State");
                return false;
            
            } else if (typeof ($scope.City) == "undefined" || $scope.City == "") {
                alert("Please Select City");
                return false;
            } else if (typeof ($scope.company_pincode) == "undefined" || $scope.company_pincode == "") {
                alert("Please enter Area Pincode");
                return false;
            
            } else if (typeof ($scope.company_mob) == "undefined" || $scope.company_mob == "") {
                alert("Please enter Company Mobile Number");
                return false;
            
            } else if (typeof ($scope.company_email) == "undefined" || $scope.company_email == "") {
                alert("Please enter Company Email Id");
                return false;
            
            } 

            return true;

        };


        $scope.PlanList = [];
        $http.post(baseUrl + '/getPlanList').then(function success(response) {
            $scope.PlanList = response.data;
            
        });


        $scope.CountryList = [];
        $http.post(baseUrl + '/getCountryList').then(function success(response) {
            $scope.CountryList = response.data;
            $scope.StateBasedOnCountry();
        });

        $scope.StateList =[];

        $scope.StateBasedOnCountry = function () {
            var obj = {
                CountryId: $scope.Country,
            }

            $http.post(baseUrl + '/getstatelist', obj).then(function success(response) {
                $scope.StateList = response.data;
                $scope.CityBasedOnState();
            });
        }

        $scope.CityList =[];

        $scope.CityBasedOnState = function () {
            var obj = {
                StateId: $scope.State,
            }
            $http.post(baseUrl + '/getcitylist', obj).then(function success(response) {
                $scope.CityList = response.data;
            });
        }


        $scope.Id = 0;
        $scope.Company_Add_Edit = function () {

            if ($scope.Validationcontrols() == true) {

               var companyobj = {
                   Id:$scope.Id,
                   UserName:$window.sessionStorage['UserName'],
                   company_name: $scope.company_name,
                   company_email: $scope.company_email,
                   company_mob: $scope.company_mob,
                   company_extn: $scope.company_extn,
                   company_address: $scope.company_address,
                   company_address1: $scope.company_address1,
                   company_address2: $scope.company_address2,
                   CountryId: $scope.Country,
                   StateId: $scope.State,
                   CityId: $scope.City,
                   company_pincode: $scope.company_pincode,
                   company_cin: $scope.company_cin,
                   company_gst: $scope.company_gst,
                   company_pan: $scope.company_pan,
                   company_tan: $scope.company_tan,
                   company_regdate: $filter('date')($scope.company_regdate, 'y-MM-dd'),
                   company_website: $scope.company_website,
                   company_board_number: $scope.company_board_number,
                   company_person_name: $scope.company_person_name,
                   company_person_email: $scope.company_person_email,
                   company_person_mob: $scope.company_person_mob,
                   company_person_extn: $scope.company_person_extn,
                   company_hr_name: $scope.company_hr_name,
                   company_hr_email: $scope.company_hr_email,
                   company_hr_mob: $scope.company_hr_mob,
                   company_hr_extn: $scope.company_hr_extn,
                   company_manager_name: $scope.company_manager_name,
                   company_manager_email: $scope.company_manager_email,
                   company_manager_mob: $scope.company_manager_mob,
                   company_manager_extn: $scope.company_manager_extn,
                   company_cat: $scope.company_cat,
                   company_subs_plan: $scope.plan,
                   company_subs_plan_notes: $scope.subs_plan_notes,
                   subs_start_date: $filter('date')($scope.subs_start_date, 'y-MM-dd'),
                   subs_end_date: $filter('date')($scope.subs_end_date, 'y-MM-dd'),
                   
               }


               $http.post(baseUrl + '/companyinsertedit', companyobj).then(function success(response) {


                    

                    if (response.data[0].data == 11) {
                        alert('Company Added Successfuly !!!');
                        window.location.href = baseUrl + "/AdminHome#/CompanyList";
                    } else if(response.data[0].data == 10) {
                        alert('Company Updated Successfuly !!!');
                        window.location.href = baseUrl + "/AdminHome#/CompanyList";
                    }
                    else {
                        alert('!!! Oops Something Went Wrong Contact Administrator !!!');
                        window.location.href = baseUrl + "/AdminHome#/Dashboard";
                    }
                    return true;


                });


            }
        }


        $scope.ListData = [];
        $scope.current_page = 1;
        $scope.page_size = 10;
        $scope.rembemberCurrentPage = function (p) {
            $scope.current_page = p
        }


        $scope.flag = 0;
        $scope.CompanyList = [];
        $http.post(baseUrl + '/get_Company_List').then(function success(response) {
            $scope.CompanyList = response.data;

            $scope.emptydata = [];
            $scope.CompanyList = [];
            $scope.CompanyList = response.data;
            // $state.go('ManageStudent');

            if ($scope.CompanyList.length > 0) {
                $scope.flag = 1;
            } else {
                $scope.flag = 0;
            }




        });

        $scope.Id = 0;

        $scope.preview_company = function(Id) {
            $state.go('preview_company', {
                CompanyId: Id
            });
        }
        $scope.edit_company = function(Id) {
            $scope.CompanyDetails();
            $state.go('edit_company', {
                CompanyId: Id

            });

        }

        
        $scope.CompanyList = [];
        $scope.CompanyDetails = function () {
            if ($stateParams.CompanyId != undefined && $stateParams.CompanyId > 0) {
                var compdata = {
                    CompanyId: $stateParams.CompanyId,

                }
                // console.log(data);
                $http.post(baseUrl + '/get_company_details', compdata).then(function success(response) {
                    
                    // console.log(response.data);
                    $scope.Id = response.data[0].Id;
                    $scope.company_name = response.data[0].Name;
                    $scope.company_address = response.data[0].Address1;
                    $scope.company_address1 = response.data[0].Address2;
                    $scope.company_address2 = response.data[0].Address3;
                    $scope.State = response.data[0].State.toString();
                    $scope.City = response.data[0].City.toString();

                    $scope.Country = response.data[0].Country.toString();
                    $scope.CountryName = response.data[0].CountryName;
                    $scope.StateName = response.data[0].StateName;
                    $scope.CityName = response.data[0].CityName;
                    $scope.company_pincode = response.data[0].Pincode;
                    $scope.company_mob = response.data[0].Mobile;
                    $scope.company_email = response.data[0].Email;
                    $scope.company_extn = response.data[0].Extn;
                    $scope.company_cin = response.data[0].CIN;
                    $scope.company_pan = response.data[0].PAN;
                    $scope.company_gst = response.data[0].GST;
                    $scope.company_tan = response.data[0].TAN;
                    $scope.company_regdate1 = response.data[0].Registrationdate;
                    $scope.subs_start_date1 = response.data[0].SubsStartDate;
                    $scope.subs_end_date1 = response.data[0].SubsEndDate;

                    $scope.company_regdate = new Date($scope.company_regdate1); 
                    $scope.subs_start_date = new Date($scope.subs_start_date1); 
                    $scope.subs_end_date = new Date($scope.subs_end_date1); 
                    $scope.plan = response.data[0].SubsPackage;
                    $scope.PlanName = response.data[0].PlanName;
                    $scope.subs_plan_notes= response.data[0].SubsNotes;
                    $scope.company_website= response.data[0].WebsiteUrl;
                    $scope.company_board_number= response.data[0].CompanyBoardNumber;
                    $scope.company_person_name= response.data[0].ContactPersonPrimaryName;
                    $scope.company_person_mob= response.data[0].ContactPersonPrimaryNumber;
                    $scope.company_person_email= response.data[0].ContactPersonPrimaryEmail;
                    $scope.company_person_extn= response.data[0].ContactPersonPrimaryExtn;
                    $scope.company_hr_name= response.data[0].ComapanyHRManagerName;
                    $scope.company_hr_mob= response.data[0].HRMobile;
                    $scope.company_hr_email= response.data[0].HREmail;
                    $scope.company_hr_extn= response.data[0].HRExtn;
                    $scope.company_manager_name= response.data[0].CompanyBillingManagerName;
                    $scope.company_manager_mob= response.data[0].BillingManagerMobile;
                    $scope.company_manager_email= response.data[0].BillingManagerEmail;
                    $scope.company_manager_extn= response.data[0].BillingManagerExtn;
                    $scope.company_cat= response.data[0].CompanyCategory;

                    $scope.CompanyList = response.data;
                    // console.log($scope.CompanyList);
                });

            }
        };


    }]);


    HROBController.controller("CandidateController", ['$scope', '$http', '$state', '$stateParams', '$filter', '$window', '$location', 'filterFilter',
    function ($scope, $http, $state, $stateParams, $filter, $window, $location, $ff) {



        $scope.Validationcontrols = function () {

            if (typeof ($scope.Name) == "undefined" || $scope.Name == "") {
                alert("Please enter Name of Candidate");
                return false;
            } else if (typeof ($scope.Mobile) == "undefined" || $scope.Mobile == "") {
                alert("Please enter Mobile of Candidate");
                return false;
            
            } else if (typeof ($scope.Email) == "undefined" || $scope.Email == "") {
                alert("Please enter Email of Candidate");
                return false;
            
            } else if (typeof ($scope.pan) == "undefined" || $scope.pan == "") {
                alert("Please enter PAN of Candidate");
                return false;

            } else if (typeof ($scope.DOB) == "undefined" || $scope.DOB == "") {
                alert("Please enter DOB of Candidate");
                return false;
            }
            return true;
        }

        $scope.ListData = [];
        $scope.current_page = 1;
        $scope.page_size = 10;
        $scope.rembemberCurrentPage = function (p) {
            $scope.current_page = p
        }

        $scope.CandidatesearchList =[];
        $scope.flag = 0;
        if($window.sessionStorage['CId']) {
            $scope.UserId=$window.sessionStorage['CId'];
        }
        else if($window.sessionStorage['UId']) {
            $scope.UserId=$window.sessionStorage['UId'];
        }
        else if($window.sessionStorage['Id']) {
            $scope.UserId=$window.sessionStorage['Id'];
        }
        $scope.CompanyId = $window.sessionStorage['CompanyId'];
        
        $scope.CandidateSearch = function() {



            if ($scope.Validationcontrols() == true) {

                var candidateobj = {
                    Name:$scope.Name,
                    Email:$scope.Email,
                    Mobile:$scope.Mobile,
                    PAN:$scope.pan,
                    DOB:$filter('date')($scope.DOB, 'y-MM-dd'),
                    Aadhar:$scope.Aadhar,
                    CompanyId:$scope.CompanyId,
                }
                
                $http.post(baseUrl + '/candidatesearch', candidateobj).then(function success(response) {

                    $scope.emptydata = [];
                    $scope.CandidatesearchList = [];
                    $scope.CandidatesearchList = response.data;
                    
                    // console.log(response.data);

                    if ($scope.CandidatesearchList.length > 0) {
                        $scope.flag = 1;
                    } else {
                        $scope.flag = 0;
                    }

                    if (response.data[0].data == 11) {
                        alert('No Macthing Candidate Found In Our Records');
                        $scope.resetform();
                    }else if (response.data[0].data == 10) {
                        alert('No Offers for this Candidate Found In Our Records');
                        $scope.resetform();
                    }else if (response.data[0].data == 4) {
                        alert('Your Search Limit Is Exhausted, Please Contact Your Admin');
                        $scope.resetform();
                    }
                    else if (response.data[0].data == 5) {
                        alert('Its Your Candidate Not Allowed to Search');
                        $scope.resetform();
                    }
                    else if (response.data[0].data == 3) {
                        $scope.CandidateId = response.data[0].Id;
                        $scope.totaloffers = response.data[0].totaloffers;
                        $scope.OfferDate = response.data[0].LastOfferDate;

                        // console.log(response.data);

                        if(response.data[0].Id != null) {
                        document.getElementById("SearchList").style.display = "block";
                        console.log("Hii Company = " + $window.sessionStorage['CId']);
                        console.log("Hii user = " + $window.sessionStorage['UId']);
                        console.log("Hii admin = " + $window.sessionStorage['Id']);
                        // console.log($scope.OfferDate);



                        if($window.sessionStorage['CId']) {
                            
                        var historyobj = {
                            totaloffers:$scope.totaloffers,
                            OfferDate:$filter('date')($scope.OfferDate, 'y-MM-dd'),
                            CompanyId:$scope.CompanyId,
                            UserName:$window.sessionStorage['UserName'],
                            UserId:$scope.UserId,
                            CandidateId:$scope.CandidateId,

                        }
                            $http.post(baseUrl + '/history_add', historyobj).then(function success(response) {



                            })
                        }
                        else if($window.sessionStorage['UId']) {
                            
                        var historyobj = {
                            totaloffers:$scope.totaloffers,
                            OfferDate:$filter('date')($scope.OfferDate, 'y-MM-dd'),
                            CompanyId:$scope.CompanyId,
                            UserName:$window.sessionStorage['UserName'],
                            UserId:$scope.UserId,
                            CandidateId:$scope.CandidateId,

                        }
                            $http.post(baseUrl + '/history_add', historyobj).then(function success(response) {



                            })
                        }              

                    }
                    else {
                        alert('Candidate Data is not Correct. Please correct it and try again');
                        $scope.resetform();
                    }
                }



                })


                
            }
        }


        
        $scope.flag = 0;
        $scope.CandidateList = [];
        $http.post(baseUrl + '/get_Candidate_List').then(function success(response) {
            $scope.CandidateList = response.data;

            $scope.emptydata = [];
            $scope.CandidateList = [];
            $scope.CandidateList = response.data;
            // $state.go('ManageStudent');

            if ($scope.CandidateList.length > 0) {
                $scope.flag = 1;
            } else {
                $scope.flag = 0;
            }




        });
        
        $scope.resetform = function() {

            location.reload();
        }


        $scope.Id = 0;

        $scope.give_offer = function(Id) {
            $state.go('Candidateoffers', {
                CandidateId: Id
            });
        }


        $scope.Id = 0;

        $scope.Preview_Candidate = function(Id) {
            $state.go('Candidates', {
                CandidateId: Id
            });
        }
        $scope.Edit_Candidate = function(Id) {
            $scope.CandidateDetails();
            $state.go('EditCandidates', {
                CandidateId: Id
            });
        }

        $scope.CandidatesList = [];
        $scope.CandidateDetails = function() {

            if ($stateParams.CandidateId != undefined && $stateParams.CandidateId > 0) {
                var data = {
                    CandidateId: $stateParams.CandidateId,
                }
                // console.log(data);
                $http.post(baseUrl + '/candidatedetails', data).then(function success(response) {

                    $scope.CandidatesList=[];
                    $scope.CandidatesList=response.data;

                    console.log(response.data);

                    $scope.Id=response.data[0].CandidateId;
                    $scope.FirstName=response.data[0].FirstName;
                    $scope.LastName=response.data[0].LastName;
                    $scope.Skills = response.data[0].Skills;
                    // $scope.DOB=$filter('date')(response.data[0].DOB, "dd-MM-yyyy");
                    $scope.DOB1=response.data[0].DOB;
                    $scope.DOB= new Date($scope.DOB1);           
                    $scope.currage=response.data[0].Age;
                    $scope.PreviousCompany=response.data[0].PreviousCompany;
                    $scope.PreviousCTC=response.data[0].PreviousCTC;
                    $scope.ReasonforChange=response.data[0].ReasonforChange;
                    $scope.Mobile1=response.data[0].Mobile1;
                    $scope.Mobile2=response.data[0].Mobile2;
                    $scope.EmailId1=response.data[0].EmailId1;
                    $scope.EmailId2=response.data[0].EmailId2;
                    $scope.PAN=response.data[0].PAN;
                    $scope.Age=response.data[0].Age;
                    $scope.Aadhar=response.data[0].Aadhar;
                    $scope.LinkedInProfileUrl=response.data[0].LinkedInProfileUrl;
                    $scope.Gender=response.data[0].Gender;
                    $scope.GenderName=response.data[0].GenderName;
                    $scope.Pincode=response.data[0].Pincode;
                    $scope.Country=response.data[0].Country.toString();
                    $scope.CountryName=response.data[0].CountryName;
                    $scope.State=response.data[0].State.toString();
                    $scope.StateName=response.data[0].StateName;
                    $scope.City=response.data[0].City.toString();
                    $scope.CityName=response.data[0].CityName;
                    $scope.Address1=response.data[0].Address1;
                    $scope.Address2=response.data[0].Address2;
                    $scope.Address3=response.data[0].Address3;
                    $scope.CurrentCity=response.data[0].CurrentCity;
                    $scope.CurrentCompany=response.data[0].CurrentCompany;
                    $scope.CurrentCompanyName=response.data[0].CurrentCompanyName;
                    $scope.CurrentPackage=response.data[0].CurrentPackage;
                    $scope.ReasonforChange=response.data[0].ReasonforChange;

                })


            }

        }

        // console.log("Hii Company = " + $window.sessionStorage['CId']);
        // console.log("Hii user = " + $window.sessionStorage['UId']);
        // console.log("Hii admin = " + $window.sessionStorage['Id']);

        $scope.Candidate_Back = function() {

                
            if($window.sessionStorage['CId']) {
                // alert('Company');
                window.location.href = baseUrl + "/CompanyHome#/CompanyDashboard";
            }
            else if($window.sessionStorage['UId']) {
                // alert('User');
                window.location.href = baseUrl + "/Home#/Home";
            }
            else if($window.sessionStorage['Id']) {
                // alert('Admin');
                window.location.href = baseUrl + "/AdminHome#/Dashboard";
            }


        }
        // window.location.href = baseUrl + "Home#/Home";

        $scope.SearchHistoryList = [];
        $scope.emptydata=[];
        $scope.CompanyId = $window.sessionStorage['CompanyId'];

        if($window.sessionStorage['CId']) {
            $scope.UserId=$window.sessionStorage['CId'];
        }
        else if($window.sessionStorage['UId']) {
            $scope.UserId=$window.sessionStorage['UId'];
        }
        else if($window.sessionStorage['Id']) {
            $scope.UserId=$window.sessionStorage['Id'];
        }
        // $scope.flag = 0;
        $scope.SearchHistory = function() {

            var data = {
                CompanyId:$scope.CompanyId,
                UserName:$window.sessionStorage['UserName'],
                UserId:$scope.UserId,
            }

            $http.post(baseUrl + '/History_details', data).then(function success(response) {

                $scope.emptydata=[];
                $scope.SearchHistoryList=[];
                $scope.SearchHistoryList=response.data;
                console.log($scope.SearchHistoryList.length);
                // $state.go('ManageStudent');
    

                // if($scope.SearchHistoryList.length > 0) {
                //     $scope.flag = 1;
                // } else {
                //     $scope.flag = 0;
                // }
    

            })
        }
        $scope.HrDashboardList=[];
        $scope.HrDashboard = function() {

            var dashboarddata = {
                CompanyId:$scope.CompanyId,
                Date:$filter('date')(new Date(), "yyyy-MM-dd"),
                UserId:$scope.UserId,
            }

            // console.log(dashboarddata);

            $http.post(baseUrl + '/Hr_Dashboard', dashboarddata).then(function success(response) {

                // $scope.emptydata=[];
                $scope.HrDashboardList=[];
                $scope.HrDashboardList=response.data;
                $scope.TodaySearches=response.data[0].TodaySearches;
                $scope.TotalSearches=response.data[0].TotalSearches;
                $scope.NewCandidate=response.data[0].NewCandidate;
                $scope.TotalCandidate=response.data[0].TotalCandidate;
                $scope.CompanyOffers=response.data[0].CompanyOffers;
                $scope.TotalOffers=response.data[0].TotalOffers;
                // console.log($scope.SearchHistoryList);

            })
        }



        $scope.CandidateValidationcontrols = function () {

            if (typeof ($scope.FirstName) == "undefined" || $scope.FirstName == "") {
                alert("Please Enter Name of Candidate");
                return false;
            } else if (typeof ($scope.PAN) == "undefined" || $scope.PAN == "") {
                alert("Please Enter PAN of Candidate");
                return false;

            } else if (typeof ($scope.DOB) == "undefined" || $scope.DOB == "") {
                alert("Please Enter DOB of Candidate");
                return false;
            } else if (typeof ($scope.Mobile1) == "undefined" || $scope.Mobile1 == "") {
                alert("Please Enter Mobile of Candidate");
                return false;
            
            } else if (typeof ($scope.EmailId1) == "undefined" || $scope.EmailId1 == "") {
                alert("Please Enter Email of Candidate");
                return false;
            } else if (typeof ($scope.CurrentCompany) == "undefined" || $scope.CurrentCompany == "") {
                alert("Please Select Current Company Of Candidate");
                return false;
            
            } 
            else if (typeof ($scope.CompanyName) == "undefined" || $scope.CompanyName == "") {
                alert("Please Enter Name of Company");
                return false;
            } else if (typeof ($scope.CTCexpectedasked) == "undefined" || $scope.CTCexpectedasked == "") {
                alert("Please Enter CTC Expected for Candidate");
                return false;

            } else if (typeof ($scope.OfferDate) == "undefined" || $scope.OfferDate == "") {
                alert("Please Enter Offered Date");
                return false;
            } else if (typeof ($scope.ExpectedStartDate) == "undefined" || $scope.ExpectedStartDate == "") {
                alert("Please Enter Expected Start Date");
                return false;
            
            }
            return true;
        }
        $scope.CandidateOfferValidationcontrols = function () {

            if (typeof ($scope.CompanyName) == "undefined" || $scope.CompanyName == "") {
                alert("Please Enter Name of Company");
                return false;
            } else if (typeof ($scope.CTCexpectedasked) == "undefined" || $scope.CTCexpectedasked == "") {
                alert("Please Enter CTC Expected for Candidate");
                return false;

            } else if (typeof ($scope.OfferDate) == "undefined" || $scope.OfferDate == "") {
                alert("Please Enter Offered Date");
                return false;
            } else if (typeof ($scope.ExpectedStartDate) == "undefined" || $scope.ExpectedStartDate == "") {
                alert("Please Enter Expected Start Date");
                return false;
            
            }
            return true;
        }


        
        $scope.CountryList = [];
        $http.post(baseUrl + '/getCountryList').then(function success(response) {
            $scope.CountryList = response.data;
            $scope.StateBasedOnCountry();
        });

        $scope.StateList = [];

        $scope.StateBasedOnCountry = function () {
            var obj = {
                CountryId: $scope.Country,
            }
            $http.post(baseUrl + '/getstatelist', obj).then(function success(response) {
                $scope.StateList = response.data;
                $scope.CityBasedOnState();
            });
        }

        $scope.CityList = [];

        $scope.CityBasedOnState = function () {
            var obj = {
                StateId: $scope.State,
            }
            $http.post(baseUrl + '/getcitylist', obj).then(function success(response) {
                $scope.CityList = response.data;
            });
        }

        if($window.sessionStorage['CId']) {
            var companyobj = {
                Id:$window.sessionStorage['CId'],
            }
        }else if($window.sessionStorage['UId']) {
            var companyobj = {
                Id:$window.sessionStorage['UId'],
            }
        } 
        else {
            var companyobj = {
                Id:0,
            }
        }
        
        // console.log(companyobj);

        $scope.CompanyList = [];
        $http.post(baseUrl + '/getCompanyList', companyobj).then(function success(response) {
            $scope.CompanyList = response.data;
            // console.log(response.data);
        });

        
        $scope.CompanyAllList = [];
        $http.post(baseUrl + '/get_Company_List').then(function success(response) {
            $scope.CompanyAllList = response.data;
        });
        
        


        $scope.currage=0;
        $scope.calculateAge = function() {
            var birthday = $filter('date')($scope.DOB, 'y-MM-dd');
            var age = moment().diff(birthday, 'years');
            $scope.currage = age;
            // console.log(age)
        }
         
        $scope.Id=0;
        $scope.Add_Candidate = function() {


            if ($scope.CandidateValidationcontrols() == true) {

                var candidateobj = {
                    Id:$scope.Id,
                    UserName:$window.sessionStorage['UserName'],
                    FirstName: $scope.FirstName,
                    LastName: $scope.LastName,
                    PAN: $scope.PAN,
                    Gender: $scope.Gender,
                    Address1: $scope.Address1,
                    Address2: $scope.Address2,
                    Address3: $scope.Address3,
                    CurrentLocation: $scope.CurrentLocation,
                    Country: $scope.Country,
                    State: $scope.State,
                    City: $scope.City,
                    PreferredCity1: $scope.PreferredCity1,
                    PreferredCity2: $scope.PreferredCity2,
                    PreferredCity3: $scope.PreferredCity3,
                    Pincode: $scope.Pincode,
                    Mobile1: $scope.Mobile1,
                    Mobile2: $scope.Mobile2,
                    EmailId1: $scope.EmailId1,
                    EmailId2: $scope.EmailId2,
                    LinkedIn: $scope.LinkedIn,
                    Aadhar: $scope.Aadhar,
                    DOB: $filter('date')($scope.DOB, 'y-MM-dd'),
                    Age: moment().diff($scope.DOB, 'years'),
                    Skills: $scope.Skills,
                    CurrentCompany: $scope.CurrentCompany,
                    CurrentPackage: $scope.CurrentPackage,
                    ReasonforChange: $scope.ReasonforChange,
                    CompanyName:$scope.CompanyName,
                    Position:$scope.Position,
                    Location:$scope.Location,
                    CTCexpectedasked:$scope.CTCexpectedasked,
                    OfferDate:$filter('date')($scope.OfferDate, 'y-MM-dd'),
                    ExpectedStartDate:$filter('date')($scope.ExpectedStartDate, 'y-MM-dd'),
                    Probabilityofjoining:$scope.Probabilityofjoining,
                    HRPrediction:$scope.HRPrediction,
                    
                }
 
                // console.log(candidateobj);
 
                $http.post(baseUrl + '/Candidate_insert_edit', candidateobj).then(function success(response) {
 
 
                     
 
                    if (response.data[0].data == 10) {
                        alert('Candidate Added Successfully'); 
                        $scope.Candidate_Back();
                        
                    } else if (response.data[0].data == 11) {
                        alert('Candidate is Already In Our Records');
                        $state.go('CandidateSearch', {
                        });
                    } else if (response.data[0].data == 12) {
                        alert('Candidate Updated Successfully');
                        if($window.sessionStorage['CId']) {
                            $state.go('CompanyDashboard', {
                            });
                        }
                        else if($window.sessionStorage['UId']) {
                            $state.go('Home', {
                            });
                        }
                        else if($window.sessionStorage['Id']) {
                            $state.go('Dashboard', {
                            });
                        }
                        
                    }
 
                 });
 
 
            }


        }
        $scope.Id=0;
        $scope.Add_CandidateOffer = function() {


            if ($scope.CandidateOfferValidationcontrols() == true) {

                var Offerobj = {
                    Id:$scope.Id,
                    CompanyName:$scope.CompanyName,
                    Position:$scope.Position,
                    Location:$scope.Location,
                    CTCexpectedasked:$scope.CTCexpectedasked,
                    OfferDate:$filter('date')($scope.OfferDate, 'y-MM-dd'),
                    ExpectedStartDate:$filter('date')($scope.ExpectedStartDate, 'y-MM-dd'),
                    Probabilityofjoining:$scope.Probabilityofjoining,
                    HRPrediction:$scope.HRPrediction,
                    UserName:$window.sessionStorage['UserName'],
                    
                }
 
 
                $http.post(baseUrl + '/Candidate_offer_add', Offerobj).then(function success(response) {
 
 
                     
 
                    if (response.data !== 0) {

                        alert('Candidate Offer Added Successfully'); 
                        if($window.sessionStorage['CId']) {
                            $state.go('CompanyDashboard', {
                            });
                        }
                        else if($window.sessionStorage['UId']) {
                            $state.go('Home', {
                            });
                        } else if($window.sessionStorage['Id']) {
                            $state.go('Dashboard', {
                            });
                        }            
                    } else {

                        alert('Oops Something Went Wrong');
                        if($window.sessionStorage['CId']) {
                            $state.go('CompanyDashboard', {
                            });
                        }
                        else if($window.sessionStorage['UId']) {
                            $state.go('Home', {
                            });
                        }
                        else if($window.sessionStorage['Id']) {
                            $state.go('Dashboard', {
                            });
                        }            

                    }
 
                 });
 
 
            }


        }


        








    }]);


    HROBController.controller("UserController", ['$scope', '$http', '$state', '$stateParams', '$filter', '$window', '$location',
    function ($scope, $http, $state, $stateParams, $filter, $window, $location) {


        if($window.sessionStorage['CId']) {
            var companyobj = {
                Id:$window.sessionStorage['CId'],
            }
        } else {
            var companyobj = {
                Id:0,
            }
        }
        $scope.CompanyId=$window.sessionStorage['CompanyId'];
        $scope.CompanyDashboardList=[];
        $scope.CompanyDashboard = function() {

            var companydashboarddata = {
                CompanyId:$scope.CompanyId,
            }

            // console.log(dashboarddata);

            $http.post(baseUrl + '/Company_Dashboard', companydashboarddata).then(function success(response) {

                // $scope.emptydata=[];
                $scope.CompanyDashboardList=[];
                $scope.CompanyDashboardList=response.data;
                $scope.TotalUser=response.data[0].TotalUser;
                $scope.LastSearch=response.data[0].LastSearch;
                $scope.Searched=response.data[0].Searched;
                $scope.TotalSearches=response.data[0].TotalSearches;
                $scope.level=(($scope.Searched*100)/$scope.TotalSearches);
                // console.log($scope.level);
            })
        }


        $scope.CompanyList = [];
        $http.post(baseUrl + '/getCompanyList', companyobj).then(function success(response) {
            $scope.CompanyList = response.data;
        });

        console.log($window.sessionStorage['CId']);


        $scope.UserValidationcontrols = function () {

            if (typeof ($scope.CompanyId) == "undefined" || $scope.CompanyId == "") {
                alert("Please Enter Company of User");
                return false;
            }
            else if (typeof ($scope.Name) == "undefined" || $scope.Name == "") {
                alert("Please Enter Name of User");
                return false;
            } else if (typeof ($scope.UserName) == "undefined" || $scope.UserName == "") {
                alert("Please Enter UserName");
                return false;

            } else if (typeof ($scope.Password) == "undefined" || $scope.Password == "") {
                alert("Please Enter Password");
                return false;
            } else if (typeof ($scope.Admin) == "undefined" || $scope.Admin == "") {
                alert("Please Select Admin Permission");
                return false;
            
            }else if (typeof ($scope.Email) == "undefined" || $scope.Email == "") {
                alert("Please Enter Email");
                return false;
            }
            return true;
        }

        $scope.Id=0;

        $scope.UserAdd_Edit = function() {
            if ($scope.UserValidationcontrols() == true) {

                var Userobj = {
                    Id:$scope.Id,
                    CompanyId:$scope.CompanyId,
                    Name:$scope.Name,
                    UserName:$scope.UserName,
                    Password:$scope.Password,
                    Designation:$scope.Designation,
                    Department:$scope.Department,
                    Mobile:$scope.Mobile,
                    Email:$scope.Email,
                    Admin:$scope.Admin,
                    UserId:$window.sessionStorage['UserName'],
                    
                }

                // console.log(Userobj);
 
                $http.post(baseUrl + '/User_Add_Edit', Userobj).then(function success(response) {
 
 
                     
 
                    if (response.data[0].data == 10) {

                        alert('User Added Successfully');
                        
                            $state.go('UserList', {
                                
                            });
                                        
                    } else if(response.data[0].data == 11) {

                        alert('User Updated Successfully'); 
                        
                            $state.go('UserList', {
                                
                            });
                        
                    }else if(response.data[0].data == 2) {

                        alert('Limit already Reached'); 
                        
                        
                    }
                    
                    else {

                        alert('Oops Something Went Wrong');
                        if($window.sessionStorage['CId']) {
                            $state.go('Dashboard', {
                            });
                        }
                        else if($window.sessionStorage['UId']) {
                            $state.go('Home', {
                            });
                        }
                        else if($window.sessionStorage['Id']) {
                            $state.go('Dashboard', {
                            });
                        }                  
                    }
 
                 });
 
 
            }
        }


        $scope.ListData = [];
        $scope.current_page = 1;
        $scope.page_size = 10;
        $scope.rembemberCurrentPage = function (p) {
            $scope.current_page = p
        }

        // console.log(companyobj);


        $scope.flag = 0;
        $scope.UserList = [];
        $http.post(baseUrl + '/get_User_List', companyobj).then(function success(response) {
            $scope.UserList = response.data;

            $scope.emptydata = [];
            $scope.UserList = [];
            $scope.UserList = response.data;


            if ($scope.UserList.length > 0) {
                $scope.flag = 1;
            } else {
                $scope.flag = 0;
            }




        });

        $scope.User_List = function() {
            $state.go('UserList', {
                
            });
        }


        $scope.Id = 0;

        $scope.preview_user = function(Id) {
            $state.go('preview_user', {
                UserId: Id
            });
        }
        $scope.edit_user = function(Id) {
            $scope.UserDetails();
            $state.go('edit_user', {
                UserId: Id

            });

        }


        $scope.UserList = [];
        $scope.UserDetails = function () {
            if ($stateParams.UserId != undefined && $stateParams.UserId > 0) {
                var data = {
                    UserId: $stateParams.UserId,

                }
                // console.log(data);
                $http.post(baseUrl + '/get_user_details', data).then(function success(response) {
                    
                    $scope.Id = response.data[0].Id;
                    $scope.CompanyName = response.data[0].CompanyName;
                    $scope.CompanyId = response.data[0].CompanyId;
                    $scope.Name = response.data[0].Name;
                    $scope.UserName = response.data[0].UserName;
                    $scope.Password = response.data[0].Password;
                    $scope.Admin = response.data[0].Admin;
                    $scope.Designation = response.data[0].Designation;
                    $scope.Department = response.data[0].Department;
                    $scope.Mobile = response.data[0].Mobile;
                    $scope.Email = response.data[0].EmailId;

                    $scope.UserList = response.data;
                    // console.log($scope.CompanyList);
                });

            }
        };






    }]);




    HROBController.controller("PackageController", ['$scope', '$http', '$state', '$stateParams', '$filter', '$window', '$location', 'filterFilter',
    function ($scope, $http, $state, $stateParams, $filter, $window, $location, $ff) {



        $scope.PacakgeValidationcontrols = function () {

            if (typeof ($scope.PackageName) == "undefined" || $scope.PackageName == "") {
                alert("Please Enter Package Name");
                return false;
            }
            else if (typeof ($scope.Userscount) == "undefined" || $scope.Userscount == "") {
                alert("Please Enter User Count");
                return false;
            } else if (typeof ($scope.NumberofSearches) == "undefined" || $scope.NumberofSearches == "") {
                alert("Please Enter Number of Searches");
                return false;

            } else if (typeof ($scope.BaseCost) == "undefined" || $scope.BaseCost == "") {
                alert("Please Enter BaseCost");
                return false;
            } 
            return true;
        }



        $scope.Id=0;
        $scope.Package_Add_Edit = function() {


            if ($scope.PacakgeValidationcontrols() == true) {

                var packageobj = {
                    Id:$scope.Id,
                    PackageName:$scope.PackageName,
                    Userscount:$scope.Userscount,
                    NumberofSearches:$scope.NumberofSearches,
                    BaseCost:$scope.BaseCost,
                    UserId:$window.sessionStorage['UserName']                    
                    
                }
 
 
                $http.post(baseUrl + '/Package_Add_Edit', packageobj).then(function success(response) {
 
 
                     
 
                    if (response.data[0].data == 10) {

                        alert('New Package Added Successfully'); 
                        $state.go('PackageList', {
                                
                        });
                                    
                    } else if(response.data[0].data == 11) {

                        alert('Package Updated Successfully'); 
                        
                            $state.go('PackageList', {
                                
                            });
                        
                    }
 
                 });
 
 
            }


        }


        $scope.flag = 0;
        $scope.PackageList = [];
        $http.post(baseUrl + '/get_package_List').then(function success(response) {
            $scope.PackageList = response.data;

            $scope.emptydata = [];
            $scope.PackageList = [];
            $scope.PackageList = response.data;
            // $state.go('ManageStudent');

            if ($scope.PackageList.length > 0) {
                $scope.flag = 1;
            } else {
                $scope.flag = 0;
            }




        });


        $scope.Id = 0;

        $scope.preview_package = function(Id) {
            $state.go('preview_package', {
                PackageId: Id
            });
        }
        $scope.edit_package = function(Id) {
            $scope.PackageDetails();
            $state.go('edit_package', {
                PackageId: Id

            });

        }


        $scope.PackageList = [];
        $scope.PackageDetails = function () {
            if ($stateParams.PackageId != undefined && $stateParams.PackageId > 0) {
                var data = {
                    PackageId: $stateParams.PackageId,

                }
                // console.log(data);
                $http.post(baseUrl + '/get_package_details', data).then(function success(response) {
                    
                    $scope.Id = response.data[0].Id;
                    $scope.PackageName = response.data[0].PackageName;
                    $scope.Userscount = response.data[0].Userscount;
                    $scope.BaseCost = response.data[0].BaseCost;
                    $scope.NumberofSearches = response.data[0].MaxNumberofsearchpermonth;
                    
                    
                    // console.log($scope.CompanyList);
                });

            }
        };



    }]);


    HROBController.controller("MailController", ['$scope', '$http', '$state', '$stateParams', '$filter', '$window', '$location',
    function ($scope, $http, $state, $stateParams, $filter, $window, $location) {

        $scope.MailValidationcontrols = function () {
            // alert("Validationcontrols");
            // $scope.errorlist = null;
            if (typeof ($scope.name) == "undefined" || $scope.name == "") {
                alert("Please enter Name");
                return false;
            } else if (typeof ($scope.email) == "undefined" || $scope.email == "") {
                alert("Please enter Email");
                return false;
            }

            return true;

        };


        $scope.Mail_send = function () {

            if ($scope.MailValidationcontrols() == true) {
                var mailobj = {
                    name:$scope.name,
                    email:$scope.email,
                    phone:$scope.phone,
                    subject:$scope.subject,
                    message:$scope.message,
                };

                $http.post('/send_mail', mailobj).then(function success(response) {
                    // $scope.CountryList = response.data;
                    // $scope.StateBasedOnCountry();
                    alert('Thanks for Contacting Us, We Will get Back to you Soon');
                    window.location.href = "/index";
                });

            }

        }
        $scope.Requirment_send = function () {

            if ($scope.MailValidationcontrols() == true) {

                var mailobj = {
                    name:$scope.name,
                    email:$scope.email,
                    empgroup:$scope.empgroup,
                };

                $http.post('/Send_Requirement', mailobj).then(function success(response) {
                    // $scope.CountryList = response.data;
                    // $scope.StateBasedOnCountry();
                    alert('Thanks for contacting us, We will get back to you soon');
                    window.location.href = "/index";
                });
            }
        }

    }]);