var local_name = '362049dad35d9cef427de57d206b8071'; //MyInvest
// mynavbar
var myNav = $("#my_topbar_nav");

var addCSS = "width: 50px;"; // Example CSS rule

var nav_code = `<nav class="navbar top-navbar navbar-expand-md navbar-light">
                  <div class="navbar-header bg-warning">
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
                    <ul class="navbar-nav my-lg-0 col-2">
                      <li class="nav-item dropdown mega-dropdown">
                        <a class="nav-link dropdown-toggle waves-effect waves-dark show-inbox" href="javascript:void(0)" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i class="fa fa-inbox"></i>
                        </a>
                        <div id="inbox-page" class="dropdown-menu animated bounceInDown" data-bs-backdrop="">
                          <ul class="mega-dropdown-menu row">
                            <li class="col-lg-3 col-xlg-2 m-b-30">
                              <h4 class="m-b-20">CAROUSEL</h4>
                              <!-- CAROUSEL -->
                              <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                                <div class="carousel-inner" role="listbox">
                                  <div class="carousel-item active">
                                    <div class="container">
                                      <img class="d-block img-fluid" src="../assets/images/big/img1.jpg" alt="First slide">
                                    </div>
                                  </div>
                                  <div class="carousel-item">
                                    <div class="container">
                                      <img class="d-block img-fluid" src="../assets/images/big/img2.jpg" alt="Second slide">
                                    </div>
                                  </div>
                                  <div class="carousel-item">
                                    <div class="container">
                                      <img class="d-block img-fluid" src="../assets/images/big/img3.jpg" alt="Third slide">
                                    </div>
                                  </div>
                                </div>
                                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                  <span class="sr-only">Previous</span>
                                </a>
                                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                  <span class="sr-only">Next</span>
                                </a>
                              </div>
                              <!-- End CAROUSEL -->
                            </li>
                            <li class="col-lg-3 m-b-30">
                              <h4 class="m-b-20">ACCORDION</h4>
                              <!-- Accordian -->
                              <div id="accordion" class="nav-accordion" role="tablist" aria-multiselectable="true">
                                <div class="card">
                                  <div class="card-header" role="tab" id="headingOne">
                                    <h5 class="mb-0">
                                      <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Collapsible Group Item #1
                                      </a>
                                    </h5>
                                  </div>
                                  <div id="collapseOne" class="collapse show" role="tabpanel" aria-labelledby="headingOne">
                                    <div class="card-body">
                                      Anim pariatur cliche reprehenderit, enim eiusmod
                                      high.
                                    </div>
                                  </div>
                                </div>
                                <div class="card">
                                  <div class="card-header" role="tab" id="headingTwo">
                                    <h5 class="mb-0">
                                      <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Collapsible Group Item #2
                                      </a>
                                    </h5>
                                  </div>
                                  <div id="collapseTwo" class="collapse" role="tabpanel" aria-labelledby="headingTwo">
                                    <div class="card-body">
                                      Anim pariatur cliche reprehenderit, enim eiusmod
                                      high life accusamus terry richardson ad squid.
                                    </div>
                                  </div>
                                </div>
                                <div class="card">
                                  <div class="card-header" role="tab" id="headingThree">
                                    <h5 class="mb-0">
                                      <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Collapsible Group Item #3
                                      </a>
                                    </h5>
                                  </div>
                                  <div id="collapseThree" class="collapse" role="tabpanel" aria-labelledby="headingThree">
                                    <div class="card-body">
                                      Anim pariatur cliche reprehenderit, enim eiusmod
                                      high life accusamus terry richardson ad squid.
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li class="col-lg-3 m-b-30">
                              <h4 class="m-b-20">CONTACT US</h4>
                              <!-- Contact -->
                              <form>
                                <div class="form-group">
                                  <input type="text" class="form-control" id="exampleInputname1" placeholder="Enter Name">
                                </div>
                                <div class="form-group">
                                  <input type="email" class="form-control" placeholder="Enter email">
                                </div>
                                <div class="form-group">
                                  <textarea class="form-control" id="exampleTextarea" rows="3" placeholder="Message"></textarea>
                                </div>
                                <button type="submit" class="btn btn-info">
                                  Submit
                                </button>
                              </form>
                            </li>
                            <li class="col-lg-3 col-xlg-4 m-b-30">
                              <h4 class="m-b-20">List style</h4>
                              <!-- List style -->
                              <ul class="list-style-none">
                                <li>
                                  <a href="javascript:void(0)"><i class="fa fa-check text-success"></i> You can
                                    give link</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0)"><i class="fa fa-check text-success"></i> Give
                                    link</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0)"><i class="fa fa-check text-success"></i> Another
                                    Give link</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0)"><i class="fa fa-check text-success"></i> Forth
                                    link</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0)"><i class="fa fa-check text-success"></i> Another
                                    fifth link</a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle waves-effect waves-dark change-lang" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i class="flag-icon flag-icon-us"></i></a>
                        <div id="show-lang-list" class="dropdown-menu dropdown-menu-right animated bounceInDown">
                          <a class="dropdown-item" href="#"><i class="flag-icon flag-icon-th"></i> Thai</a>
                          <a class="dropdown-item" href="#"><i class="flag-icon flag-icon-in"></i> India</a>
                          <a class="dropdown-item" href="#"><i class="flag-icon flag-icon-fr"></i> French</a>
                          <a class="dropdown-item" href="#"><i class="flag-icon flag-icon-cn"></i> China</a>
                          <a class="dropdown-item" href="#"><i class="flag-icon flag-icon-de"></i> Dutch</a>
                        </div>
                      </li>
                      <li class="nav-item dropdown u-pro">
                          <a class="nav-link dropdown-toggle waves-effect waves-dark profile-pic" href=""
                              data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <img src="../assets/images/users/1.jpg" alt="user" class="" /> 
                              <span class="hidden-md-down">Mark Sanders &nbsp;</span> 
                          </a>
                          <div class="dropdown-menu dropdown-menu-right animated flipInY">
                            <ul class="dropdown-user">
                              <li>
                                <div class="dw-user-box">
                                  <div class="u-img">
                                    <img src="../assets/images/users/1.jpg" alt="user">
                                  </div>
                                  <div class="u-text">
                                    <h4>Steave Jobs</h4>
                                    <p class="text-muted">varun@gmail.com</p>
                                    <a href="pages-profile.html" class="btn btn-rounded btn-danger btn-sm">View Profile</a>
                                  </div>
                                </div>
                              </li>
                              <li role="separator" class="divider"></li>
                              <li>
                                <a href="#"><i class="ti-user"></i> My Profile</a>
                              </li>
                              <li>
                                <a href="#"><i class="ti-wallet"></i> My Balance</a>
                              </li>
                              <li>
                                <a href="#"><i class="ti-email"></i> Inbox</a>
                              </li>
                              <li role="separator" class="divider"></li>
                              <li>
                                <a href="#"><i class="ti-settings"></i> Account Setting</a>
                              </li>
                              <li role="separator" class="divider"></li>
                              <li>
                                <a href="#"><i class="fa fa-power-off"></i> Logout</a>
                              </li>
                            </ul>
                          </div>
                          <ul class="dropdown-menu" aria-labelledby="navbarDropdown"></ul>
                      </li>
                    </ul>
                  </div>
                </nav>`
myNav.append(nav_code);
myNav.find('#add-css').attr('style', addCSS);

$('.change-lang').on('click', function() {
  $('#show-lang-list').show();
});

$('.show-inbox').on('click', function() {
  $('#inbox-page').show();
});