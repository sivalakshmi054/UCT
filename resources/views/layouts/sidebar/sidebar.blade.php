<aside>
    <section class="navigation">

    {!! csrf_field() !!}
        <ul>
            <li>
                <a href="Home#/Home" class="">
                    <img src="images/menuIcons/dashboard.svg">
                    <span class="menuText">Dashboard</span>

                </a>
            </li>
            <li>
                <a href="Home#/CandidateSearch" class="">
                    <img src="images/menuIcons/candidateSearch.svg">
                    <span class="menuText">Candidate Search</span>

                </a>
            </li>
            <li>
                <a href="javascript:;" class="hasChild">
                    <img src="images/menuIcons/dashboard.svg">
                    <span class="menuText">Candidate</span>
                    <span class="icon">
                        <img src="images/leftArrow.png">
                    </span>
                </a>
                <ul class="childMenu">
                    <li>
                        <a href="Home#/AddCandidate">
                            <span class="menuText">Add Candidate</span>

                        </a>
                    </li>
                    <!-- <li>
                        <a href="Home#/Candidateoffers">
                            <span class="menuText">Candidate Offers</span>

                        </a>
                    </li> -->
                </ul>
            </li>
            <!-- <li>
                <a href="javascript:;" class="hasChild">
                    <img src="images/menuIcons/dashboard.svg">
                    <span class="menuText">Company</span>
                    <span class="icon">
                        <img src="images/leftArrow.png">
                    </span>
                </a>
                <ul class="childMenu">
                    <li>
                        <a href="Home#/CompanyList">
                            <span class="menuText">Company List</span>

                        </a>
                    </li>
                    <li>
                        <a ui-sref='Company' href="Home#/Company">
                            <span class="menuText">Add Company</span>

                        </a>
                    </li>
                    <li>
                        <a href="#/companymaster">
                            <span class="menuText">Masters</span>

                        </a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="javascript:;" class="hasChild">
                    <img src="images/menuIcons/icon_user.svg">
                    <span class="menuText">Users</span>
                    <span class="icon">
                        <img src="images/leftArrow.png">
                    </span>
                </a>
                <ul class="childMenu">
                    <li>
                        <a href="Home#/UserList">
                            <span class="menuText">Users List</span>

                        </a>
                    </li>
                    <li>
                        <a href="Home#/UserAdd">
                            <span class="menuText">Add Users</span>

                        </a>
                    </li>
                    <li>
                        <a href="Home#/Home">
                            <span class="menuText">Masters</span>

                        </a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="settings.html">
                    <img src="images/menuIcons/settings.svg">
                    <span class="menuText">Settings</span>

                </a>
            </li> -->
        </ul>
    </section>
</aside>