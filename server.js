const express = require('express');
const app = express();
const PORT = 3000;

// Serve static files from the "public" folder
app.use(express.static('public'));

// Sample hotel data
const hotels = [
    { id: 1, name: "Hotel A", location: "New York", cuisine: "Italian", rating: 4.5 },
    { id: 2, name: "Hotel B", location: "Los Angeles", cuisine: "Mexican", rating: 4.2 },
    { id: 3, name: "Hotel C", location: "Chicago", cuisine: "Indian", rating: 4.7 },
];

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to the Hotel Finder API!');
});

// API to get all hotels
app.get('/api/hotels', (req, res) => {
    res.json(hotels);
});

// API to get hotels by location
app.get('/api/hotels/location', (req, res) => {
    const location = req.query.location;
    const filteredHotels = hotels.filter(hotel => 
        hotel.location.toLowerCase().includes(location.toLowerCase())
    );
    res.json(filteredHotels);
});

// 404 Handler (must be at the end, after all other routes)
app.use((req, res) => {
    res.status(404).send('Page not found!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
