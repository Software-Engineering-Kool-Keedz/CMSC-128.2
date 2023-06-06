import { createRequire } from "module";
const require = createRequire(import.meta.url);
import db from '../../db/connection.mjs';

const express = require('express');
const router = express.Router();

router.put('/evaluation', (req, res) => {
    const {record_no, EVALUATION} = req.body
    db('patient_record_evaluation')
    .where({record_no: record_no})
    .update({
        EVALUATION: EVALUATION
    })
    .then(() => {
        res.json({event: 'success'})
    })
    .catch((err) => {
        res.json({event: 'error'})
    })
})

export default router