import { createRequire } from "module";
const require = createRequire(import.meta.url);
import path from "path";
import { fileURLToPath } from "url";
import db from '../../db/connection.mjs'
import { decrypt } from "../../local_modules/secret.mjs";
import { python } from "pythonia";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const __root = __dirname.replace('\\api\\post', '')
const lr_model = '/py/explainer.py'

const express = require('express');
const router = express.Router();

router.post('/result', async (req, res) => {
    //GET INPUT
    const { AGERNG, GENDER, EDU, PROF, MARSTS,
    RESDPL, LIVWTH, ENVSAT, POSSAT, FINSTR,
    DEBT, PHYEX, SMOKE, DRINK, ILLNESS, PREMED,
    EATDIS, AVGSLP, INSOM, TSSN, WRKPRE, ANXI,
    DEPRI, ABUSED, CHEAT,THREAT, SUICIDE, INFER,
    CONFLICT, LOST } = req.body
    let copy_body = Object.assign({}, req.body)
    //CONVERT
    const cols = ["AGERNG", "GENDER", "EDU", "PROF", "MARSTS",
        "RESDPL", "LIVWTH", "ENVSAT", "POSSAT", "FINSTR",
        "DEBT", "PHYEX", "SMOKE", "DRINK", "ILLNESS", "PREMED",
        'EATDIS', "AVGSLP", "INSOM", "TSSN", "WRKPRE", "ANXI",
        "DEPRI", "ABUSED", "CHEAT","THREAT", "SUICIDE", "INFER",
        "CONFLICT", "LOST" ]
    let ctable = []
    let xtrain = []
    let ytrain = []
    let result = []
    await db('conversions').select('*')
    .then((tb) => {
        ctable = tb
    })
    .then(async () => {
        //console.log(ctable)
        //console.log(copy_body)

        // convert each value into standard value
        let idx = 0
        for (var key in copy_body){
            var value = copy_body[key]
            for (let i = 0; i < ctable.length; i++){
                if (ctable[i]['column_index'] == idx){
                    if (ctable[i]['common_value'] === value) copy_body[key] = ctable[i]['standard_value']
                }
            }
            idx++
        }
        //console.log(copy_body)
        //input copy body + x train + y train to explainer.py function
    })
    .then(async () => {
        await db('xtrain').select(cols)
        .then((tb) => {
            xtrain = tb
        })
        //console.log(xtrain)
    })
    .then(async () => {
        await db('ytrain').select(['DEPRESSED'])
        .then((tb) => {
            ytrain = tb
        })
        //console.log(ytrain)
    })
    .then(async () => {
        const py_file = path.join(__root, lr_model)
        const lr = await python(py_file)

        var resu = await lr.explainer(xtrain, ytrain, copy_body)
        result.push(resu)

        res.send(result)  
    })
    // then save the result to db
    // add name to result, add enc id to parameters

    // create separte table for real value
    // USE POSTMAN TO TEST
})

router.post('/login', (req, res) => {
    const { username, password } = req.body
    db('user')
    .select('username', 'password', 'role')
    .where({
        username: username
    })
    .then(data => {
        if (data.length > 0){
            data[0].password = decrypt(data[0].password)
            if (data[0].password === password) {
                res.json([{
                    event: 'login success',
                    username: data[0].username,
                    role: data[0].role
                }])
            }
            else res.json([{ event: 'incorrect password' }])
        }
        else res.json([{ event: 'user not found' }])
    })
})

export default router