var local_name = '362049dad35d9cef427de57d206b8071'; //MyInvest

const encodedJWT = JSON.parse(localStorage.getItem('user'));
const decodedPayload = decodeJWT(encodedJWT, secretKey);
console.log("Decoded JWT:", decodedPayload);
// Check CLASS
console.log("Check JWT:", decodedPayload['class']);
if (decodedPayload['class'] == 'admin') {
  console.log('Hello! ADMINER');
}else{
  console.log('Hello! User: ' + decodedPayload['user']);
  // use remove hide code
  $('.is-class-admin').remove();
}

// mynavbar
var myNav = $("#my_sidebar_nav");
var css = `<style>
            @media only screen and (min-width: 768px) {
              .mini-sidebar .sidebar-nav > ul > li > a .label {
                position: absolute;
                right: 4px;
                margin-top: -12px;
              }
            } 
          </style>`;

var nav_code = css + `<nav class="sidebar-nav">
                  <ul id="sidebarnav">
                    <li class="nav-small-cap">--- DEVELOP</li>
                    <li>
                      <a class="waves-effect waves-dark" href="index.html" aria-expanded="false">
                        <i class="icon-Car-Wheel"></i>
                        <span class="hide-menu">Dashboard</span>
                        <span class="label label-rounded label-danger">3</span>
                      </a>
                    </li>
                    <li>
                      <a class="waves-effect waves-dark" href="pages-profile.html" aria-expanded="false">
                        <i class="icon-Professor"></i>
                        <span class="hide-menu">My Profile</span>
                      </a>
                    </li>
                    <li>
                      <a class="waves-effect waves-dark" href="my_invest.html" aria-expanded="false">
                        <i class="icon-Money-Bag"></i>
                        <span class="hide-menu">My Invest</span>
                      </a>
                    </li>
                    <li>
                      <a class="waves-effect waves-dark" href="my_ai.html" aria-expanded="false">
                        <i class="icon-Cloud-Picture"></i>
                        <span class="hide-menu">My AI</span>
                      </a>
                    </li>
                    <li class="nav-small-cap is-class-admin">--- ADMIN</li>
                    <li class="is-class-admin">
                      <a
                        class="has-arrow waves-effect waves-dark"
                        href="#"
                        aria-expanded="false"
                        ><i class="icon-Box-Full"></i
                        ><span class="hide-menu">Users</span>
                      </a>
                      <ul aria-expanded="false" class="collapse">
                        <li><a href="ad_users.html">users</a></li>
                        <li><a href="#">user login</a></li>
                      </ul>
                    </li>
                    <li class="nav-small-cap">--- PERSONAL</li>
                    <li>
                      <a
                        class="has-arrow waves-effect waves-dark"
                        href="#"
                        aria-expanded="false"
                        ><i class="icon-Double-Circle"></i
                        ><span class="hide-menu">Apps</span></a
                      >
                      <ul aria-expanded="false" class="collapse">
                        <li><a href="app-calendar.html">Calendar</a></li>
                        <li><a href="app-chat.html">Chat app</a></li>
                        <li><a href="app-ticket.html">Support Ticket</a></li>
                        <li><a href="app-contact.html">Contact / Employee</a></li>
                        <li><a href="app-contact2.html">Contact Grid</a></li>
                        <li><a href="app-contact-detail.html">Contact Detail</a></li>
                      </ul>
                    </li>
                    <li>
                      <a
                        class="has-arrow waves-effect waves-dark"
                        href="#"
                        aria-expanded="false"
                        ><i class="icon-Box-Full"></i
                        ><span class="hide-menu">Inbox</span></a
                      >
                      <ul aria-expanded="false" class="collapse">
                        <li><a href="app-email.html">Mailbox</a></li>
                        <li><a href="app-email-detail.html">Mailbox Detail</a></li>
                        <li><a href="app-compose.html">Compose Mail</a></li>
                      </ul>
                    </li>
                    <li class="nav-small-cap">--- FORMS, TABLE &amp; WIDGETS</li>
                    <li>
                      <a
                        class="has-arrow waves-effect waves-dark"
                        href="#"
                        aria-expanded="false"
                        ><i class="icon-Receipt-4"></i
                        ><span class="hide-menu">Forms</span></a
                      >
                      <ul aria-expanded="false" class="collapse">
                        <li><a href="form-basic.html">Basic Forms</a></li>
                        <li><a href="form-layout.html">Form Layouts</a></li>
                        <li><a href="form-addons.html">Form Addons</a></li>
                        <li><a href="form-material.html">Form Material</a></li>
                        <li><a href="form-float-input.html">Floating Lable</a></li>
                        <li><a href="form-pickers.html">Form Pickers</a></li>
                        <li><a href="form-upload.html">File Upload</a></li>
                        <li><a href="form-mask.html">Form Mask</a></li>
                        <li><a href="form-validation.html">Form Validation</a></li>
                        <li>
                          <a href="form-bootstrap-validation.html"
                            >Form Bootstrap Validation</a
                          >
                        </li>
                        <li><a href="form-dropzone.html">File Dropzone</a></li>
                        <li><a href="form-icheck.html">Icheck control</a></li>
                        <li><a href="form-img-cropper.html">Image Cropper</a></li>
                        <li>
                          <a href="form-bootstrapwysihtml5.html">HTML5 Editor</a>
                        </li>
                        <li><a href="form-typehead.html">Form Typehead</a></li>
                        <li><a href="form-wizard.html">Form Wizard</a></li>
                        <li><a href="form-xeditable.html">Xeditable Editor</a></li>
                        <li><a href="form-summernote.html">Summernote Editor</a></li>
                        <li><a href="form-tinymce.html">Tinymce Editor</a></li>
                      </ul>
                    </li>
                    <li>
                      <a
                        class="has-arrow waves-effect waves-dark"
                        href="#"
                        aria-expanded="false"
                        ><i class="icon-Split-Vertical"></i
                        ><span class="hide-menu">Tables</span></a
                      >
                      <ul aria-expanded="false" class="collapse">
                        <li><a href="table-basic.html">Basic Tables</a></li>
                        <li><a href="table-layout.html">Table Layouts</a></li>
                        <li><a href="table-data-table.html">Data Tables</a></li>
                        <li><a href="table-footable.html">Footable</a></li>
                        <li><a href="table-jsgrid.html">Js Grid Table</a></li>
                        <li><a href="table-responsive.html">Responsive Table</a></li>
                        <li><a href="table-bootstrap.html">Bootstrap Tables</a></li>
                        <li>
                          <a href="table-editable-table.html">Editable Table</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a class="has-arrow waves-effect waves-dark" href="#" aria-expanded="false">
                        <i class="icon-Windows-2"></i>
                        <span class="hide-menu">Widgets</span>
                      </a>
                      <ul aria-expanded="false" class="collapse">
                        <li><a href="widget-data.html">Data Widgets</a></li>
                        <li><a href="widget-apps.html">Apps Widgets</a></li>
                        <li><a href="widget-charts.html">Charts Widgets</a></li>
                      </ul>
                    </li>
                    <li class="nav-small-cap">--- EXTRA COMPONENTS</li>
                    <li>
                      <a
                        class="has-arrow waves-effect waves-dark"
                        href="#"
                        aria-expanded="false"
                        ><i class="icon-Prater"></i
                        ><span class="hide-menu">Icons</span>
                      </a>
                      <ul aria-expanded="false" class="collapse">
                        <li><a href="icon-material.html">Material Icons</a></li>
                        <li><a href="icon-fontawesome.html">Fontawesome Icons</a></li>
                        <li><a href="icon-themify.html">Themify Icons</a></li>
                        <li><a href="icon-weather.html">Weather Icons</a></li>
                        <li><a href="icon-iconmind.html">Mind Icons</a></li>
                        <li>
                          <a href="icon-simple-lineicon.html">Simple Line icons</a>
                        </li>
                        <li><a href="icon-flag.html">Flag Icons</a></li>
                      </ul>
                    </li>
                    <li>
                      <a class="waves-effect waves-dark" href="../dev_example/index.html" aria-expanded="false">
                        <i class="icon-Monitor-Tablet"></i>
                        <span class="hide-menu">Design Example</span>
                      </a>
                    </li>
                  </ul>
                </nav>`;
myNav.append(nav_code);

//Check User Login
$(document).ready(function() {
  const retrievedUser = JSON.parse(localStorage.getItem('user'));
  // console.log('retrievedUser');
  if (retrievedUser) {
      // console.log(retrievedUser.class);
      // console.log(retrievedUser.user);
  }else{
      localStorage.clear();
      window.location.href = "../index.html";
  }
});



