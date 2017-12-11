var express = require('express');
var nodemailer = require('nodemailer');
var router = express.Router();

/* Get Contact form page */
router.get('/', function(req, res, next){
  res.render('contact',{title: 'Contact Us'});
});

// Send email
router.post('/', (req, res)=>{
  const output= `
    <h3> Contact Details:</h3>
    <ul>
      <li> <strong>Name:</strong> ${req.body.firstname} ${req.body.lastname}</li>
      <li> <strong>Email:</strong> ${req.body.email} </li>
      <li> <strong>Phone:</strong> ${req.body.phone} </li>
    </ul>
    <h3> Message: </h3>
    <p> ${req.body.message} </p>
  `;
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    //I set up a fake email address for this implementation.
    //Don't expect to find anything usefull here.
    auth:{
      user: 'oregonfanboy@gmail.com',
      pass: 'Pirates1'
    },
    //allows use to send mail when using local host.
    tls:{
      rejectUnauthorized:false
    }
  });

  let mailOptions={
    from: 'E.B. Woodcraft',
    to: 'oregonfanboy@gmail.com',
    subject: 'E.B.Woodcraft Contact Request', //Subject line
    text: 'Hello world?', //plain text body
    html: output
  };

  transporter.sendMail(mailOptions, (error, info)=> {
    if(error){
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    //Render a view template that displays a message to the user that their email was sent.
    res.render('sentmail', {title: 'Sent'});

  });


});



module.exports = router;
