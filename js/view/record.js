const recordno = sessionStorage.getItem('record_no');

window.onload = () => {
    fetch(`/get/record/${recordno}`, {
        method: 'GET',
        headers: new Headers({'Content-Type': 'application/json'})
    })
    .then(res => res.json())
    .then((data) => {
        const basic = document.querySelector('.basic-info')

        basic.innerHTML = `
        <p><b>Name:</b> ${data[0][0]['first_name'] + " " + data[0][0]['last_name']}</p>
        <p><b>Age Range:</b> ${data[0][0]['AGERNG']}</p>
        <p><b>Gender:</b> ${data[0][0]['GENDER']}</p>
        <p><b>Marital Status:</b> ${data[0][0]['MARSTS']}</p>
        <p><b>Educational Attainment:</b> ${data[0][0]['EDU']}</p>
        <p><b>Profession:</b> ${data[0][0]['PROF']}</p>
        <p><b>Type Residence:</b> ${data[0][0]['RESDPL']}</p>
        `
        const physical = document.querySelector('.physical-health')

        physical.innerHTML = `
        <p><b>Physical Exercise:</b> ${data[0][0]['PHYEX']}</p>
        <p><b>With Illnes?</b> ${data[0][0]['ILLNESS']}</p>
        <p><b>Has Insomnia?</b> ${data[0][0]['INSOM']}</p>
        <p><b>Average Sleep Hours:</b> ${data[0][0]['AVGSLP']}</p>
        <p><b>Smoker?</b> ${data[0][0]['SMOKE']}</p>
        <p><b>Alchohol Drinker?</b> ${data[0][0]['DRINK']}</p>
        <p><b>Taking Prescribed Medicine?</b> ${data[0][0]['PREMED']}</p>
        `

        const social = document.querySelector('.social-relationship')

        social.innerHTML = `
        <p><b>Lives with Family or Not?</b> ${data[0][0]['LIVWTH']}</p>
        <p><b>In Conflict with Family or Friends?</b> ${data[0][0]['CONFLICT']}</p>
        <p><b>Satisfied with Environment?</b> ${data[0][0]['ENVSAT']}</p>
        <p><b>Faced threat?</b> ${data[0][0]['THREAT']}</p>
        <p><b>Lost Someone?</b> ${data[0][0]['LOST']}</p>
        <p><b>Average Hours in Social Network</b> ${data[0][0]['TSSN']}</p>
        <p><b>Felt Cheated?</b> ${data[0][0]['CHEAT']}</p>
        <p><b>Felt Abused?</b> ${data[0][0]['ABUSED']}</p>
        `

        const financial = document.querySelector('.financial')

        financial.innerHTML = `
        <p><b>Had Debt?</b> ${data[0][0]['DEBT']}</p>
        <p><b>Financially Stressed?</b> ${data[0][0]['FINSTR']}</p>
        `

        const psychological = document.querySelector('.psychological')

        psychological.innerHTML = `
        <p><b>Feels Anxiety?</b> ${data[0][0]['ANXI']}</p>
        <p><b>Feels Deprived?</b> ${data[0][0]['DEPRI']}</p>
        <p><b>Satisfied with Current Position or Achievements?</b> ${data[0][0]['POSSAT']}</p>
        <p><b>With Inferiority Complex?</b> ${data[0][0]['INFER']}</p>
        <p><b>Having Suicidal Thoughts?</b> ${data[0][0]['SUICIDE']}</p>
        <p><b>Has Work/Study Pressure?</b> ${data[0][0]['WRKPRE']}</p>
        <p><b>Has eating Disorder?</b> ${data[0][0]['EATDIS']}</p>
        `
        const ai = document.querySelector('.ai')

        ai.innerHTML = `
        <p><b>AI Prediction:</b> ${((data[0][0]['DEPRESSED'])? "Depressed":"Not Depressed")}</p>
        `

        const final = document.querySelector('.final')

        final.innerHTML = `
        <p><b>Physician's Final Diagnosis:</b> ${(data[1][0]['EVALUATION'])? "Depressed": ((data[1][0]['EVALUATION'] == false)? "Not Depressed": "To be evaluated")}</p>
        <div class="row">
            <div class="col edit-btn-cont" style="display:block">
                <a class="btn btn-outline-secondary mb-3 edit" id="edit" >Edit</a>
            </div>
            <div class="col cancel-btn-cont" style="display:none">
                <a class="btn btn-outline-secondary mb-3 cancel-edit" id="cancel-edit">Cancel Edit</a>
            </div>
            <div class="col save-btn-cont" style="display:none">
                <a class="btn btn-outline-secondary mb-3 save-edit" id="save-edit">Save</a>
            </div>
        </div>
        <div class="selection-cont" style="display:none">
        <label for="final" class="">Final Diagnosis</label>
        <select id="final" class="form-select selection">
            <option value="" disabled selected>Choose...</option>
            <option value="true">Depressed</option>
            <option value="false">Not Depressed</option>
        </select>
        </div>
        `
        const editcont = document.querySelector('.edit-btn-cont')
        const savecont = document.querySelector('.save-btn-cont')
        const cancelcont = document.querySelector('.cancel-btn-cont')
        const edit = document.querySelector('.edit')
        const save = document.querySelector('.save-edit')
        const cancel = document.querySelector('.cancel-edit')
        const selectioncont = document.querySelector('.selection-cont')
        const selection = document.querySelector('.selection')

        edit.addEventListener('click', () => {
            editcont.style.display = 'none'
            savecont.style.display = 'block'
            cancelcont.style.display = 'block'
            selectioncont.style.display = 'block'
        })

        cancel.addEventListener('click', () => {
            editcont.style.display = 'block'
            savecont.style.display = 'none'
            cancelcont.style.display = 'none'
            selectioncont.style.display = 'none'
        })

        save.addEventListener('click', () => {
            fetch('/update/evaluation', {
                method: 'PUT',
                headers: new Headers({'Content-Type': 'application/json'}),
                body: JSON.stringify({
                    eval_no: data[1][0]['eval_no'],
                    EVALUATION: selection.value
                })
            })
            .then(res => res.json())
            .then(data => {
                if(data.event == 'success'){
                    alert('Evaluation edited')
                    window.location.reload()
                }
                else alert('Edit failed')
            })
        })
        //console.log(data)
    })
}
