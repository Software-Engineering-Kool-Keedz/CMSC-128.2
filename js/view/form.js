const firstname = document.querySelector('#first-name');
const lastname = document.querySelector('#last-name');

const AGERNG = document.querySelector('#AGERNG');
/*const GENDER = document.querySelector('.GENDER') ;*/
const EDU = document.querySelector('#EDU');
const PROF = document.querySelector('#PROF');
const MARSTS = document.querySelector('#MARSTS');
const RESDPL = document.querySelector('#RESDPL');
const PHYEX = document.querySelector('#PHEX') ;
const TSSN = document.querySelector('#TSSN');
/*
const LIVWTH = document.querySelector('.LIVWTH');
const ENVSAT = document.querySelector('.ENVSAT');
const POSSAT = document.querySelector('.POSSAT');
const FINSTR = document.querySelector('.FINSTR');
const DEBT = document.querySelector('.DEBT');
const SMOKE = document.querySelector('.SMOKE');
const DRINK = document.querySelector('.DRINK');
const ILLNESS = document.querySelector('.ILLNESS');
const PREMED = document.querySelector('.PREMED');
const EATDIS = document.querySelector('.EATDIS');
const AVGSLP = document.querySelector('.AVGSLP');
const INSOM = document.querySelector('.INSOM');
const WRKPRE = document.querySelector('.WRKPRE');
const ANXI = document.querySelector('.ANXI') ;
const DEPRI = document.querySelector('.DEPRI');
const ABUSED = document.querySelector('.ABUSED');
const CHEAT = document.querySelector('.CHEAT');
const THREAT = document.querySelector('.THREAT');
const SUICIDE = document.querySelector('.SUICIDE');
const INFER = document.querySelector('.INFER');
const CONFLICT = document.querySelector('.CONFLICT');
const LOST = document.querySelector('.LOST');
*/

const gender_radio_btns = document.getElementsByName('GENDER');
var gender_selected = null
function select_gender(){
    for (var i = 0, iLen=gender_radio_btns.length; i < iLen; i++) {
        if (gender_radio_btns[i].checked) {
            gender_radio_btns[i].value;
            break;
        }
    }
    console.log(gender_radio_btns[i].value)
    // return travel_radio_btns[i].id;
    gender_selected = gender_radio_btns[i].value
}

const premed_radio_btns = document.getElementsByName('PREMED');
var premed_selected = null
function select_premed(){
    for (var i = 0, iLen=premed_radio_btns.length; i < iLen; i++) {
        if (premed_radio_btns[i].checked) {
            premed_radio_btns[i].value;
            break;
        }
    }
    console.log(premed_radio_btns[i].value)
    // return travel_radio_btns[i].id;
    premed_selected = premed_radio_btns[i].value
}

const illness_radio_btns = document.getElementsByName('ILLNESS');
var illness_selected = null
function select_illness(){
    for (var i = 0, iLen=illness_radio_btns.length; i < iLen; i++) {
        if (illness_radio_btns[i].checked) {
            illness_radio_btns[i].value;
            break;
        }
    }
    console.log(illness_radio_btns[i].value)
    // return travel_radio_btns[i].id;
    illness_selected = illness_radio_btns[i].value
}

const smoker_radio_btns = document.getElementsByName('SMOKER');
var smoker_selected = null
function select_smoker(){
    for (var i = 0, iLen=smoker_radio_btns.length; i < iLen; i++) {
        if (smoker_radio_btns[i].checked) {
            smoker_radio_btns[i].value;
            break;
        }
    }
    console.log(smoker_radio_btns[i].value)
    // return travel_radio_btns[i].id;
    smoker_selected = smoker_radio_btns[i].value
}

const insomnia_radio_btns = document.getElementsByName('INSOMNIA');
var insomnia_selected = null
function select_insom(){
    for (var i = 0, iLen=insomnia_radio_btns.length; i < iLen; i++) {
        if (insomnia_radio_btns[i].checked) {
            insomnia_radio_btns[i].value;
            break;
        }
    }
    console.log(insomnia_radio_btns[i].value)
    // return travel_radio_btns[i].id;
    insomnia_selected = insomnia_radio_btns[i].value
}

const drink_radio_btns = document.getElementsByName('DRINK');
var drink_selected = null
function select_drink(){
    for (var i = 0, iLen=drink_radio_btns.length; i < iLen; i++) {
        if (drink_radio_btns[i].checked) {
            drink_radio_btns[i].value;
            break;
        }
    }
    console.log(drink_radio_btns[i].value)
    // return travel_radio_btns[i].id;
    drink_selected = drink_radio_btns[i].value
}

const livwith_radio_btns = document.getElementsByName('LIVWITH');
var livwith_selected = null
function select_livwith(){
    for (var i = 0, iLen=livwith_radio_btns.length; i < iLen; i++) {
        if (livwith_radio_btns[i].checked) {
            livwith_radio_btns[i].value;
            break;
        }
    }
    console.log(livwith_radio_btns[i].value)
    // return travel_radio_btns[i].id;
    livwith_selected = livwith_radio_btns[i].value
}

const threat_radio_btns = document.getElementsByName('THREAT');
var threat_selected = null
function select_threat(){
    for (var i = 0, iLen=threat_radio_btns.length; i < iLen; i++) {
        if (threat_radio_btns[i].checked) {
            threat_radio_btns[i].value;
            break;
        }
    }
    console.log(threat_radio_btns[i].value)
    // return travel_radio_btns[i].id;
    threat_selected = threat_radio_btns[i].value
}

const cheat_radio_btns = document.getElementsByName('CHEAT');
var cheat_selected = null
function select_cheat(){
    for (var i = 0, iLen=cheat_radio_btns.length; i < iLen; i++) {
        if (cheat_radio_btns[i].checked) {
            cheat_radio_btns[i].value;
            break;
        }
    }
    console.log(cheat_radio_btns[i].value)
    // return travel_radio_btns[i].id;
    cheat_selected = cheat_radio_btns[i].value
}

const conflict_radio_btns = document.getElementsByName('CONFLICT');
var conflict_selected = null
function select_conflict(){
    for (var i = 0, iLen=conflict_radio_btns.length; i < iLen; i++) {
        if (conflict_radio_btns[i].checked) {
            conflict_radio_btns[i].value;
            break;
        }
    }
    console.log(conflict_radio_btns[i].value)
    // return travel_radio_btns[i].id;
    conflict_selected = conflict_radio_btns[i].value
}

const lost_radio_btns = document.getElementsByName('LOST');
var lost_selected = null
function select_lost(){
    for (var i = 0, iLen=lost_radio_btns.length; i < iLen; i++) {
        if (lost_radio_btns[i].checked) {
            lost_radio_btns[i].value;
            break;
        }
    }
    console.log(lost_radio_btns[i].value)
    // return travel_radio_btns[i].id;
    lost_selected = lost_radio_btns[i].value
}

const abused_radio_btns = document.getElementsByName('ABUSED');
var abused_selected = null
function select_abused(){
    for (var i = 0, iLen=abused_radio_btns.length; i < iLen; i++) {
        if (abused_radio_btns[i].checked) {
            abused_radio_btns[i].value;
            break;
        }
    }
    console.log(abused_radio_btns[i].value)
    // return travel_radio_btns[i].id;
    abused_selected =abused_radio_btns[i].value
}

const envsat_radio_btns = document.getElementsByName('ENVSAT');
var envsat_selected = null
function select_envsat(){
    for (var i = 0, iLen=envsat_radio_btns.length; i < iLen; i++) {
        if (envsat_radio_btns[i].checked) {
            envsat_radio_btns[i].value;
            break;
        }
    }
    console.log(envsat_radio_btns[i].value)
    // return travel_radio_btns[i].id;
    envsat_selected = envsat_radio_btns[i].value
}

const debt_radio_btns = document.getElementsByName('DEBT');
var debt_selected = null
function select_debt(){
    for (var i = 0, iLen=debt_radio_btns.length; i < iLen; i++) {
        if (debt_radio_btns[i].checked) {
            debt_radio_btns[i].value;
            break;
        }
    }
    console.log(debt_radio_btns[i].value)
    // return travel_radio_btns[i].id;
    debt_selected = debt_radio_btns[i].value
}

const finstr_radio_btns = document.getElementsByName('FINSTR');
var finstr_selected = null
function select_finstr(){
    for (var i = 0, iLen=finstr_radio_btns.length; i < iLen; i++) {
        if (finstr_radio_btns[i].checked) {
            finstr_radio_btns[i].value;
            break;
        }
    }
    console.log(finstr_radio_btns[i].value)
    // return travel_radio_btns[i].id;
    finstr_selected = finstr_radio_btns[i].value
}

const anxi_radio_btns = document.getElementsByName('ANXI');
var anxi_selected = null
function select_anxi(){
    for (var i = 0, iLen=anxi_radio_btns.length; i < iLen; i++) {
        if (anxi_radio_btns[i].checked) {
            anxi_radio_btns[i].value;
            break;
        }
    }
    console.log(anxi_radio_btns[i].value)
    // return travel_radio_btns[i].id;
    anxi_selected = anxi_radio_btns[i].value
}

const infer_radio_btns = document.getElementsByName('INFER');
var infer_selected = null
function select_infer(){
    for (var i = 0, iLen=infer_radio_btns.length; i < iLen; i++) {
        if (infer_radio_btns[i].checked) {
            infer_radio_btns[i].value;
            break;
        }
    }
    console.log(infer_radio_btns[i].value)
    // return travel_radio_btns[i].id;
    infer_selected = infer_radio_btns[i].value
}

const eatdis_radio_btns = document.getElementsByName('EATDIS');
var eatdis_selected = null
function select_eatdis(){
    for (var i = 0, iLen=eatdis_radio_btns.length; i < iLen; i++) {
        if (eatdis_radio_btns[i].checked) {
            eatdis_radio_btns[i].value;
            break;
        }
    }
    console.log(eatdis_radio_btns[i].value)
    // return travel_radio_btns[i].id;
    eatdis_selected = eatdis_radio_btns[i].value
}

const depri_radio_btns = document.getElementsByName('DEPRI');
var depri_selected = null
function select_depri(){
    for (var i = 0, iLen=depri_radio_btns.length; i < iLen; i++) {
        if (depri_radio_btns[i].checked) {
            depri_radio_btns[i].value;
            break;
        }
    }
    console.log(depri_radio_btns[i].value)
    // return travel_radio_btns[i].id;
    depri_selected = depri_radio_btns[i].value
}

const suicide_radio_btns = document.getElementsByName('SUICIDE');
var suicide_selected = null
function select_suicide(){
    for (var i = 0, iLen=suicide_radio_btns.length; i < iLen; i++) {
        if (suicide_radio_btns[i].checked) {
            suicide_radio_btns[i].value;
            break;
        }
    }
    console.log(suicide_radio_btns[i].value)
    // return travel_radio_btns[i].id;
    suicide_selected = suicide_radio_btns[i].value
}

const possat_radio_btns = document.getElementsByName('POSSAT');
var possat_selected = null
function select_possat(){
    for (var i = 0, iLen=possat_radio_btns.length; i < iLen; i++) {
        if (possat_radio_btns[i].checked) {
            possat_radio_btns[i].value;
            break;
        }
    }
    console.log(possat_radio_btns[i].value)
    // return travel_radio_btns[i].id;
    possat_selected = possat_radio_btns[i].value
}

const wrkpre_radio_btns = document.getElementsByName('WRKPRE');
var wrkpre_selected = null
function select_wrkpre(){
    for (var i = 0, iLen=wrkpre_radio_btns.length; i < iLen; i++) {
        if (wrkpre_radio_btns[i].checked) {
            wrkpre_radio_btns[i].value;
            break;
        }
    }
    console.log(wrkpre_radio_btns[i].value)
    // return travel_radio_btns[i].id;
    wrkpre_selected = wrkpre_radio_btns[i].value
}

/*const depressed_radio_btns = document.getElementsByName('DEPRESSED');
var depressed_selected = null
function select_wrkpre(){
    for (var i = 0, iLen=wrkpre_radio_btns.length; i < iLen; i++) {
        if (wrkpre_radio_btns[i].checked) {
            wrkpre_radio_btns[i].value;
            break;
        }
    }
    console.log(depressed_radio_btns[i].value)
    // return travel_radio_btns[i].id;
    depressed_selected = depressed_radio_btns[i].value
}*/

function saveRec() {
    // console.log(travel_selected);

    fetch('post/result', {
       // mode: 'no-cors',
        method: 'post',
        headers: new Headers({ 'Content-Type' : 'application/json'}),
        body: JSON.stringify({

            AGERNG: AGERNG.value,
            GENDER: (gender_selected == 'male')? 'Male' : ((gender_selected == 'female')? 'Female' : null ),
            EDU: EDU.value,
            PROF: PROF.value,
            MARSTS: MARSTS.value,
            RESDPL: RESDPL.value,
            LIVWTH: (livwith_selected == 'yes') ? 'With Family' : ((livwith_selected == 'no')? 'Without Family' : null ),            
            ENVSAT: (envsat_selected == 'yes')? 'Yes' : ((envsat_selected == 'no')? 'No' : null ), 
            POSSAT: (possat_selected == 'yes')? 'Yes' : ((possat_selected == 'no')? 'No' : null ),    
            FINSTR: (finstr_selected == 'yes')? 'Yes' : ((finstr_selected == 'no')? 'No' : null ),
            DEBT: (debt_selected == 'yes')? 'Yes' : ((debt_selected == 'no')? 'No' : null ),   
            PHYEX: PHYEX.value,
            SMOKE: (smoker_selected == 'yes')? 'Yes' : ((smoker_selected == 'no')? 'No' : null ), 
            DRINK: (drink_selected == 'yes')? 'Yes' : ((drink_selected == 'no')? 'No' : null ),
            ILLNESS: (illness_selected == 'yes')? 'Yes' : ((illness_selected == 'no')? 'No' : null ), 
            PREMED: (premed_selected == 'yes')? 'Yes' : ((premed_selected == 'no')? 'No' : null ), 
            EATDIS: (eatdis_selected == 'yes')? 'Yes' : ((eatdis_selected == 'no')? 'No' : null ),     
            AVGSLP: AVGSLP.value,
            INSOM: (insomnia_selected == 'yes')? 'Yes' : ((insomnia_selected == 'no')? 'No' : null ),   
            TSSN: TSSN.value,
            WRKPRE: WRKPRE.value,
            ANXI: (anxi_selected == 'yes')? 'Yes' : ((anxi_selected == 'no')? 'No' : null ),            
            DEPRI: (depri_selected == 'yes')? 'Yes' : ((depri_selected == 'no')? 'No' : null ),            
            ABUSED: (abused_selected == 'yes')? 'Yes' : ((abused_selected == 'no')? 'No' : null ), 
            CHEAT: (cheat_selected == 'yes')? 'Yes' : ((cheat_selected == 'no')? 'No' : null ),            
            THREAT: (threat_selected == 'yes')? 'Yes' : ((threat_selected == 'no')? 'No' : null ),            
            SUICIDE: (suicide_selected == 'yes')? 'Yes' : ((suicide_selected == 'no')? 'No' : null ),    
            INFER: (infer_selected == 'yes')? 'Yes' : ((infer_selected == 'no')? 'No' : null ),            
            CONFLICT: (conflict_selected == 'yes')? 'Yes' : ((conflict_selected == 'no')? 'No' : null ),
            LOST: (lost_selected == 'yes')? 'Yes' : ((lost_selected == 'no')? 'No' : null ), 
            first_name: firstname.value,
            last_name: lastname.value,
            encoder_id: sessionStorage.getItem('id'),
            /*is_depressed: (depressed_selected == 'yes' || 'no' || 'na')? 'Yes':'No',*/
        })
    })
    .then(res => res.json())
    .then(data => {
        if (data[0].event == 'input error') alert('Input error')
        else {
            alert('Moving to result page')
            sessionStorage.setItem('recordno', data[0].record_no)
            location.href = '/result'
        }
    })
}







