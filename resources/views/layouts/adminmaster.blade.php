<!DOCTYPE html>
<html lang="en">
<head>

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Authyn | Intelligent Hiring</title>
    <base href="{{ url('/') }}">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="css/bootstrap-datepicker.min.css">
    <!-- <link rel="stylesheet" href="css/app.css"> -->

    {!!Html::style('css/login.css')!!}
    {!!Html::style('css/app.css')!!}
    {!!Html::style('css/bootstrap-datepicker.min.css')!!}
    {!!Html::style('css/bootstrap.min.css')!!}  
    <!-- {!!Html::style('css/bootstrap-theme.css')!!} -->
    <!-- {!!Html::style('css/ng-table.css')!!}  -->


@yield('style')
</head>
<body ng-app="HROBController">

@if (session()->has('Id'))


    <section class="container col-xl-12">

        @include('layouts.header.header') @include('layouts.sidebar.adminsidebar')

        <section class="main-content">

            {{-- <div ng-include='layouts.header.header'></div> --}}

            <div class="wrapper">
                    <div ui-view></div>

            </div>


        </section>

    </section>



<script>

</script>

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
    <script src="Scripts/app.js"></script>
    <script src="Scripts/appLogin.js"></script>
    <script src="Scripts/controller.js"></script>
    <script src="js/Common.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"></script>
    <script src="js/jquery.nicescroll.min.js"></script>
    <script src="js/moment.min.js"></script>
    <script src="js/bootstrap-datepicker.min.js"></script>
    <script src="js/jquery.nicescroll.min.js"></script>
    <script src="js/app.js"></script>
    <script>
        $(function () {
            $('#filter button').click(function () {
                $('.btn-primary').removeClass('btn-primary');
                $(this).removeClass('btn-default').addClass('btn-primary');
            })
        });
    </script>
    <script>
        $(function () {
            $('.tabs li a').click(function () {
            $('.tabs li a').removeClass('activeTab');
            $(this).addClass('activeTab');
            $('[data-destination]').hide();
            $(`[data-destination="${$(this).attr('data-target')}"]`).show();



    })
    })
    </script>

    @yield('script')


    @else 

    <script>
        alert('Not Authorised User');
        window.location.href = "/Admin#/loginpage";
    </script>

@endif

</body>
</html>