
const express = require('express');


const app = express();
const PORT = 3000; 



app.use(express.json());


app.post('/validate-email', (req, res) => {
    const { email } = req.body;
    if (!email) {
        return res.status(400).json({ 
            message: "Полето 'email' е задолжително во телото на барањето." 
        });
    }
    
   
    const emailRegex = /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}$/;

    const isValid = emailRegex.test(email);

    if (isValid) {
        res.status(200).json({
            message: "Е-маил адресата е валидна!",
            email: email,
            status: "valid"
        });
    } else {
        
        res.status(200).json({ 
            message: "Е-маил адресата НЕ Е валидна!",
            email: email,
            status: "invalid"
        });
    }
});


app.listen(PORT, () => {
    console.log(`Серверот е активен на http://localhost:${PORT}`);
});