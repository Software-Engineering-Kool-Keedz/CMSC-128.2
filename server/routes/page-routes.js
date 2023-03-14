// page routes
const express = require('express');
const path = require('path');
const router = express.Router();

let initialPath = path.join(__dirname);

router.get('/', (req, res) => {
    res.send('Hi')
})

module.exports = router;