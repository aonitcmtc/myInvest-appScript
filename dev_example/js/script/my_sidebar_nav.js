var local_name = '362049dad35d9cef427de57d206b8071'; //MyInvest
// mynavbar
var myNav = $("#my_sidebar_nav");

var nav_code = `<nav class="sidebar-nav">
                  <ul id="sidebarnav">
                    <li> 
                      <a class="waves-effect waves-dark" href="index.html" aria-expanded="false">
                        <i class="fa fa-tachometer"></i>
                        <span class="hide-menu">Dashboard</span>
                      </a>
                    </li>
                    <li> 
                      <a class="waves-effect waves-dark" href="pages-profile.html" aria-expanded="false">
                        <i class="fa fa-user-circle-o"></i>
                        <span class="hide-menu">Profile</span>
                        <span class="label label-rounded label-danger">4</span>
                      </a>
                    </li>
                    <li> <a class="waves-effect waves-dark" href="table-basic.html" aria-expanded="false"><i
                                class="fa fa-table"></i><span class="hide-menu">Tables</span></a>
                    </li>
                    <li class="alert-danger"> <a class="waves-effect waves-dark" href="icon-fontawesome.html" aria-expanded="false"><i
                                class="fa fa-smile-o"></i><span class="hide-menu">Icons</span></a>
                    </li>
                    <li class="alert-danger"> <a class="waves-effect waves-dark" href="ex_flags.html" aria-expanded="false"><i
                                class="fa fa-flag"></i><span class="hide-menu">Flags</span></a>
                    </li>
                    <li> <a class="waves-effect waves-dark" href="map-google.html" aria-expanded="false"><i
                                class="fa fa-globe"></i><span class="hide-menu">Map</span></a>
                    </li>
                    <li> 
                      <a class="waves-effect waves-dark" href="pages-lottery.html" aria-expanded="false">
                        <i class="fa fa-calendar"></i>
                        <span class="hide-menu">Lottery</span>
                      </a>
                    </li>
                    <li> <a class="waves-effect waves-dark" href="pages-blank.html" aria-expanded="false"><i
                                class="fa fa-bookmark-o"></i><span class="hide-menu">Blank</span></a>
                    </li>
                    <li> <a class="waves-effect waves-dark" href="pages-error-404.html" aria-expanded="false"><i
                                class="fa fa-question-circle"></i><span class="hide-menu">404</span></a>
                    </li>
                    <li> 
                      <a class="waves-effect waves-dark" href="my_template.html" aria-expanded="false">
                        <i class="fa fa-bookmark text-danger"></i>
                        <span class="hide-menu">My template</span>
                        <span class="label label-rounded label-success">25</span>
                      </a>
                    </li>
                  </ul>
                  <div class="text-center mt-4">
                    <div class="d-grid gap-2">
                      <button class="btn btn-warning" type="button">Example</button>
                    </div>
                  </div>
                </nav>`
myNav.append(nav_code);