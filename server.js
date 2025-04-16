const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static('public'));

// Route to serve login page
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// Handle login POST request
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Simple dummy login check
    if (username === 'admin' && password === '1234') {
        res.send('Login successful!');
    } else {
        res.send('Invalid credentials. Please try again.');
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

