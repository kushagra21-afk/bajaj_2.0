const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.post('/bfhl', (req, res) => {
    console.log('Received POST request:', req.body); 
    const { data } = req.body;
    if (!data || !Array.isArray(data)) {
        return res.status(400).json({ is_success: false, message: 'Invalid input' });
    }

    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));
    const highAlphabet = alphabets.length ? [alphabets.sort((a, b) => b.localeCompare(a, undefined, { sensitivity: 'base' }))[0]] : [];

    const response = {
        is_success: true,
        user_id: "KuahxD",  
        email: "kr2640@srmist.edu.in",  
        roll_number: "RA2111029010012", 
        numbers,
        alphabets,
        high_alphabet: highAlphabet
    };

    res.json(response);
});

app.get('/bfhl', (req, res) => {
    res.status(200).json({ operation_code: 1 });
});

app.listen(port, () => {
    console.log(`API is running on port ${port}`);
});