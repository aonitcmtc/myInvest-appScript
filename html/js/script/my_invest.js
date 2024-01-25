var local_name = '362049dad35d9cef427de57d206b8071'; //MyInvest
// mynavbar
var myNav = $("#mynavbar");

var nav_code = `<nav class="navbar navbar-expand-lg navbar-light">
                    <div class="col-12">
                    <div class="dropdown navbar-toggler" style="color: transparent; border-color: transparent;">
                        <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="fa fa-bar-chart-o"></i>
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="#">หุ้น</a></li>
                        <li><a class="dropdown-item" href="#">กองทุนรวม</a></li>
                        <li><a class="dropdown-item" href="#">ทอง</a></li>
                        <li><a class="dropdown-item" href="#">Forex</a></li>
                        <li><a class="dropdown-item" href="#">Crypto Currency</a></li>
                        </ul>
                    </div>
                    <div class="btn-group hidden-md-down p-0 px-3 m-0" role="group" aria-label="invest_group">
                        <button type="button" class="btn btn-secondary disabled">
                        <i class="fa fa-bar-chart-o"></i>
                        </button>
                        <button type="button" class="btn btn-secondary">หุ้น</button>
                        <button type="button" class="btn btn-secondary">กองทุนรวม</button>
                        <button type="button" class="btn btn-secondary">ทอง</button>
                        <button type="button" class="btn btn-secondary">Forex</button>
                        <button type="button" class="btn btn-secondary">Crypto Currency</button>
                    </div>
                    </div>
                </nav>`
myNav.append(nav_code);