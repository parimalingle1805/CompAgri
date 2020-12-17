"use strict";

//CREDENTIALS
var credentials = {
  "parimal.ingle18@gmail.com": "lumia430"
}; //FAQ discussion modal toggle and popover

$('#exampleModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget);
  var recipient = button.data('whatever'); // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.

  var modal = $(this);
  modal.find('.modal-title').text('New message to ' + recipient);
  modal.find('.modal-body input').val(recipient);
});
$(document).ready(function () {
  $('[data-toggle="popover"]').popover();
}); //login page

function ValidateEmail(inputText) {
  var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (inputText.value.match(mailformat)) {
    document.getElementById('e_mail').setAttribute("style", "color:green");
    document.form1.u_name.focus();
    f = 1;
    return true;
  } else {
    alert("You have entered an invalid email address!");
    document.form1.u_name.focus();
    f = 0;
    return false;
  }
}