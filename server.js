const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// In-memory database substitute
let users = {};

// Serve the registration page
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'registration.html'));
});

// Handle registration
app.post('/register', (req, res) => {
    const { name, email, phone, password, dob, address, membershipPlan } = req.body;
    users[email] = { name, phone, password, dob, address, membershipPlan };

    // Send email (example, modify as needed)
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your-email@gmail.com', // Replace with your email
            pass: 'your-email-password'    // Replace with your email password
        }
    });

    const mailOptions = {
        from: 'your-email@gmail.com',
        to: email,
        subject: 'Registration Successful',
        text: 'Thank you for registering. You can now log in with your credentials.'
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error sending email:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });

    res.redirect('/login');
});

// Serve the login page
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// Handle login
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (users[email] && users[email].password === password) {
        res.redirect('/home');
    } else {
        res.send('Invalid credentials');
    }
});

// Serve the home page
app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
