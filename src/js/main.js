$(document).ready(function() {
  $("#send_message").click(function(e) {
    //Stop form submission & check the validation
    e.preventDefault();

    // Variable declaration
    var error = false;
    var name = $("#name").val();
    var email = $("#email").val();
    var phone = $("#phone").val();

    // Form field validation
    if (name.length == 0) {
      var error = true;
      $("#name_error").fadeIn(500);
    } else {
      $("#name_error").fadeOut(500);
    }
    if (email.length == 0 || email.indexOf("@") == "-1") {
      var error = true;
      $("#email_error").fadeIn(500);
    } else {
      $("#email_error").fadeOut(500);
    }
    if (phone.length == 0) {
      var error = true;
      $("#phone_error").fadeIn(500);
    } else {
      $("#phone_error").fadeOut(500);
    }

    // If there is no validation error, next to process the mail function
    if (error == false) {
      // Disable submit button just after the form processed 1st time successfully.
      $("#send_message").attr({ disabled: "true", value: "Enviando..." });

      /* Post Ajax function of jQuery to get all the data from the submission of the form as soon as the form sends the values to email.php*/
      $.post("../send.php", $("#formHeader").serialize(), function(result) {
        //Check the result set from email.php file.
        if (result == "sent") {
          //If the email is sent successfully, remove the submit button
          $("#send_message").remove();
          //Display the success message
          $("#mail_success").fadeIn(500);
        } else {
          //Display the error message
          $("#mail_fail").fadeIn(500);
        }
      });
    }
  });
  $("#send_message_footer").click(function(e) {
    //Stop form submission & check the validation
    e.preventDefault();

    // Variable declaration
    var error = false;
    var name = $("#name_footer").val();
    var email = $("#email_footer").val();
    var phone = $("#phone_footer").val();

    // Form field validation
    if (name.length == 0) {
      var error = true;
      $("#name_error_footer").fadeIn(500);
    } else {
      $("#name_error_footer").fadeOut(500);
    }
    if (email.length == 0 || email.indexOf("@") == "-1") {
      var error = true;
      $("#email_error_footer").fadeIn(500);
    } else {
      $("#email_error_footer").fadeOut(500);
    }
    if (phone.length == 0) {
      var error = true;
      $("#phone_error_footer").fadeIn(500);
    } else {
      $("#phone_error_footer").fadeOut(500);
    }

    // If there is no validation error, next to process the mail function
    if (error == false) {
      // Disable submit button just after the form processed 1st time successfully.
      $("#send_message_footer").attr({
        disabled: "true",
        value: "Enviando..."
      });

      /* Post Ajax function of jQuery to get all the data from the submission of the form as soon as the form sends the values to email.php*/
      $.post("../send.php", $("#formFooter").serialize(), function(result) {
        //Check the result set from email.php file.
        if (result == "sent") {
          //If the email is sent successfully, remove the submit button
          $("#send_message_footer").remove();
          //Display the success message
          $("#mail_success_footer").fadeIn(500);
        } else {
          //Display the error message
          $("#mail_fail_footer").fadeIn(500);
        }
      });
    }
  });
});
AOS.init();
