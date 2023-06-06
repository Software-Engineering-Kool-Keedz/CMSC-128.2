import { createRequire } from "module";
const require = createRequire(import.meta.url);

const express = require('express');
const router = express.Router();

//search
router.get('/patient_record', (req, res) => {
    db('patient_record').select(['patient_record.first_name', 'patient_record.last_name', 'patient_record.record_no'])
    .where((builder) => {
        if(req.query['patient_record.first_name'] && req.query['patient_record.last_name']){
             builder.whereILike('patient_record.first_name', `${req.query['patient_record.first_name']}%`)
             .andWhereILike('patient_record.last_name', `${req.query['patient_record.last_name']}%`);
        }
        else if(req.query['patient_record.last_name']) builder.whereILike('patient_record.last_name', `${req.query['patient_record.last_name']}%`);
        else if(req.query['patient_record.first_name']) builder.whereILike('patient_record.first_name', `${req.query['patient_record.first_name']}%`);
    })
    .orderBy('patient_record.created_at', 'asc')
    .returning()
    .then((data) => {
        res.json(data);
    })
})