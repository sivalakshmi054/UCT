<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;

class HomePageController extends Controller

{


    public function __construct()
    {
        $this->middleware('web');

    }

    public function gethomepage() 
    {
        return view('layouts/master');
    }
    public function getcompanyhomepage() 
    {
        return view('layouts/companymaster');
    }
    public function getAdminhomepage() 
    {
        return view('layouts/adminmaster');
    }

}