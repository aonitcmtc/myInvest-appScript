// My_invest
// Example initialization
// var myModal = new bootstrap.Modal(document.getElementById('myModal'));

$(document).ready(function () {
  $("#add_invest").click(function(){
    is_type = $('.stock-btn.active').data('type');
    // alert(is_type);
    // is_type
    $('#myModal').show()
    $('#is_type').val(is_type)
    // alert(is_type)
    $('.modal-title').text(is_type)
  });

  $(".btn-close").click(function(){
    $('#myModal').hide()
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
        headers: {
            'Content-Type': 'application/json'
        }
        })
        .then(response => {
          alert("บันทึกข้อมูลเรียบร้อยแล้ว..")
          location.reload();
        })
        .catch(error => console.error('Error!', error.message))
    })
    // Update Sheet
  });
  
});
