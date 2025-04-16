const express = require('express');
const twilio = require('twilio');
const app = express();
const PORT = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Example users (in a real app, store users in a database)
const users = [
    { phoneNumber: '+1234567890', name: 'John Doe' }, // Example phone number
];

// Twilio credentials (replace with your own)
const accountSid = 'your_account_sid';  // Twilio Account SID
const authToken = 'your_auth_token';    // Twilio Auth Token
const client = twilio(accountSid, authToken);

// Function to send OTP via SMS
function sendOTPSMS(phoneNumber, otp) {
    client.messages
        .create({
            body: `Your OTP code is: ${otp}`,
            from: 'your_twilio_number', // Twilio number
            to: phoneNumber, // The recipient's phone number
        })
        .then(message => console.log('OTP sent:', message.sid))
        .catch(error => console.log('Error sending OTP:', error));
}

// API to request OTP (for login)
app.post('/api/request-otp', (req, res) => {
    const { phoneNumber } = req.body;

    // Check if the phone number is valid
    const user = users.find(u => u.phoneNumber === phoneNumber);

    if (!user) {
        return res.status(404).send('User not found');
    }

    // Generate a random 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // Send OTP SMS
    sendOTPSMS(phoneNumber, otp);

    // Store OTP temporarily (in memory or a database) for later verification
    // In a real-world application, store OTP with an expiration time (e.g., 5 minutes)
    res.send('OTP sent to your phone number');
});

// API to verify OTP
let storedOTP = ''; // Store OTP temporarily in memory for verification

app.post('/api/verify-otp', (req, res) => {
    const { phoneNumber, otp } = req.body;

    if (otp === storedOTP) {
        return res.send('OTP verified successfully!');
    }

    return res.status(400).send('Invalid OTP');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

