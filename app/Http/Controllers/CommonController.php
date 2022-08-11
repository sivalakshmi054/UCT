<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;

use DB;

class CommonController extends Controller

{

    public function countrylist(Request $request)
    {
        $ListData = DB::select('CALL get_country_list');

        return $ListData;
    }


    public function countrystatelist(Request $request)
    {
        $Id = $request['CountryId'];

        $ListData = DB::select('CALL getstatebycountry (?)', [$Id]);

        return $ListData;
    }


    public function statecitylist(Request $request)
    {
        $Id = $request['StateId'];

        $ListData = DB::select('CALL getcitybystate (?)', [$Id]);

        return $ListData;
    }


    public function Planlist(Request $request)
    {

        $ListData = DB::select('CALL getplanlist');

        return $ListData;
    }

}