<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;

use DB;

class PackageController extends Controller

{

    public function package_insert_update(Request $request) {

        $Id=$request['Id'];
        $PackageName=$request['PackageName'];
        $Userscount=$request['Userscount'];
        $MaxNumberofsearchpermonth=$request['NumberofSearches'];
        $BaseCost=$request['BaseCost'];
        $UserName=$request['UserId'];

        $ListData = DB::select('CALL package_add_edit (?,?,?,?,?,?)', [$Id,$PackageName,$Userscount,$MaxNumberofsearchpermonth,$BaseCost,$UserName]);

        return $ListData;
        // return view($Name,$Email,$Mobile,$PAN);

       
    }

    public function packagelist (Request $request) {

        $ListData = DB::select('CALL get_package_list');

        return $ListData;

    }
   
    public function package_details (Request $request) {

        $Id=$request['PackageId'];

        $ListData = DB::select('CALL get_package_details (?)', [$Id]);

        return $ListData;

    }
   




}
