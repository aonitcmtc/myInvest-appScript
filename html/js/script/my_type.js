var local_name = '362049dad35d9cef427de57d206b8071'; //MyInvest
// mynavbar
var myNav = $("#mynavbar");

var nav_code = `<nav class="navbar navbar-expand-lg navbar-light">
                  <style>
                  .dropdown-item.active, .dropdown-item:active {
                    color: #fff;
                    text-decoration: none;
                    background-color: #263238;
                  }
                  </style>
                  <div class="col-12">
                    <div class="dropdown navbar-toggler" style="color: transparent; border-color: transparent;">
                      <div class="btn-group">
                        <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                          <i class="icon-Bar-Chart"></i>
                          <strong id="title_name_label" class="text-capitalize">stock</strong>
                        </button>
                        <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(-4px, 40px, 0px); top: 0px; left: 0px; will-change: transform;">
                          <a class="dropdown-item stock-btn" id="dd_stock" data-type="stock" href="#">หุ้น</a>
                          <a class="dropdown-item stock-btn" id="dd_fund" data-type="fund" href="#">กองทุนรวม</a>
                          <a class="dropdown-item stock-btn" id="dd_drx" data-type="drx" href="#">DRX</a>
                          <a class="dropdown-item stock-btn" id="dd_gold" data-type="gold" href="#">ทอง</a>
                          <a class="dropdown-item stock-btn" id="dd_forex" data-type="forex" href="#">Forex</a>
                          <a class="dropdown-item stock-btn" id="dd_crypto" data-type="crypto" href="#">Crypto Currency</a>
                        </div>
                      </div>
                    </div>
                    <div class="btn-group hidden-md-down p-0 px-3 m-0" role="group" aria-label="invest_group">
                      <button type="button" class="btn btn-secondary disabled">
                        <i class="icon-Bar-Chart"></i>
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