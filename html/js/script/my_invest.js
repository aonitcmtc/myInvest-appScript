// My_invest
// Example initialization
// var myModal = new bootstrap.Modal(document.getElementById('myModal'));

$(document).ready(function () {
  $("#add_invest").click(function(){
    is_type = $('.stock-btn.active').data('type');
    $('#myModal').modal('show');
    $('#is_type').val(is_type)
    $('#title_modal').text(is_type)
    $('#buy_order').trigger("click");
  });

  $(".btn-close").click(function(){
    $('#myModal').hide()
  });

  $('.stock-btn').on('click', function() {
    name_label = $(this).data('type');
    $('#card_title_sheet').text(name_label);
  });

  
  $("#buy_order").click(function(){
    $('#sell_form').hide();
    $('#buy_form').show();
  });

  $("#sell_order").click(function(){
    $('#buy_form').hide();
    $('#sell_form').show();
  });

  $("#update_data").click(function(){
    // Update Sheet
    const scriptURL = $('#myForm').attr('action');
    const form = document.forms['myForm']
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { 
        method: 'POST',
        mode: 'no-cors',
        body: new URLSearchParams(new FormData(form)),
      })
      .then(response => {
        alert("บันทึกข้อมูลเรียบร้อยแล้ว..")
        location.reload();
      })
      .catch(error => console.error('Error!', error.message))
    })
    // Update Sheet
  });

  function getAll() {
    var scriptURL = $('#myForm').attr('action');
    var url_searchName = scriptURL+"?ctrl=" + encodeURIComponent('getAll');
    
    getData(url_searchName);
  }

  function getSheetDataByDate() {
    var scriptURL = $('#myForm').attr('action');
    var url_searchName = scriptURL+"?ctrl=" + encodeURIComponent('getSheetDataByDate');
    
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
        if (i == 1){
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
  getSheetDataByDate();
  
});
