<?php

namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Session;
use Auth;
use DB;
use AuthenticateUsers;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;


class LoginController extends Controller
{


    protected $UserName = 'UserName';
    protected $redirectTo = '/Home';
    protected $guard = 'web';


    public function Send_Requirement(Request $request) {

       
        $senderName=$request['name'];
        $senderEmail=$request['email'];
        $sendersubject='Demo Request';
        $sendermessage=$request['empgroup'];


        $message="
        Sender Name = $senderName
        Sender Email = $senderEmail
        Sender Employee Strength = $sendermessage";

    

        $senderName = 'Authyn Website';

        // Replace smtp_username with your Amazon SES SMTP user name.
        $usernameSmtp = 'AKIAT63SRORSLXUUV5GH';

        // Replace smtp_password with your Amazon SES SMTP password.
        $passwordSmtp = 'BDz7gTHfH0qzUMpTwpCdujOAFvoPUJBSMx+Q7kmC3Igb';


        $host = 'email-smtp.us-east-1.amazonaws.com';
        $port = 587;

        // The subject line of the email
        $subject = $sendersubject;

        // The plain-text body of the email
        $bodyText = nl2br($message);

        // The HTML-formatted body of the email
        $bodyHtml = nl2br($message);

        $mail = new PHPMailer(true);

        try {
            // Specify the SMTP settings.
            // $mail->SMTPDebug = true;
            // $mail->SMTPDebug = 2;
            $mail->isSMTP();
            $mail->setFrom('no-reply@authyn.com', $senderName);
            $mail->Username   = $usernameSmtp;
            $mail->Password   = $passwordSmtp;
            $mail->Host       = $host;
            $mail->Port       = $port;
            $mail->SMTPAuth   = true;
            $mail->SMTPSecure = 'tls';
            // $mail->addCustomHeader('X-SES-CONFIGURATION-SET', $configurationSet);

            // Specify the message recipients.
            $mail->addAddress('info@authyn.com');
            // You can also add CC, BCC, and additional To recipients here.

            // Specify the content of the message.
            $mail->isHTML(true);
            $mail->Subject    = $subject;
            $mail->Body       = $bodyHtml;
            $mail->AltBody    = $bodyText;
            $mail->Send();
            echo "Email sent!" , PHP_EOL;
        } catch (phpmailerException $e) {
            echo "An error occurred. {$e->errorMessage()}", PHP_EOL; //Catch errors from PHPMailer.
            echo "<script>alert('try again');</script>";
        } catch (Exception $e) {
            echo "Email not sent".$mail->ErrorInfo.PHP_EOL;
            echo "<script>alert(".$mail->ErrorInfo.PHP_EOL.");</script>"; //Catch errors from Amazon SES.
        }


    }



    public function Send_Email(Request $request) {

       
        $senderName=$request['name'];
        $senderEmail=$request['email'];
        $senderphone=$request['phone'];
        $sendersubject=$request['subject'];
        $sendermessage=$request['message'];

        $message="
        Sender Name = $senderName
        Sender Phone = $senderphone
        Sender Email = $senderEmail
        Message = $sendermessage";

    

        $senderName = 'Authyn Website';

        // Replace smtp_username with your Amazon SES SMTP user name.
        $usernameSmtp = 'AKIAT63SRORSLXUUV5GH';

        // Replace smtp_password with your Amazon SES SMTP password.
        $passwordSmtp = 'BDz7gTHfH0qzUMpTwpCdujOAFvoPUJBSMx+Q7kmC3Igb';


        $host = 'email-smtp.us-east-1.amazonaws.com';
        $port = 587;

        // The subject line of the email
        $subject = $sendersubject;

        // The plain-text body of the email
        $bodyText = nl2br($message);

        // The HTML-formatted body of the email
        $bodyHtml = nl2br($message);

        $mail = new PHPMailer(true);

        try {
            // Specify the SMTP settings.
            // $mail->SMTPDebug = true;
            // $mail->SMTPDebug = 2;
            $mail->isSMTP();
            $mail->setFrom('no-reply@authyn.com', $senderName);
            $mail->Username   = $usernameSmtp;
            $mail->Password   = $passwordSmtp;
            $mail->Host       = $host;
            $mail->Port       = $port;
            $mail->SMTPAuth   = true;
            $mail->SMTPSecure = 'tls';
            // $mail->addCustomHeader('X-SES-CONFIGURATION-SET', $configurationSet);

            // Specify the message recipients.
            $mail->addAddress('info@authyn.com');
            // You can also add CC, BCC, and additional To recipients here.

            // Specify the content of the message.
            $mail->isHTML(true);
            $mail->Subject    = $subject;
            $mail->Body       = $bodyHtml;
            $mail->AltBody    = $bodyText;
            $mail->Send();
            echo "Email sent!" , PHP_EOL;
        } catch (phpmailerException $e) {
            echo "An error occurred. {$e->errorMessage()}", PHP_EOL; //Catch errors from PHPMailer.
            echo "<script>alert('try again');</script>";
        } catch (Exception $e) {
            echo "Email not sent".$mail->ErrorInfo.PHP_EOL;
            echo "<script>alert(".$mail->ErrorInfo.PHP_EOL.");</script>"; //Catch errors from Amazon SES.
        }




    }




    

    public function postlogin(Request $request) {

        return redirect()->route('Home');   

    }



    public function getlogout()
    {

        Session::flush(); 
        Session::forget('UId'); 
        Session::forget('CId'); 
        Session::forget('Id'); 
        Auth::logout();
        return redirect()->route('/');
    }


      public function getlogin()
      {
          return view('login');
      }
      public function getcompanylogin()
      {
          return view('companylogin');
      }
      public function getAdminlogin()
      {
          return view('Adminlogin');
      }

    public function loginaccessSessionData()
     {
        $value = session('UserName');
         //dd($ListData);
        // echo "loginaccessSessionData";
        return $value;

     }

     public function login_storeSessionData(Request $request){

        $request->session()->put('$UserName');
        //return $request;
        echo "Data has been added to session";
     }

      public function login_insertupdate(Request $request) {
          $UserName = $request['UserName'];
          $Password = $request['Password'];

          $ListData = DB::select('CALL adminlogin_sp_insertupdate(?,?)', [$UserName,$Password]);

        foreach($ListData as $Ids) {
            if($Ids-> data > 0)
            {
                $Id = $Ids->Id;
                $UserName = $Ids->UserName;

                $request->Session()->put('Id', $Id);
                $request->Session()->put('UserName', $UserName);


                $sessionvalue = Session('Id','UserName');

                array_push($ListData, $sessionvalue);

                return $ListData;
            }
        }


      }


      public function Companylogin_insertupdate(Request $request) {
          $UserName = $request['UserName'];
          $Password = $request['Password'];

          $ListData = DB::select('CALL companylogin_sp_insertupdate(?,?)', [$UserName,$Password]);

        foreach($ListData as $Ids) {
            if($Ids-> data > 0)
            {
                $CId = $Ids->CId;
                $UserName = $Ids->UserName;

                $request->Session()->put('CId', $CId);
                $request->Session()->put('UserName', $UserName);


                $sessionvalue = Session('CId','UserName');

                array_push($ListData, $sessionvalue);

                return $ListData;
            }
        }


      }
    public function Userlogin_insertupdate(Request $request) {
          $UserName = $request['UserName'];
          $Password = $request['Password'];

          $ListData = DB::select('CALL userlogin_sp_insertupdate(?,?)', [$UserName,$Password]);

        foreach($ListData as $Ids) {
            if($Ids-> data > 0)
            {
                $UId = $Ids->UId;
                $UserName = $Ids->UserName;

                $request->Session()->put('UId', $UId);
                $request->Session()->put('UserName', $UserName);


                $sessionvalue = Session('UId','UserName');

                array_push($ListData, $sessionvalue);

                return $ListData;
            }
        }


    }
    public function UpdateList(Request $request)
    { 
            $UserName = $request['UserName'];
            $Password = $request['Password'];
  
            $ListData = DB::select('CALL update_consent(?,?)', [$UserName,$Password]);
  
          foreach($ListData as $Ids) {
              if($Ids-> data > 0)
              {
                  $UId = $Ids->UId;
                  $UserName = $Ids->UserName;
  
                  $request->Session()->put('UId', $UId);
                  $request->Session()->put('UserName', $UserName);
  
  
                  $sessionvalue = Session('UId','UserName');
  
                  array_push($ListData, $sessionvalue);
  
                  return $ListData;
              }
          }

    }
}