const express = require('express');
const dotenv = require('dotenv');
const app = express();
dotenv.config({ path: __dirname +'/.env'}); //this reads varibales in .env file and
                // adds them to process
const port = process.env.PORT || 4000;
const apiKey = process.env.API_KEY;

app.get('/', (request, response) => {
    response.status(200);
    response.send('Yayyyyy!!!! It works');
});

app.get('/forecast/coords/:lat,:lon', (req, res) => {
    const { lat, lon } = req.params;
    res.status(200);
    res.json({
        lat: lat,
        lon: lon
    });
});

app.listen(port, () => {
    console.log(`Now listening on port: ${port}`);
})