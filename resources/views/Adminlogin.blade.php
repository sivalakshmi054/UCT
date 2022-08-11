<!DOCTYPE html>
<html lang="en">
<head>

<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Authyn Login</title>
<base href="{{ url('/') }}">



<script>
function checkForm(form){

if(!form.check.checked) {
  alert("Please click the checkbox");
  form.check.focus();
  return false;
}else{
    var baseUrl = $("base").first().attr("href");
    window.location.href = baseUrl + "/AdminHome#/Dashboard";
}
return true;
}

</script>

  {!!Html::style('css/login.css')!!}

    @yield('style')
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css">
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"></script>
    <!-- <link rel="stylesheet" href="css/login.css"> -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet">
</head>

<body ng-app="HROBController" ng-controller="LoginPageController">
    
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-6 bx-Shadow">
                <img src="images/login.jpg" class="loginImg">
            </div>
            <div class="col-md-6 align-self-center">
                <div class="loginContainer">
                    <img src="images/logo.jpg" alt="">
                    <h1>Welcome To Authyn</h1>
                    <p>Intelligent Hiring</p>
                    <p>No More Candidate Offer Drop Suprises </p>
                    <form>
                        @csrf
                        <div class="form-group">
                            <input type="text" ng-model="UserName" required="required" class="form-control" placeholder="Enter Username">
                        </div>
                        <div class="form-group">
                            <input type="password" required="required" ng-model="Password" class="form-control" placeholder="Enter Password">
                        </div>
                        <button type="submit" class="btn btn-primary btn-block" ng-click="Login_AddEdit()" >Login</button>
                        
                    </form>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="exampleModal23e" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel"></h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <div class="row">
    
    <div class="col-ms-3">
        
  <form  onsubmit="return checkForm(this);">
  <p><input type="checkbox" name="check">I have read the Terms and conditions and the privacy policy. </p> 
        <br><br>
        
        <button type="submit" class="btn btn-secondary" ng-click="update_list()" style="background-color:grey; width:50px;">Ok</button></a>
        
        <button type="cancel" class="btn btn-secondary" style="background-color:grey; width:70px" data-dismiss="modal">Cancel</button>

        
    </div>
    </div>
      </div>
      
    </div>
  </div>
</div> 


    <!-- javascripts  -->
    {!!Html::script('js/jquery.js')!!} 
    {!!Html::script('js/jquery-ui-1.10.4.min.js')!!} 
    {!!Html::script('js/jquery-1.8.3.min.js')!!}
    {!!Html::script('js/jquery-ui-1.9.2.custom.min.js')!!} 
    {!!Html::script('js/bootstrap.min.js')!!} 
    {!!Html::script('js/jquery.scrollTo.min.js')!!}
    {!!Html::script('js/jquery.nicescroll.js')!!} 
    {!!Html::script('assets/jquery-knob/js/jquery.knob.js')!!} 
    {!!Html::script('js/jquery.sparkline.js')!!}
    <!-- {!!Html::script('assets/jquery-easy-pie-chart/jquery.easy-pie-chart.js')!!}  -->
    {!!Html::script('js/owl.carousel.js')!!}
    {!!Html::script('js/fullcalendar.min.js')!!} 
    {!!Html::script('assets/fullcalendar/fullcalendar/fullcalendar.js')!!} 
    {!!Html::script('js/calendar-custom.js')!!}
    {!!Html::script('js/jquery.rateit.min.js')!!} 
    {!!Html::script('js/jquery.customSelect.min.js')!!} 
    {!!Html::script('assets/chart-master/Chart.js')!!}
    {!!Html::script('js/scripts.js')!!} 
    <!-- {!!Html::script('js/sparkline-chart.js')!!}  -->
    <!-- {!!Html::script('js/easy-pie-chart.js')!!} -->
    {!!Html::script('js/jquery-jvectormap-1.2.2.min.js')!!} 
    {!!Html::script('js/jquery-jvectormap-world-mill-en.js')!!} 
    {!!Html::script('js/xcharts.min.js')!!}
    {!!Html::script('js/jquery.autosize.min.js')!!} 
    {!!Html::script('js/jquery.placeholder.min.js')!!} 
    {!!Html::script('js/gdp-data.js')!!}
    {!!Html::script('js/morris.min.js')!!} 
    {!!Html::script('js/sparklines.js')!!} 
    <!-- {!!Html::script('js/angucomplete-alt.js')!!} -->
    <!-- {!!Html::script('js/charts.js')!!}  -->
    {!!Html::script('js/jquery.slimscroll.min.js')!!}
    <!--   {!!Html::script('js/bootstrap.min.js')!!} -->
    {!!Html::script('js/bootstrap-datepicker.js')!!}
    <!-- Dual List Box 
{!!Html::script('js/run_prettify.min.js')!!} --> 
    {!!Html::script('js/jquery.bootstrap-duallistbox.js')!!} 
     <!--Angular JS 
    {!!Html::script('js/angular.min.js')!!} -->
    {!!Html::script('js/angular.js')!!}
    {!!Html::script('js/angular-ui-router.js')!!}
    {!!Html::script('js/angucomplete-alt.js')!!}
    {!!Html::script('js/smart-table.js')!!}
    {!!Html::script('js/daypilot-all.min.js')!!}
    {!!Html::script('js/daypilot.js')!!}
    {!!Html::script('js/bsDualListBox.js')!!}
    {!!Html::script('js/bootstrap-timepicker.js')!!}
    <!-- {!!Html::script('js/angular-trix.js')!!} -->
    {!!Html::script('js/democtrl.js')!!}
    {!!Html::script('js/moment.min.js')!!}

    {!!Html::script('js/angular-ui.js')!!}
    {!!Html::script('js/summernote.js')!!}
    {!!Html::script('js/ui-bootstrap-tpls.js')!!}
    {!!Html::script('js/ui-bootstrap.js')!!}
  
    
  {!!Html::script('js/bootstrap-multiselect.js')!!}
    <script src="Scripts/appLogin.js"></script>
    <script src="Scripts/controller.js"></script>
    <script src="js/Common.js"></script>


    @yield('script')

    
</body>



</html>