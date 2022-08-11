<aside>
    <section class="navigation">

    {!! csrf_field() !!}
        <ul>
            <li>
                <a href="AdminHome#/Dashboard" class="">
                    <img src="images/menuIcons/dashboard.svg">
                    <span class="menuText">Dashboard</span>

                </a>
            </li>
            <!-- <li>
                <a href="AdminHome#/CandidateSearch" class="">
                    <img src="images/menuIcons/candidateSearch.svg">
                    <span class="menuText">Candidate Search</span>

                </a>
            </li> -->
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
                        <a href= "AdminHome#/AddCandidate">
                            <span class="menuText">Add Candidate</span>

                        </a>
                    </li>
                    <li>
                        <a href="AdminHome#/CandidateList">
                            <span class="menuText">Candidate List</span>

                        </a>
                    </li>
                    <!-- <li>
                        <a href="AdminHome#/EditCandidates">
                            <span class="menuText">Candidate</span>

                        </a>
                    </li> -->
                </ul>
            </li>
            <li>
                <a href="javascript:;" class="hasChild">
                    <img src="images/menuIcons/dashboard.svg">
                    <span class="menuText">Company</span>
                    <span class="icon">
                        <img src="images/leftArrow.png">
                    </span>
                </a>
                <ul class="childMenu">
                    <li>
                        <a href="AdminHome#/Company">
                            <span class="menuText">Add Company</span>

                        </a>
                    </li>
                    <li>
                        <a ui-sref='CompanyList' href="AdminHome#/CompanyList">
                            <span class="menuText">Company List</span>

                        </a>
                    </li>
                    <!-- <li>
                        <a href="#/companymaster">
                            <span class="menuText">Masters</span>

                        </a>
                    </li> -->
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
                        <a href="AdminHome#/UserAdd">
                            <span class="menuText">Add Users</span>

                        </a>
                    </li>
                    <li>
                        <a href="AdminHome#/UserList">
                            <span class="menuText">Users List</span>

                        </a>
                    </li>
                    <!-- <li>
                        <a href="AdminHome#/Home">
                            <span class="menuText">Masters</span>

                        </a>
                    </li> -->
                </ul>
            </li>
            <li>
                <a href="javascript:;" class="hasChild">
                    <img src="images/menuIcons/icon_user.svg">
                    <span class="menuText">Package</span>
                    <span class="icon">
                        <img src="images/leftArrow.png">
                    </span>
                </a>
                <ul class="childMenu">
                    <li>
                        <a href= "AdminHome#/AddPackage">
                            <span class="menuText">Add Package</span>

                        </a>
                    </li>
                    <li>
                        <a href="AdminHome#/PackageList">
                            <span class="menuText">Package List</span>

                        </a>
                    </li>
                    <!-- <li>
                        <a href="AdminHome#/Home">
                            <span class="menuText">Masters</span>

                        </a>
                    </li> -->
                </ul>
            </li>
        </ul>
    </section>
</aside>