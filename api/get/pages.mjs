import { createRequire } from "module";
const require = createRequire(import.meta.url);
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const __root = __dirname.replace('\\api\\get', '')

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(__root, '/view/home.html'))
})

router.get('/form', (req, res) => {
    res.sendFile(path.join(__root, '/view/form.html'))
})

router.get('/result', (req, res) => {
    res.sendFile(path.join(__root, '/view/explainableAI.html'))
})

router.get('/search', (req, res) => {
    res.sendFile(path.join(__root, '/view/search.html'))
})

router.get('/users', (req, res) => {
    res.sendFile(path.join(__root, '/view/user.html'))
})

router.get('/login', (req, res) => {
    res.sendFile(path.join(__root, '/view/login.html'))
})

export default router