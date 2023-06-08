import { createRequire } from "module";
const require = createRequire(import.meta.url);
import db from '../../db/connection.mjs';

const express = require('express');
const router = express.Router();

router.delete('/user/:id', async (req, res) => {
    const userID = req.params.id;
    await db('user').where('id', userID).del()
    .then(() => {
        res.json([{'event': 'delete success'}])
    })
    .catch((err) => {
        res.json([{'event': 'delete fail'}])
    })
})

export default router