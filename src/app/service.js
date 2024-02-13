const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
 
const app = express();
const port = 3000;
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
 
app.post('/submit-leave', (req, res) => {
  const formData = req.body;
 
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'abc@gmail.com',
      pass: 'your password',
    },
  });
 
  const mailOptions = {
    from: 'your_email@gmail.com',
    to: 'abc@gmail.com',
    subject: 'Leave Application',
    html: `<p>Employee ID: ${formData.employeeId}</p>
           <p>Leave Type: ${formData.leavetype}</p>
           <p>Date: ${formData.from}</p>
           <p>Team Email ID: ${formData.to}</p>
           <p>Reason for leave: ${formData.reason}</p>`,
  };
 
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Form submitted successfully');
  });
});
 
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
 