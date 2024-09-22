const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.get('/',(req, res)=>{
  res.send("Include /bfhl in the url");
})

app.post('/bfhl', (req, res) => {
    console.log('Received POST request:', req.body); 
    const { data } = req.body;
    if (!data || !Array.isArray(data)) {
        return res.status(400).json({ is_success: false, message: 'Invalid input' });
    }

    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));
    const lowercaseAlphabets=alphabes.filter(char=> char===char.tolowerCase());
    const highAlphabet = lowercaseAlphabets.length ? [alphabets.sort((a, b) => b.localeCompare(a, undefined, { sensitivity: 'base' }))[0]] : [];
    let file_valid=file_b64?true:false
    let file_mime_type=file_valid?"image/png":null;
    let file_size_kb=file_valid?"400":null;
    const response = {
        is_success: true,
        user_id: "KuahxD",  
        email: "kr2640@srmist.edu.in",  
        roll_number: "RA2111029010012", 
        numbers:numbers,
        alphabets:alphabets,
        high_alphabet: highAlphabet,
        file_valid: file_valid,
        file_mime_type: file_mime_type,
        file_size_kb: file_size_kb
        
    };

    res.json(response);
});

app.get('/bfhl', (req, res) => {
    res.status(200).json({ operation_code: 1 });
});

app.listen(port, () => {
    console.log(`API is running on port ${port}`);
});
