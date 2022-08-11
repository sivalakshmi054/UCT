<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SendSMSController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/



// Website

Route::get('send-sms', [SendSMSController::class, 'index']);

Route::get('/', function () {
    return view('index');
});
Route::get('/index', function () {
    return view('index');
});
Route::get('/aboutus', function () {
    return view('aboutus');
});
Route::get('/contactus', function () {
    return view('contactus');
});
Route::post('/send_mail','LoginController@Send_Email');
Route::post('/Send_Requirement','LoginController@Send_Requirement');

Route::get('/terms_of_service', function () {
    return view('terms_of_service');
});
Route::get('/privacy_policy', function () {
    return view('privacy_policy');
});




// Application

Route::post('/Hr_Dashboard','CandidateController@hr_dashboard_data');
Route::post('/Company_Dashboard','UserController@company_dashboard_data');
Route::post('/Admin_Dashboard','UserController@admin_dashboard_data');

Route::post('/getLogin_InsertUpdate','LoginController@login_insertupdate');
Route::post('/getCompanyLogin_InsertUpdate','LoginController@Companylogin_insertupdate');
Route::post('/getUserLogin_InsertUpdate','LoginController@Userlogin_insertupdate');


Route::get('session/loginget','LoginController@loginaccessSessionData');
Route::get('session/loginset','LoginController@login_storeSessionData');


Route::get('/logout',['as'=>'logout','uses'=>'LoginController@getlogout']);

Route::get('/Hr',['as'=>'/','uses'=>'LoginController@getlogin']);
Route::get('/Company',['as'=>'/','uses'=>'LoginController@getcompanylogin']);
Route::get('/Admin',['as'=>'/','uses'=>'LoginController@getAdminlogin']);
Route::get('/Home',['as'=>'Home','uses'=>'HomePageController@gethomepage']);
Route::get('/CompanyHome',['as'=>'/Home','uses'=>'HomePageController@getcompanyhomepage']);
Route::get('/AdminHome',['as'=>'/Home','uses'=>'HomePageController@getAdminhomepage']);
Route::post('/login',['as'=>'login','uses'=>'LoginController@postlogin']);


Route::post('/getCountryList','CommonController@countrylist');
Route::post('/getPlanList','CommonController@Planlist');
Route::post('/getstatelist','CommonController@countrystatelist');
Route::post('/getcitylist','CommonController@statecitylist');
Route::post('/companyinsertedit','CompanyController@companymasterinsert');
Route::post('/get_Company_List','CompanyController@CompanyList');
Route::post('/get_company_details','CompanyController@Companydetails');


// Candidate 

Route::post('/candidatesearch','CandidateController@candidatesearchlist');
Route::post('/candidatedetails','CandidateController@CandidateDetailsList');
Route::post('/history_add','CandidateController@Add_history');
Route::post('/History_details','CandidateController@Searchhistory');
Route::post('/Candidate_insert_edit','CandidateController@Candidate_add_edit');
Route::post('/Candidate_offer_add','CandidateController@Candidate_offer_insert');
Route::post('/get_Candidate_List','CandidateController@Candidate_List');


// Users


Route::post('/getCompanyList','UserController@CompanyList');
Route::post('/User_Add_Edit','UserController@User_add_edit');
Route::post('/get_User_List','UserController@User_List');
Route::post('/get_user_details','UserController@User_Details');
Route::post('/get_Update_List','LoginController@UpdateList');

// Package
Route::post('/Package_Add_Edit','PackageController@package_insert_update');
Route::post('/get_package_List','PackageController@packagelist');
Route::post('/get_package_details','PackageController@package_details');