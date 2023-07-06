app.post('/contact', function (req, res) {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: '995',
    secure: true,
    auth: {
      user: 'sewstrait@gmail.com',
      pass: 'GoldBirdWoman15!',
    },
  });

  const mailOptions = {
    from: 'sewstrait@gmail.com',
    to: 'sewstrait@gmail.com',
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log('Error submitting form:', error);
      res.status(500).send('Error submitting form');
    } else {
      console.log('Form submitted successfully');
      res.send('Form submitted successfully');
    }
  });
});
