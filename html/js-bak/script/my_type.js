var local_name = '362049dad35d9cef427de57d206b8071'; //MyInvest
// mynavbar
var myNav = $("#mynavbar");

var nav_code = `<nav class="navbar navbar-expand-lg navbar-light">
                  <div class="col-12">
                    <div class="dropdown navbar-toggler" style="color: transparent; border-color: transparent;">
                      <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                          <i class="fa fa-bar-chart-o"></i>
                      </a>
                      <button type="button" class="btn btn-light text-primary text-capitalize">
                        <strong id="title_name_label">stock</strong>
                      </button>
                      <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><a class="dropdown-item stock-btn" id="dd_stock" data-type="stock" href="#">หุ้น</a></li>
                      <li><a class="dropdown-item stock-btn" id="dd_fund" data-type="fund" href="#">กองทุนรวม</a></li>
                      <li><a class="dropdown-item stock-btn" id="dd_drx" data-type="drx" href="#">DRX</a></li>
                      <li><a class="dropdown-item stock-btn" id="dd_gold" data-type="gold" href="#">ทอง</a></li>
                      <li><a class="dropdown-item stock-btn" id="dd_forex" data-type="forex" href="#">Forex</a></li>
                      <li><a class="dropdown-item stock-btn" id="dd_crypto" data-type="crypto" href="#">Crypto Currency</a></li>
                      </ul>
                    </div>
                    <div class="btn-group hidden-md-down p-0 px-3 m-0" role="group" aria-label="invest_group">
                      <button type="button" class="btn btn-secondary disabled">
                        <i class="fa fa-bar-chart-o"></i>
                      </button>
                      <button type="button" data-type="stock" id="stock" class="btn btn-secondary stock-btn">หุ้น</button>
                      <button type="button" data-type="fund" id="fund" class="btn btn-secondary stock-btn">กองทุนรวม</button>
                      <button type="button" data-type="drx" id="drx" class="btn btn-secondary stock-btn">DRX</button>
                      <button type="button" data-type="gold" id="gold" class="btn btn-secondary stock-btn">ทอง</button>
                      <button type="button" data-type="forex" id="forex" class="btn btn-secondary stock-btn">Forex</button>
                      <button type="button" data-type="crypto" id="crypto" class="btn btn-secondary stock-btn">Crypto Currency</button>
                    </div>
                  </div>
                </nav>`
myNav.append(nav_code);

$('.stock-btn').on('click', function() {
  $('.stock-btn').removeClass('active');
  id = $(this).attr('id')
  $('#'+id).addClass('active');
  name_label = $(this).data('type');
  $('#title_name_label').text(name_label)
});

function init () {
  $('#stock').addClass('active');
}

init();