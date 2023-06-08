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

router.get('/ai-result/:record_no', (req, res) => {
    const record = req.params.record_no;
    db('patient_record_ai_results').select(['NO', 'YES', 'FEATURES'])
    .where('record_no', record)
    .returning()
    .then(data => {
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
        await db('patient_record_evaluation').select(['EVALUATION', 'eval_no'])
        .where('record_no', record)
        .returning()
        .then((data) => {
            resJSON.push(data)
            res.json(resJSON)
        })
    })
})

router.get('/features', (req, res)=> {
    var features = req.query['features'].split(',')
    var record = req.query['patient_record']
    db('patient_record').select(features).where('record_no', record)
    .returning()
    .then(data => {
        res.json(data)
    })
    .catch(err => console.log(err))
})
export default router