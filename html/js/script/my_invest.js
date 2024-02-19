// My_invest
// Example initialization
// var myModal = new bootstrap.Modal(document.getElementById('myModal'));

$(document).ready(function () {

  // console.log("My Invest JWT:", decodedPayload['email']);
  $('#mysheet').val(decodedPayload['email']);

  $("#add_invest").click(function(){
    var is_type = $('.stock-btn.active').data('type');
    // Update other modal content and properties
    $('#title_modal').text(is_type);
    $('#is_type').val(is_type);

    $('#myModal').modal('show');
    // render Modal
    setTimeout(function() {
      // Code to be executed after 500 milliseconds
      $("#buy_order").addClass('active');
      // $("#buy_order").click();
    }, 100);
  });

  $(".btn-close").click(function(){
    $('#myModal').hide()
  });
 
  $('.stock-btn').on('click', function() {
    name_label = $(this).data('type');
    $('#card_title_sheet').text(name_label);
    tableBody = $("table tbody tr").hide();
    if (name_label == 'all') {
      getSheetDataByDate();
    }else{
      getSheetByGroup(name_label);
    }
  });

  
  $("#buy_order").click(function(){
    $('#sell_form').hide();
    $('#buy_form').show();
  });

  $("#sell_order").click(function(){
    $('#buy_form').hide();
    $('#sell_form').show();
    $("#buy_order").removeClass('active');
  });

  function calc_amount_price(price, unit_buy, unit_sell) {
    if (price > 0 && (unit_buy > 0 || unit_sell > 0)) {
      if ($('#sell_form').is(':visible')) {
        amount = price * unit_sell
        $('#unit').val(amount);
      }

      if ($('#buy_form').is(':visible')) {
        amount = price * unit_buy
        $('#unit').val(amount);
      }
    }
  }

  $("#price").change(function(){
    price = $(this).val();
    unit_buy = $('#unit_buy').val();
    unit_sell = $('#unit_sell').val();
    calc_amount_price(price, unit_buy, unit_sell)
  });

  $("#unit_buy").change(function(){
    price = $('#price').val();
    unit_buy = $(this).val();
    unit_sell = 0;
    $('#buy').val(unit_buy);
    calc_amount_price(price, unit_buy, unit_sell)
  });

  $("#unit_sell").change(function(){
    price = $('#price').val();
    unit_buy = 0;
    unit_sell = $(this).val();
    $('#sell').val(unit_sell);
    calc_amount_price(price, unit_buy, unit_sell)
  });

  $("input[name=date]").change(function(){
    $('.invalid-js-custom').hide(); // valid
  });

  update_status = true;
  $("#update_data").click(function(){
    //One Click Update
    if (update_status) {
      update_status = false
    }else{
      return false;
    }
    // Update Sheet
    const scriptURL = $('#myForm').attr('action');
    const form = document.forms['myForm']
    form.addEventListener('submit', e => {
      e.preventDefault()

      // valid_form
      if ($('input[name=date]').val() == '' || $('input[name=date]').val() == undefined) {
        $('.invalid-js-custom').show();
        return false
      }

      if ($('input[name=symbol]').val() == '' || $('input[name=symbol]').val() == undefined) {
        return false
      }

      if ($('input[name=price]').val() == '' || $('input[name=price]').val() == undefined) {
        return false
      }

      if (!$('input[name=unit_buy]:hidden').length > 0 && ($('input[name=unit_buy]').val() == '' || $('input[name=unit_buy]').val() == undefined)) {
        return false
      }

      if (!$('input[name=unit_sell]:hidden').length > 0 && ($('input[name=unit_sell]').val() == '' || $('input[name=unit_sell]').val() == undefined)) {
        return false
      }

      if ($('input[name=unit]').val() == '' || $('input[name=unit]').val() == undefined) {
        return false
      }
      // valid_form
      $('#update_data').addClass('disabled');
      $('.submit-form-spin').show();

      fetch(scriptURL, { 
        method: 'POST',
        mode: 'no-cors',
        body: new URLSearchParams(new FormData(form)),
      })
      .then(response => {
        // alert("บันทึกข้อมูลเรียบร้อยแล้ว..")
        Swal.fire({
          title: "Successfully!",
          showConfirmButton: false,
          type: "success",  // Correct the parameter name here
          timer: 1500
        });
        setTimeout(function() {
          location.reload();
        }, 1500);
      })
      .catch(error => console.error('Error!', error.message))
    })
    $('.submit-form-spin').hide();
    // Update Sheet
  });

  function getAll() {
    var scriptURL = $('#myForm').attr('action');
    var url_searchName = scriptURL+"?ctrl=" + encodeURIComponent('getAll');
    
    getData(url_searchName);
  }

  function getSheetDataByDate() {
    $('#all_invest_loading').show();

    var scriptURL = $('#myForm').attr('action');
    var url_searchName = scriptURL+"?ctrl=" + encodeURIComponent('getSheetDataByDate') + "&mysheet=" + encodeURIComponent(decodedPayload['email']);
    
    // update checkuser9
    fetch(url_searchName)
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        var sheetAllData = JSON.parse(data.sheetAllData)
        // console.log(sheetAllData !== null && Object.keys(sheetAllData).length !== 0);
        if (sheetAllData !== null && Object.keys(sheetAllData).length !== 0) {
          create_data_table(sheetAllData);
        } else {
          $('#all_invest_loading').hide();
          $('#all_invest_no_content').show();
          console.log("Object is either null or empty");
        }
      })
      .catch(error => {
        console.error('Error!', error.message);
      });
  }

  function getSheetByGroup(label) {
    $('#all_invest_loading').show();

    var scriptURL = $('#myForm').attr('action');
    var url_searchName = scriptURL+"?ctrl=" + encodeURIComponent('getSheetByGroup');
        url_searchName = url_searchName + "&mysheet=" + encodeURIComponent(decodedPayload['email']) + "&type=" + encodeURIComponent(label);
    // update checkuser9
    fetch(url_searchName)
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        var sheetAllData = JSON.parse(data.sheetAllData)
        // console.log(sheetAllData !== null && Object.keys(sheetAllData).length !== 0);
        if (sheetAllData !== null && Object.keys(sheetAllData).length !== 0) {
          create_data_table(sheetAllData);
        } else {
          $('#all_invest_loading').hide();
          $('#all_invest_no_content').show();
          console.log("Object is either null or empty");
        }
      })
      .catch(error => {
        console.error('Error!', error.message);
        $('#all_invest_loading').hide();
      });
  }

  function create_data_table(data) {
    console.log('Show Data >>>');
    all_data = []

    tableBody = $("table tbody");
    tbody = '';
    row_number = 0;
    for (const date in data) {
      // console.log(`Processing data for ${date}`);
      all_data = data[date];
      // console.log(all_data);
      for (var i = 0; i < all_data.length; i++ ) {
        console.log(all_data[i][1]);
        // const options = { year: 'numeric', month: 'long', day: 'numeric', locale: 'th-TH' };
        // const get_create_at = new Date(data[i][1]); // create_at
        // const create_at = get_create_at.toLocaleDateString('th-TH', options);

        // const get_birthdate = new Date(data[i][7]); // birthdate
        //       get_birthdate.setFullYear(get_birthdate.getFullYear() - 543);
        // const birthdate = get_birthdate.toLocaleDateString('th-TH', options);

        tr_color = 'table-success';
        if (all_data[i][4] > 0){
          tr_color = 'table-danger';
        }

        row_number++;
        tbody = tbody+`<tr class="text-center text-secondary fw-bold ${tr_color}">`;
        //start tr
        tbody = tbody+'<td>'+row_number+'</td>' // row_number
        tbody = tbody+'<td>'+date+'</td>' // วันที่สร้าง all_data[i][1]
        tbody = tbody+'<td>'+all_data[i][2]+'</td>' // symbol
        tbody = tbody+'<td>'+all_data[i][3]+'</td>' // ซื้อ
        tbody = tbody+'<td>'+all_data[i][4]+'</td>' // ขาย
        tbody = tbody+'<td>'+all_data[i][5]+'</td>' // จำนวน
        tbody = tbody+'<td>'+all_data[i][6]+'</td>' // ราคา
        tbody = tbody+'<td>'+all_data[i][7]+'</td>' // Broker
        tbody = tbody+'<td>'+all_data[i][8]+'</td>' // หมายเหตุ
        //end tr
        tbody = tbody+'</tr>'
      }
    }

    $('#all_invest_loading').hide();
    $('#select_invest_loading').hide();
    // console.log('Show Table >>>');
    tableBody.append(tbody); // render Table
    // console.log(tbody)

    // setTimeout(function() {
      // $("#all_invest").DataTable({
      //   responsive: true,
      // });
    // }, 300);
  }

  function getData(url_controller) {
    fetch(url_controller)
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error('Error!', error.message);
      });
  }

  // GetSheet
  // getAll();
  // getSheetDataByDate();
  getSheetByGroup('stock');
  
});
