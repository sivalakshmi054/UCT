<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;

use DB;

class CompanyController extends Controller

{




    public function companymasterinsert(Request $request)
    {
        $Id=$request['Id'];
        $UserName=$request['UserName'];
        $Name=$request['company_name'];
        $Address1=$request['company_address'];
        $Address2=$request['company_address1'];
        $Address3=$request['company_address2'];
        $City=$request['CityId'];
        $State=$request['StateId'];
        $Country=$request['CountryId'];
        $Pincode=$request['company_pincode'];
        $Mobile=$request['company_mob'];
        $Email=$request['company_email'];
        $Extn=$request['company_extn'];
        $Registrationdate=$request['company_regdate'];
        $SubsStartDate=$request['subs_start_date'];
        $SubsEndDate=$request['subs_end_date'];
        $SubsPackage=$request['company_subs_plan'];
        $SubsNotes=$request['company_subs_plan_notes'];
        $WebsiteUrl=$request['company_website'];
        $CIN=$request['company_cin'];
        $GST=$request['company_gst'];
        $PAN=$request['company_pan'];
        $TAN=$request['company_tan'];
        $CompanyBoardNumber=$request['company_board_number'];
        $ContactPersonPrimaryName=$request['company_person_name'];
        $ContactPersonPrimaryNumber=$request['company_person_mob'];
        $ContactPersonPrimaryEmail=$request['company_person_email'];
        $ContactPersonPrimaryExtn=$request['company_person_extn'];
        $ComapanyHRManagerName=$request['company_hr_name'];
        $HRMobile=$request['company_hr_mob'];
        $HREmail=$request['company_hr_email'];
        $HRExtn=$request['company_hr_extn'];
        $CompanyBillingManagerName=$request['company_manager_name'];
        $BillingManagerMobile=$request['company_manager_mob'];
        $BillingManagerEmail=$request['company_manager_email'];
        $BillingManagerExtn=$request['company_manager_extn'];
        $CompanyCategory=$request['company_cat'];



        $ListData = DB::select('CALL company_sp_insertupdate (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [$Id,$UserName,$Name,$Address1,$Address2,$Address3,$City,$State,$Country,$Pincode,$Mobile,$Email,$Extn,$Registrationdate,$SubsStartDate,$SubsEndDate,$SubsPackage,$SubsNotes,$WebsiteUrl,$CIN,$GST,$PAN,$TAN,$CompanyBoardNumber,$ContactPersonPrimaryName,$ContactPersonPrimaryNumber,$ContactPersonPrimaryEmail,$ContactPersonPrimaryExtn,$ComapanyHRManagerName,$HRMobile,$HREmail,$HRExtn,$CompanyBillingManagerName,$BillingManagerMobile,$BillingManagerEmail,$BillingManagerExtn,$CompanyCategory]);

        return $ListData;
    }

    public function CompanyList(Request $request) {

        $ListData = DB::select('CALL get_Company_List');

        return $ListData;

       
    }


    public function Companydetails(Request $request) {

        $CompanyId = $request['CompanyId'];

        $ListData = DB::select('CALL get_Company_Details (?)', [$CompanyId]);

        return $ListData;

       
    }

    

}