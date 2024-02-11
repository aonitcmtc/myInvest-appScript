// My_invest
// Example initialization
// var myModal = new bootstrap.Modal(document.getElementById('myModal'));
$(document).ready(function () {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const thaiMonths = [
    "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน",
    "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"
  ];

  function getAll() {
    var scriptURL = $('#myForm').attr('action');
    var url_searchName = scriptURL+"?ctrl=" + encodeURIComponent('getAll');
    
    // update checkuser9
    fetch(url_searchName)
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        // console.log(data.sheetAllData);
        var sheetAllData = JSON.parse(data.sheetAllData)
        // console.log(sheetAllData !== null && Object.keys(sheetAllData).length !== 0);
        if (sheetAllData !== null && Object.keys(sheetAllData).length !== 0) {
          create_data_table(sheetAllData);
        } else {
          $('#all_invest_loading').hide();
          $('#all_invest_no_content').show();
          // console.log("Object is either null or empty");
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
    // row_number = 0;
    for (const row in data) {
      // console.log(`Processing data for ${row}`);
      all_data = data[row];
      // console.log(all_data);

      const date = new Date(all_data[5]);
      // Extract day, month, and year from the Date object
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
      const year = date.getFullYear();
      // Construct the formatted date string
      // const formattedDateString = `${day}-${month}-${year}`;
      const formattedDateString = `${day} ${thaiMonths[parseInt(month-1)]} ${year+543}`;
      cls_color = 'text-danger'
      if (all_data[11] == 'user'){
        cls_color = 'text-success'
      }
      // row_number++;
      tbody = tbody+`<tr class="text-center text-secondary fw-bold">`;
      //start tr
      tbody = tbody+'<td>'+all_data[0]+'</td>' // row_number
      tbody = tbody+'<td>'+all_data[1]+'</td>' // วันที่สร้าง all_data[1]
      tbody = tbody+'<td>'+all_data[3]+'</td>' // ซื้อ
      tbody = tbody+'<td>'+all_data[4]+'</td>' // ขาย
      tbody = tbody+'<td>'+formattedDateString+'</td>' // จำนวน
      tbody = tbody+'<td>'+all_data[6]+'</td>' // ราคา
      tbody = tbody+'<td>'+all_data[7]+'</td>' // Broker
      tbody = tbody+'<td>'+all_data[8]+'</td>' // หมายเหตุ
      tbody = tbody+'<td>'+all_data[9]+'</td>' // symbol
      tbody = tbody+'<td>'+all_data[10]+'</td>' // symbol
      tbody = tbody+'<td><stong class="'+cls_color+'">'+all_data[11]+'</strong></td>' // symbol
      //end tr
      tbody = tbody+'</tr>'
    }

    $('#all_invest_loading').hide();
    // console.log('Show Table >>>');
    tableBody.append(tbody); // render Table
    // console.log(tbody)
  }

  // GetSheet
  getAll();
});
