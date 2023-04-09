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

export default router