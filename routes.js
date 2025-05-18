const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();
const port = process.env.PORT || 3000;

require('dotenv').config();

app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
})

app.post('/', async (req, res) => {
	const {title, from_email, to_email, message} = req.body;
    
    // Set up transporter (using Gmail in this example)
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.AUTH_USER,
            pass: process.env.AUTH_PASSWORD
        }
    });

    // Email options
    const mailOptions = {
        from: from_email,
        to: to_email,
        subject: title,
        text: message
    };

    // Send email
    try {
        await transporter.sendMail(mailOptions);
        res.send(`<h2>Thanks, your message has been sent!</h2>
            <script> 
                setTimeout(() => {
                    window.location.href = "/";
                }, 10000);
            </script>
        `);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error sending message. Try again later.");
    }

});

app.listen(port, (req, res) =>{
    console.log(`Server running on port ${port}`);
})