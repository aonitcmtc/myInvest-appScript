var local_name = '362049dad35d9cef427de57d206b8071'; //MyInvest
// mynavbar
var myNav = $("#my_topbar_nav");

var addCSS = "width: 50px;"; // Example CSS rule

var nav_code = `<nav class="navbar top-navbar navbar-expand-md navbar-light">
                  <div class="navbar-header">
                    <a class="navbar-brand" href="index.html">
                      <b>
                        <img src="../assets/images/logo-icon.png" alt="homepage" class="dark-logo" />
                        <img src="../assets/images/logo-light-icon.png" alt="homepage" class="light-logo" />
                      </b>
                      <span>
                        <img src="../assets/images/logo-text.png" alt="homepage" class="dark-logo" />
                        <img src="../assets/images/logo-light-text.png" class="light-logo" alt="homepage" />
                      </span>
                    </a>
                  </div>
                  <div class="navbar-collapse">
                    <ul id="add-css" class="navbar-nav me-auto">
                      <li class="nav-item m-auto"> 
                        <a class="nav-link nav-toggler hidden-md-up waves-effect waves-dark"
                              href="javascript:void(0)"><i class="fa fa-bars"></i></a> 
                      </li>
                      <li class="nav-item hidden-xs-down search-box"> 
                        <a class="nav-link hidden-sm-down waves-effect waves-dark" href="javascript:void(0)">
                          <i class="fa fa-search"></i>
                        </a>
                        <form class="app-search">
                          <input type="text" class="form-control" placeholder="Search & enter"> 
                          <a class="srh-btn"><i class="fa fa-times"></i></a> 
                        </form>
                      </li>
                    </ul>
                    <ul class="navbar-nav my-lg-0">
                      <li class="nav-item dropdown u-pro">
                          <a class="nav-link dropdown-toggle waves-effect waves-dark profile-pic" href=""
                              data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <img src="../assets/images/users/1.jpg" alt="user" class="" /> 
                              <span class="hidden-md-down">Mark Sanders &nbsp;</span> 
                          </a>
                          <ul class="dropdown-menu" aria-labelledby="navbarDropdown"></ul>
                      </li>
                    </ul>
                  </div>
                </nav>`
myNav.append(nav_code);
myNav.find('#add-css').attr('style', addCSS);