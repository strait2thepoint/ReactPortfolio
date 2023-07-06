const path = require('path');
const nodemailer = require('nodemailer');

module.exports = function (app) {
  // Serve the index.html file
  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
  });

  // Handle the contact form submission
  app.post('/contact', function (req, res) {
    // Extract the form data from the request body
    const { name, email, message } = req.body;

   // Create a transporter using SMTP
const transporter = nodemailer.createTransport({
    host: 'your-smtp-host',
    port: 'your-smtp-port',
    secure: true, // Set to true if using a secure connection (TLS/SSL)
    auth: {
      user: 'your-email',
      pass: 'your-email-password',
    },
  });
    // Redirect or send a response indicating success
    res.send('Form submitted successfully');
  });
};
