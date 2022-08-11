<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;

use DB;

class UserController extends Controller

{


    public function company_dashboard_data(Request $request) {

        $CompanyId = $request['CompanyId'];
        $ListData = DB::select('CALL count_sp_company_users (?)', [$CompanyId]);

        return $ListData;       
    }

    public function admin_dashboard_data(Request $request) {

        $Date = $request['Date'];
        $ListData = DB::select('CALL count_sp_admin (?)', [$Date]);

        return $ListData;       
    }

    public function CompanyList(Request $request)
    {
        $Id=$request['Id'];     

        $ListData = DB::select('CALL company_sp_list (?)', [$Id]);

        return $ListData;
    }
    public function User_List(Request $request)
    { 
        $Id=$request['Id'];

        $ListData = DB::select('CALL user_sp_list (?)', [$Id]);

        return $ListData;
    }
    public function User_Details(Request $request)
    { 
        $Id=$request['UserId'];

        $ListData = DB::select('CALL user_sp_details (?)', [$Id]);

        return $ListData;
    }
    public function User_add_edit(Request $request)
    {
        $Id=$request['Id'];
        $Company=$request['CompanyId'];
        $Name=$request['Name'];
        $UserName=$request['UserName'];
        $Password=$request['Password'];
        $Admin=$request['Admin'];
        $Designation=$request['Designation'];
        $Department=$request['Department'];
        $Mobile=$request['Mobile'];
        $EmailId=$request['Email'];
        $UserId=$request['UserId'];
        



        $ListData = DB::select('CALL user_sp_insertupdate(?,?,?,?,?,?,?,?,?,?,?)', [$Id,$Company,$Name,$UserName,$Password,$Admin,$Designation,$Department,$Mobile,$EmailId,$UserId]);

        return $ListData;
    }
  


    

}

