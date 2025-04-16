require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');

const app = express();
app.use(bodyParser.json());

// Twilio client initialized using env variables
const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

// OTP route
app.post('/send-otp', (req, res) => {
    const phoneNumber = req.body.phoneNumber;
    const otp = Math.floor(100000 + Math.random() * 900000);

    client.messages
        .create({
            body: `Your OTP is: ${otp}`,
            from: process.env.TWILIO_PHONE_NUMBER,
            to: phoneNumber,
        })
        .then((message) => {
            res.status(200).json({ success: true, sid: message.sid });
        })
        .catch((err) => {
            res.status(500).json({ success: false, error: err.message });
        });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
