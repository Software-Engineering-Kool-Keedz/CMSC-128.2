import { python } from "pythonia";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from 'dotenv';
import { encrypt } from "./secret.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const __root = __dirname.replace('\\local_modules', '')
const lr_model = '/py/initialize.py'
dotenv.config({ path: path.join(__root, '.env') });
    
const initialize = async (db) => {
    const py_file = path.join(__root, lr_model)
    const lr = await python(py_file)

    const uni = await lr.unique
    const uni_length = await lr.uni_length
    const len_list = await lr.len_list
    const xtr = await lr.xtr
    const xte = await lr.xte
    const ytr = await lr.ytr
    const yte = await lr.yte
    const xtr_len = await lr.xtr_len
    const xte_len = await lr.xte_len
    const ytr_len = await lr.ytr_len
    const yte_len = await lr.yte_len

     await db.schema.hasTable('conversions').then(async (e) => {
        if (!e) {
            await db.schema.createTable('conversions', (t) => {
                t.increments('conversion_code').primary().unique()
                t.integer('column_index')
                t.float('standard_value')
                t.string('common_value')
            })
            .then(async () => {
                for (let i = 0; i < uni_length; i++){
                    const j = await len_list[i]
                    for (let k = 0; k < j; k++){
                        const sv = await uni[i][0][k]
                        const cv = await uni[i][1][k]
                        await db('conversions').insert([{
                            column_index: i,
                            standard_value: sv,
                            common_value: cv
                        }])
                    }
                }
            })
            .then(console.log('conversions table created successfully'))
        }
        else {
            console.log('conversion table already exists')
        }
    })
    .then(async () => {
        await db.schema.hasTable('xtrain').then(async (e) =>{
            if(!e){
                await db.schema.createTable('xtrain', (t) => {
                    t.increments('xtrain_id').primary().unique()
                    t.float('AGERNG')
                    t.float('GENDER')
                    t.float('EDU')
                    t.float('PROF')
                    t.float('MARSTS')
                    t.float('RESDPL')
                    t.float('LIVWTH')
                    t.float('ENVSAT')
                    t.float('POSSAT')
                    t.float('FINSTR')
                    t.float('DEBT')
                    t.float('PHYEX')
                    t.float('SMOKE')
                    t.float('DRINK')
                    t.float('ILLNESS')
                    t.float('PREMED')
                    t.float('EATDIS')
                    t.float('AVGSLP')
                    t.float('INSOM')
                    t.float('TSSN')
                    t.float('WRKPRE')
                    t.float('ANXI')
                    t.float('DEPRI')
                    t.float('ABUSED')
                    t.float('CHEAT')
                    t.float('THREAT')
                    t.float('SUICIDE')
                    t.float('INFER')
                    t.float('CONFLICT')
                    t.float('LOST')
                })
                .then(async () => {
                    for(let i = 0; i < xtr_len; i++) {
                        const AGERNG = await xtr[i][0]
                        const GENDER = await xtr[i][1]
                        const EDU = await xtr[i][2]
                        const PROF = await xtr[i][3]
                        const MARSTS = await xtr[i][4]
                        const RESDPL = await xtr[i][5]
                        const LIVWTH = await xtr[i][6]
                        const ENVSAT = await xtr[i][7]
                        const POSSAT = await xtr[i][8]
                        const FINSTR = await xtr[i][9]
                        const DEBT = await xtr[i][10]
                        const PHYEX = await xtr[i][11]
                        const SMOKE = await xtr[i][12]
                        const DRINK = await xtr[i][13]
                        const ILLNESS = await xtr[i][14]
                        const PREMED = await xtr[i][15]
                        const EATDIS = await xtr[i][16]
                        const AVGSLP = await xtr[i][17]
                        const INSOM = await xtr[i][18]
                        const TSSN = await xtr[i][19]
                        const WRKPRE = await xtr[i][20]
                        const ANXI = await xtr[i][21]
                        const DEPRI = await xtr[i][22]
                        const ABUSED = await xtr[i][23]
                        const CHEAT = await xtr[i][24]
                        const THREAT = await xtr[i][25]
                        const SUICIDE = await xtr[i][26]
                        const INFER = await xtr[i][27]
                        const CONFLICT = await xtr[i][28]
                        const LOST = await xtr[i][29]
                        await db('xtrain').insert([{
                            AGERNG: AGERNG,
                            GENDER: GENDER,
                            EDU: EDU,
                            PROF: PROF,
                            MARSTS: MARSTS,
                            RESDPL: RESDPL,
                            LIVWTH: LIVWTH,
                            ENVSAT: ENVSAT,
                            POSSAT: POSSAT,
                            FINSTR: FINSTR,
                            DEBT: DEBT,
                            PHYEX: PHYEX,
                            SMOKE: SMOKE,
                            DRINK: DRINK,
                            ILLNESS: ILLNESS,
                            PREMED: PREMED,
                            EATDIS: EATDIS,
                            AVGSLP: AVGSLP,
                            INSOM: INSOM,
                            TSSN: TSSN,
                            WRKPRE: WRKPRE,
                            ANXI: ANXI,
                            DEPRI: DEPRI,
                            ABUSED: ABUSED,
                            CHEAT: CHEAT,
                            THREAT: THREAT,
                            SUICIDE: SUICIDE,
                            INFER: INFER,
                            CONFLICT: CONFLICT,
                            LOST: LOST
                        }])
                    }
                })
                .then(console.log('xtrain table created successfully'))
            }
            else {
                console.log('xtrain table already exists')
            }
        })
    })
    .then(async () => {
        await db.schema.hasTable('xtest').then(async (e) =>{
            if(!e){
                await db.schema.createTable('xtest', (t) => {
                    t.increments('xtest_id').primary().unique()
                    t.float('AGERNG')
                    t.float('GENDER')
                    t.float('EDU')
                    t.float('PROF')
                    t.float('MARSTS')
                    t.float('RESDPL')
                    t.float('LIVWTH')
                    t.float('ENVSAT')
                    t.float('POSSAT')
                    t.float('FINSTR')
                    t.float('DEBT')
                    t.float('PHYEX')
                    t.float('SMOKE')
                    t.float('DRINK')
                    t.float('ILLNESS')
                    t.float('PREMED')
                    t.float('EATDIS')
                    t.float('AVGSLP')
                    t.float('INSOM')
                    t.float('TSSN')
                    t.float('WRKPRE')
                    t.float('ANXI')
                    t.float('DEPRI')
                    t.float('ABUSED')
                    t.float('CHEAT')
                    t.float('THREAT')
                    t.float('SUICIDE')
                    t.float('INFER')
                    t.float('CONFLICT')
                    t.float('LOST')
                })
                .then(async () => {
                    for(let i = 0; i < xte_len; i++){
                        const AGERNG = await xte[i][0]
                        const GENDER = await xte[i][1]
                        const EDU = await xte[i][2]
                        const PROF = await xte[i][3]
                        const MARSTS = await xte[i][4]
                        const RESDPL = await xte[i][5]
                        const LIVWTH = await xte[i][6]
                        const ENVSAT = await xte[i][7]
                        const POSSAT = await xte[i][8]
                        const FINSTR = await xte[i][9]
                        const DEBT = await xte[i][10]
                        const PHYEX = await xte[i][11]
                        const SMOKE = await xte[i][12]
                        const DRINK = await xte[i][13]
                        const ILLNESS = await xte[i][14]
                        const PREMED = await xte[i][15]
                        const EATDIS = await xte[i][16]
                        const AVGSLP = await xte[i][17]
                        const INSOM = await xte[i][18]
                        const TSSN = await xte[i][19]
                        const WRKPRE = await xte[i][20]
                        const ANXI = await xte[i][21]
                        const DEPRI = await xte[i][22]
                        const ABUSED = await xte[i][23]
                        const CHEAT = await xte[i][24]
                        const THREAT = await xte[i][25]
                        const SUICIDE = await xte[i][26]
                        const INFER = await xte[i][27]
                        const CONFLICT = await xte[i][28]
                        const LOST = await xte[i][29]
                        await db('xtest').insert([{
                            AGERNG: AGERNG,
                            GENDER: GENDER,
                            EDU: EDU,
                            PROF: PROF,
                            MARSTS: MARSTS,
                            RESDPL: RESDPL,
                            LIVWTH: LIVWTH,
                            ENVSAT: ENVSAT,
                            POSSAT: POSSAT,
                            FINSTR: FINSTR,
                            DEBT: DEBT,
                            PHYEX: PHYEX,
                            SMOKE: SMOKE,
                            DRINK: DRINK,
                            ILLNESS: ILLNESS,
                            PREMED: PREMED,
                            EATDIS: EATDIS,
                            AVGSLP: AVGSLP,
                            INSOM: INSOM,
                            TSSN: TSSN,
                            WRKPRE: WRKPRE,
                            ANXI: ANXI,
                            DEPRI: DEPRI,
                            ABUSED: ABUSED,
                            CHEAT: CHEAT,
                            THREAT: THREAT,
                            SUICIDE: SUICIDE,
                            INFER: INFER,
                            CONFLICT: CONFLICT,
                            LOST: LOST
                        }])
                    }
                })
                .then(console.log('xtest table created successfully'))
            }
            else {
                console.log('xtest table already exists')
            }
        })
    })
    .then(async () => {
        await db.schema.hasTable('ytest').then(async (e) =>{
            if(!e){
                await db.schema.createTable('ytest', (t) => {
                    t.increments('ytest_id').primary().unique()
                    t.integer('DEPRESSED')
                })
                .then(async () => {
                    for(let i = 0; i < yte_len; i++) {
                        const val = await yte[i]
                        await db('ytest').insert([{
                            DEPRESSED: val
                        }])
                    }
                })
                .then(console.log('ytest table created successfully'))
            }
            else {
                console.log('ytest table already exists')
            }
        })
    })
    .then(async () => {
        await db.schema.hasTable('ytrain').then(async (e) =>{
            if(!e){
                await db.schema.createTable('ytrain', (t) => {
                    t.increments('ytrain_id').primary().unique()
                    t.integer('DEPRESSED')
                })
                .then(async () => {
                    for(let i = 0; i < ytr_len; i++) {
                        const val = await ytr[i]
                        await db('ytrain').insert([{
                            DEPRESSED: val
                        }])
                    }
                })
                .then(console.log('ytrain table created successfully'))
            }
            else {
                console.log('ytrain table already exists')
            }
        })
    })
    .then(async () => {
        await db.schema.hasTable('user').then(async (e) => {
            if(!e){
                await db.schema.createTable('user', (t) => {
                    t.increments('id').primary().unique()
                    t.string('username')
                    t.json('password')
                    t.string('role')
                })
                .then(console.log('user table created successfully'))
                .then(async () => {
                    await db('user').insert([{
                        username: 'admin',
                        password: encrypt(process.env.ADMIN_PASS),
                        role: 'administrator'
                    },
                    {
                        username: 'doctor',
                        password: encrypt(process.env.ENC_PASS),
                        role: 'doctor'
                    }])
                })
            }
            else {
                console.log('user table already exists')
            }
        })
    })
    .then(async () => {
        await db.schema.hasTable('patient_record').then(async (e) => {
            if(!e){
                await db.schema.createTable('patient_record', (t) => {
                    t.increments('record_no').primary().unique()
                    t.string('first_name')
                    t.string('last_name')
                    t.integer('encoder_id')
                    t.foreign('encoder_id').references('user.id')
                    t.string('AGERNG')
                    t.string('GENDER')
                    t.string('EDU')
                    t.string('PROF')
                    t.string('MARSTS')
                    t.string('RESDPL')
                    t.string('LIVWTH')
                    t.string('ENVSAT')
                    t.string('POSSAT')
                    t.string('FINSTR')
                    t.string('DEBT')
                    t.string('PHYEX')
                    t.string('SMOKE')
                    t.string('DRINK')
                    t.string('ILLNESS')
                    t.string('PREMED')
                    t.string('EATDIS')
                    t.string('AVGSLP')
                    t.string('INSOM')
                    t.string('TSSN')
                    t.string('WRKPRE')
                    t.string('ANXI')
                    t.string('DEPRI')
                    t.string('ABUSED')
                    t.string('CHEAT')
                    t.string('THREAT')
                    t.string('SUICIDE')
                    t.string('INFER')
                    t.string('CONFLICT')
                    t.string('LOST')
                    t.boolean('DEPRESSED')
                    t.timestamp('created_at').defaultTo(db.fn.now())
                })
                .then(console.log('patient record table created successfully'))
            }
            else {
                console.log('patient record table already exists')
            }
        })
    })
    .then(async () => {
        await db.schema.hasTable('patient_record_ai_results').then(async (e) => {
            if(!e){
                await db.schema.createTable('patient_record_ai_results', (t) => {
                    t.increments('ai_results_no').primary().unique()
                    t.integer('record_no')
                    t.foreign('record_no').references('patient_record.record_no')
                    t.float('NO')
                    t.float('YES')
                    t.string('FEATURES')
                })
                .then(console.log('patient record ai results created successfully'))
            }
            else {
                console.log('patient record ai results already exists')
            }
        })
    })
    .then(async () => {
        await db.schema.hasTable('patient_record_evaluation').then(async (e) => {
            if(!e){
                await db.schema.createTable('patient_record_evaluation', (t) => {
                    t.increments('eval_no').primary().unique()
                    t.integer('record_no')
                    t.foreign('record_no').references('patient_record.record_no')
                    t.boolean('EVALUATION')
                })
                .then(console.log('patient record evaluation created successfully'))
            }
            else {
                console.log('patient record evaluation already exists')
            }
        })
    })
    python.exit(); 
}

export default initialize