import path from "path";
import { fileURLToPath } from "url";
import CryptoJS from "crypto-js";
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const __root = __dirname.replace('\\local_modules', '')
dotenv.config({ path: path.join(__root, '.env') });

const JsonFormatter = {
    stringify: (cipherParams) => {
      // create json object with ciphertext
      var jsonObj = { ct: cipherParams.ciphertext.toString(CryptoJS.enc.Base64) }
      // optionally add iv or salt
      if (cipherParams.iv) {
        jsonObj.iv = cipherParams.iv.toString()
      }
      if (cipherParams.salt) {
        jsonObj.s = cipherParams.salt.toString()
      }
      // stringify json object
      return JSON.stringify(jsonObj)
    },
    parse: (jsonStr) => {
      // parse json string
      var jsonObj = JSON.parse(jsonStr)
      // extract ciphertext from json object, and create cipher params object
      var cipherParams = CryptoJS.lib.CipherParams.create({
        ciphertext: CryptoJS.enc.Base64.parse(jsonObj.ct)
      })
      // optionally extract iv or salt
      if (jsonObj.iv) {
        cipherParams.iv = CryptoJS.enc.Hex.parse(jsonObj.iv);
      }
      if (jsonObj.s) {
        cipherParams.salt = CryptoJS.enc.Hex.parse(jsonObj.s);
      }
      return cipherParams
    }
  }

const encrypt = (plaintext) => {
    var enc = CryptoJS.AES.encrypt(plaintext, process.env.KEY, {
        iv: process.env.IV,
        mode: CryptoJS.mode.CTRGladman,
        padding: CryptoJS.pad.Iso97971,
        format: JsonFormatter
    }).toString()
    return enc
}

const decrypt = (ciphertext) => {
    const dec = CryptoJS.AES.decrypt(JSON.stringify(ciphertext), process.env.KEY, {
        iv: process.env.IV,
        mode: CryptoJS.mode.CTRGladman,
        padding: CryptoJS.pad.Iso97971,
        format: JsonFormatter
    }).toString(CryptoJS.enc.Utf8)
    return dec
}

export {encrypt, decrypt}