// Importing required modules
const express = require('express');
const bodyParser = require('body-parser');

// Create an Express app
const app = express();

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// POST endpoint to calculate Simple Interest
app.post('/calculate-interest', (req, res) => {
    const { principal, rate, time } = req.body;

    // Validate the input
    if (!principal || !rate || !time) {
        return res.status(400).json({
            error: 'Please provide principal, rate, and time values',
        });
    }

    // Calculate Simple Interest
    const simpleInterest = (principal * rate * time) / 100;

    // Send response
    res.json({
        principal,
        rate,
        time,
        simpleInterest,
    });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
