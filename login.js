// My_Login Page
$(document).ready(function () {
  update_status = true;
  // Update Sheet
  $("#update_data").click(function(){
    //One Click Update
    if (update_status) {
      update_status = false
    }else{
      return false;
    }
    //One Click Update
    const scriptURL = $('#FormLogin').attr('action');
    const form = document.forms['FormLogin']
    form.addEventListener('submit', e => {
      e.preventDefault()
      // valid_form
      if ($('input[name=username]').val() == '' || $('input[name=username]').val() == undefined) {
        return false
      }

      if ($('input[name=password]').val() == '' || $('input[name=password]').val() == undefined) {
        return false
      }
      // console.log(form);
      // fetch(scriptURL, { 
      fetch(scriptURL + '?' + new URLSearchParams(new FormData(form)), {
        method: 'GET',
        mode: 'no-cors',
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
        })
        .catch(error => {
          console.error('Error!', error.message);
        });
    })
    // $('.submit-form-spin').hide();
  });
  // Update Sheet
});
