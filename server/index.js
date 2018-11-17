const express = require('express');
const app = express();
const port = 4000;

app.get('/', (request, response) => {
    response.status(200);
    response.send('Yayyyyy!!!! It works');
});

app.listen(port, () => {
    console.log(`Now listening on port: ${port}`);
})