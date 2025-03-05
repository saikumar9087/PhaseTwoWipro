const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./routes/routes');
const app = express();
const port = 8000;

app.use(cors()); // Enable CORS
app.use(bodyParser.json());
app.use('/api', router);

app.listen(port, () => {
    console.log(`Service is ready & listening at port no ${port}`);
});

