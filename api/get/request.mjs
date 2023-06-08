import { createRequire } from "module";
const require = createRequire(import.meta.url);
import db from '../../db/connection.mjs';

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

router.get('/users', (req, res) => {
    db('user').select(['id', 'username', 'role'])
    .returning()
    .then((data) => {
        res.json(data);
    })
})

router.get('/record/:record_no', async (req, res) => {
    const record = req.params.record_no;
    var resJSON = []
    await db('patient_record').select()
    .where('record_no', record)
    .returning()
    .then((data) => {
        resJSON.push(data)
    })
    .then(async () => {
        await db('patient_record_evaluation').select(['EVALUATION'])
        .where('record_no', record)
        .returning()
        .then((data) => {
            resJSON.push(data)
            res.json(resJSON)
        })
    })
})
export default router