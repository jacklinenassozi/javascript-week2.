function validateEmail(email) {
    return email.includes('@') && email.length > 4 &&  email.includes('.');
   }
   
   function validateTextInput(inputname) {
    return inputname.length > 1;
   }
   
   $('button').click(function(event) {
    let email = $('#email').val();
    let subject = $('#subject').val();
    let message = $('#message').val();
    if (validateEmail(email) && validateTextInput(subject) && validateTextInput(message)) {
      alert('Inputs are valid!');
      $(".statusmessage").replaceWith('<p class="statusmessage">Inputs are all valid!</p>');
    } else {
      event.preventDefault();
      alert('Inputs are invalid');
    }
   });