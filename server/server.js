// entry point
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors')

const db = require('./database/db-config');

const pages = require('./routes/page-routes');

require('dotenv').config();

const corsOptions = { origin:'*'};

const app = express();

let initialPath = path.join(__dirname);

app.use(cors(corsOptions))
app.use(bodyParser.json());
app.use(express.static(initialPath));
app.use('', pages); //will possibly not use/will be server exclusive only


const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})