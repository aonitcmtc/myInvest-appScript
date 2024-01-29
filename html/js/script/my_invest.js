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
    $('.modal-title').text(is_type)
  });

  $(".btn-close").click(function(){
    $('#myModal').hide()
  });

  // $("#update_data").click(function(){
  //   let form = $("#myForm");
  //   let url = form.attr('action');
  //   let formData = form.serialize();
  //   $.ajax({
  //       type: "POST",
  //       url: url,
  //       data: JSON.stringify(formData),
  //       success: function(data) {
  //         alert("Form Submited Successfully");
  //       },
  //       error: function(data) {
  //         alert("some Error");
  //       }
  //   });
    // submitForm();
  // });

  $("#update_data").click(function (event) {
    event.preventDefault();

    var formData = $("#myForm").serialize();
    var url = $("#myForm").attr('action');
    $.ajax({
      type: "POST",
      url: url,
      data: formData,
      dataType: "json",
      encode: true,
    }).done(function (data) {
      console.log(data);
    });
    
  });
  
});
