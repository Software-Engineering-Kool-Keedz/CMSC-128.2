// get routes
const express = require('express');
const db = require('../database/db');
const router = express.Router();

router.get('/hello', (req, res) => {
    res.send('Hello')
})

module.exports = router;