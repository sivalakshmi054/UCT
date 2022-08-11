<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;

use DB;

class CandidateController extends Controller

{

    public function candidatesearchlist(Request $request) {

        $Name = '%'.$request['Name'].'%';
        $Email = '%'.$request['Email'].'%';
        $Mobile = '%'.$request['Mobile'].'%';
        $PAN = $request['PAN'];
        $DOB = $request['DOB'];
        $Aadhar = '%'.$request['Aadhar'].'%';
        $CompanyId = $request['CompanyId'];

        $ListData = DB::select('CALL get_candidate_list (?,?,?,?,?,?,?)', [$Name,$Email,$Mobile,$PAN,$DOB,$Aadhar,$CompanyId]);

        return $ListData;
        // return view($Name,$Email,$Mobile,$PAN);

       
    }


    public function CandidateDetailsList(Request $request) {

        $Id = $request['CandidateId'];
        $ListData = DB::select('CALL get_candidate_details (?)', [$Id]);

        return $ListData;
        // return view($Name,$Email,$Mobile,$PAN);

       
    }
    public function hr_dashboard_data(Request $request) {

        $Id = $request['UserId'];
        $CompanyId = $request['CompanyId'];
        $Date = $request['Date'];

        $ListData = DB::select('CALL Count_Sp_Searches (?,?,?)', [$Id,$CompanyId,$Date]);

        return $ListData;
        // return view($Name,$Email,$Mobile,$PAN);

       
    }

    public function Candidate_List(Request $request) {


        $ListData = DB::select('CALL get_sp_candidate_list');

        return $ListData;
        // return view($Name,$Email,$Mobile,$PAN);

       
    }


    public function Add_history(Request $request) {

        $CompanyId = $request['CompanyId'];
        $UserId = $request['UserId'];
        $UserName = $request['UserName'];
        $CandidateId = $request['CandidateId'];
        $totaloffers = $request['totaloffers'];
        $OfferDate = $request['OfferDate'];

        $ListData = DB::select('CALL search_history_add (?,?,?,?,?,?)', [$CompanyId,$UserId,$UserName,$CandidateId,$totaloffers,$OfferDate]);

        return $ListData;
        // return view($Name,$Email,$Mobile,$PAN);

       
    }

    public function Searchhistory(Request $request) {

        $CompanyId = $request['CompanyId'];
        $UserId = $request['UserId'];
        $UserName = $request['UserName'];

        $ListData = DB::select('CALL search_history_details (?,?,?)', [$CompanyId,$UserId,$UserName]);

        return $ListData;
        // return view($Name,$Email,$Mobile,$PAN);

       
    }


    public function Candidate_add_edit(Request $request) {

        $Id=$request['Id'];
        $PAN=$request['PAN'];
        $FirstName=$request['FirstName'];
        $LastName=$request['LastName'];
        $DOB=$request['DOB'];
        $Age=$request['Age'];
        $Gender=$request['Gender'];
        $CurrentCity=$request['CurrentLocation'];
        $PreferredCity1=$request['PreferredCity1'];
        $PreferredCity2=$request['PreferredCity2'];
        $PreferredCity3=$request['PreferredCity3'];
        $Address1=$request['Address1'];
        $Address2=$request['Address2'];
        $Address3=$request['Address3'];
        $City=$request['City'];
        $State=$request['State'];
        $Country=$request['Country'];
        $Pincode=$request['Pincode'];
        $Mobile1=$request['Mobile1'];
        $Mobile2=$request['Mobile2'];
        $EmailId1=$request['EmailId1'];
        $EmailId2=$request['EmailId2'];
        $Aadhar=$request['Aadhar'];
        $LinkedInProfileUrl=$request['LinkedIn'];
        $UserName=$request['UserName'];
        $Skills=$request['Skills'];
        $CurrentCompany=$request['CurrentCompany'];
        $CurrentPackage=$request['CurrentPackage'];
        $ReasonforChange=$request['ReasonforChange'];
        // $CandidateId=$request['Id'];
        $CompanyName=$request['CompanyName'];
        $Location=$request['Location'];
        $CTCexpectedasked=$request['CTCexpectedasked'];
        $ExpectedStartDate=$request['ExpectedStartDate'];
        $Position=$request['Position'];
        $OfferDate=$request['OfferDate'];
        $Probabilityofjoining=$request['Probabilityofjoining'];
        $HRPrediction=$request['HRPrediction'];

        $ListData = DB::select('CALL candidate_insert_edit (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [$Id,$PAN,$FirstName,$LastName,$DOB,$Age,$Gender,$CurrentCity,$PreferredCity1,$PreferredCity2,$PreferredCity3,$Address1,$Address2,$Address3,$City,$State,$Country,$Pincode,$Mobile1,$Mobile2,$EmailId1,$EmailId2,$Aadhar,$LinkedInProfileUrl,$UserName,$Skills,$CurrentCompany,$CurrentPackage,$ReasonforChange,$CompanyName,$Location,$CTCexpectedasked,$ExpectedStartDate,$Position,$OfferDate,$Probabilityofjoining,$HRPrediction]);
        
        return $ListData;
    }


    public function Candidate_offer_insert(Request $request) {

        $CandidateId=$request['Id'];
        $CompanyName=$request['CompanyName'];
        $Location=$request['Location'];
        $CTCexpectedasked=$request['CTCexpectedasked'];
        $ExpectedStartDate=$request['ExpectedStartDate'];
        $Position=$request['Position'];
        $OfferDate=$request['OfferDate'];
        $Probabilityofjoining=$request['Probabilityofjoining'];
        $HRPrediction=$request['HRPrediction'];
        $UserName=$request['UserName'];


        $ListData = DB::select('CALL candidate_offer_insert_edit (?,?,?,?,?,?,?,?,?,?)', [$CandidateId,$CompanyName,$Location,$CTCexpectedasked,$ExpectedStartDate,$Position,$OfferDate,$Probabilityofjoining,$HRPrediction,$UserName]);

        return $ListData;
    }

    




}

