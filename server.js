// server.js

// imports
// use ES module if possible

// convert cjs imports to es module
import { createRequire } from "module";
const require = createRequire(import.meta.url);

// other imports
import path from "path";
import { fileURLToPath } from "url";
import dotenv from 'dotenv';

// main directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// environment variable
dotenv.config({ path: path.join(__dirname, '.env') });

// cjs imports
const express = require("express");
const bodyParser = require('body-parser');

// database configuration
import db from './db/connection.mjs'

// import initialize function
import initialize from './local_modules/initialize.mjs'

await initialize(db)

// import api
import pages from './api/get/pages.mjs'
import post_req from './api/post/request.mjs'

const app = express()

let initialPath = path.join(__dirname);

app.use(bodyParser.json());
app.use(express.static(initialPath));
app.use('', pages)
app.use('/request', post_req)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

/*Main problems: 
how to convert the each of the values into valid input to explainable ai
    - probable solution: check how the values gets converted before the test split
        - approach 1: get the conversion from non-standard to standard at first run. store this conversion at the database
            - consequence of approach: need to separate functions: one for pre processing, and one for explainable ai stuff
                - pre processing function need to be run only once, at the start of the process
                    - connect to database then save the database for easier access
                    - get the conversions, extract each column except last into array, use numpy unique, store the conversion pair to db 
                - 2nd function contains lr, lr fit until explainable ai stuff
how to edit the output of the explainable ai
    - probable solution: check how the output is made
*/