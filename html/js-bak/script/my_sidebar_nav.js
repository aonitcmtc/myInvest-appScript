var local_name = '362049dad35d9cef427de57d206b8071'; //MyInvest
// mynavbar
var myNav = $("#my_sidebar_nav");

var nav_code = `<nav class="sidebar-nav">
                  <ul id="sidebarnav">
                    <li> <a class="waves-effect waves-dark" href="index.html" aria-expanded="false"><i
                                class="fa fa-tachometer"></i><span class="hide-menu">Dashboard</span></a>
                    </li>
                    <li> <a class="waves-effect waves-dark" href="my_invest.html" aria-expanded="false"><i
                                class="fa fa-money"></i><span class="hide-menu">My Invest</span></a>
                    </li>
                    <li> <a class="waves-effect waves-dark" href="pages-profile.html" aria-expanded="false"><i
                                class="fa fa-user-circle-o"></i><span class="hide-menu">Profile</span></a>
                    </li>
                    <li> <a class="waves-effect waves-dark" href="table-basic.html" aria-expanded="false"><i
                                class="fa fa-table"></i><span class="hide-menu">Tables</span></a>
                    </li>
                    <li> <a class="waves-effect waves-dark" href="icon-fontawesome.html" aria-expanded="false"><i
                                class="fa fa-smile-o"></i><span class="hide-menu">Icons</span></a>
                    </li>
                    <li> <a class="waves-effect waves-dark" href="map-google.html" aria-expanded="false"><i
                                class="fa fa-globe"></i><span class="hide-menu">Map</span></a>
                    </li>
                    <li> <a class="waves-effect waves-dark" href="pages-blank.html" aria-expanded="false"><i
                                class="fa fa-bookmark-o"></i><span class="hide-menu">Blank</span></a>
                    </li>
                    <li> <a class="waves-effect waves-dark" href="pages-error-404.html" aria-expanded="false"><i
                                class="fa fa-question-circle"></i><span class="hide-menu">404</span></a>
                    </li>
                    <li> <a class="waves-effect waves-dark" href="my_template.html" aria-expanded="false"><i
                                class="fa fa-bookmark text-danger"></i><span class="hide-menu">My template</span></a>
                    </li>
                    <li> <a class="waves-effect waves-dark" href="../../myInvest-appScript/dev_example/index.html" aria-expanded="false"><i
                                class="fa fa fa-terminal text-primary"></i><span class="hide-menu">Page Example</span></a>
                    </li>
                  </ul>
                  <div class="text-center mt-4">
                    <a href="#"
                        class="btn waves-effect waves-light btn-info hidden-md-down text-white"> Btn</a>
                  </div>
                </nav>`
myNav.append(nav_code);