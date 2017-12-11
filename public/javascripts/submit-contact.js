function openEmail(){
  var fname = document.getElementById('fisrtname').value;
  var lname = document.getElementById('lastname').value;
  var email = document.getElementById('email').value;
  var phoneNumber = document.getElementById('phone').value;
  var comment = document.getElementById('message').value;
  var myEmail = "franklinchappell11@gmail.com";
  var str ='~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~';
  var newline = '%0D%0A';

  /*  To create new line in a string for mailto, use the encoding: %0D%OA or
      create a string variable that holds the string and use \n to make a new line.
      Then use mailto with: encodeURIComponent(ebody); */

  window.open('mailto:' + myEmail + '?subject=' + 'Website Mail' + '&body' + str + newline +
              'Name: ' + fname + ' ' + lname + newline + 'Phone: ' + phoneNumber + newline +
              'Email address: ' + email + newline +
              str + newline + 'Message: ' + comment);
  alert("Thank you for leaving us a message. We will respond as soon as possible.");
}
