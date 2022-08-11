
<header class="primaryHeader">
    <h1><img src="images/logo.png" alt=""></h1>
    <a href="javascript:;" class="navIcon" data-toggle="tooltip" title="Show and hide menu" data-placement="bottom">
        <img src="images/nav.png">
    </a>
    <div class="top-nav notification-row">
        <ul class="nav pull-right top-menu">

            <!-- user login dropdown start-->
            <li class="dropdown">
                <a data-toggle="dropdown" class="dropdown-toggle" href="#">
                            <span class="profile-ava">
                                <!-- <img alt="" src="/img/admin.jpg"> -->
                            </span>
                            <span class="username">{{ session()->get('UserName') }}</span>
                            <b class="caret"></b>
                        </a>
                <ul class="dropdown-menu extended logout">
                    <div class="log-arrow-up"></div>
                    <li class="eborder-top" style="text-align:center;">
                        <a href="/#/CompanyHome"></i>Log Out</a>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</header>