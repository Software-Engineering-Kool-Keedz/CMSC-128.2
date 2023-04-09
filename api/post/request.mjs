import { createRequire } from "module";
const require = createRequire(import.meta.url);
import path from "path";
import { fileURLToPath } from "url";
import db from '../../db/connection.mjs'
import { decrypt } from "../../local_modules/secret.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const __root = __dirname.replace('\\api\\post', '')

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
    let ctable = []
    await db('conversions').select('*')
    .then((tb) => {
        ctable = tb
    })
    .then(async() => {
        console.log(copy_body)

        // convert each value into standard value
        res.send(200)
    })
    //USE AS INPUT
    //RETURN 

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