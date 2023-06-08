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
        <p>Name: ${data[0][0]['first_name'] + " " + data[0][0]['last_name']}</p>
        <p>Age Range: ${data[0][0]['AGERNG']}</p>
        <p>Gender: ${data[0][0]['GENDER']}</p>
        <p>Marital Status: ${data[0][0]['MARSTS']}</p>
        <p>Educational Attainment: ${data[0][0]['EDU']}</p>
        <p>Profession: ${data[0][0]['PROF']}</p>
        <p>Type Residence: ${data[0][0]['RESDPL']}</p>
        `
        const physical = document.querySelector('.physical-health')

        physical.innerHTML = `
        <p>Physical Exercise: ${data[0][0]['PHYEX']}</p>
        <p>With Illnes? ${data[0][0]['ILLNESS']}</p>
        <p>Has Insomnia? ${data[0][0]['INSOM']}</p>
        <p>Average Sleep Hours: ${data[0][0]['AVGSLP']}</p>
        <p>Smoker? ${data[0][0]['SMOKE']}</p>
        <p>Alchohol Drinker? ${data[0][0]['DRINK']}</p>
        <p>Taking Prescribed Medicine? ${data[0][0]['PREMED']}</p>
        `

        const social = document.querySelector('.social-relationship')

        social.innerHTML = `
        <p>Lives with Family or Not? ${data[0][0]['LIVWTH']}</p>
        <p>In Conflict with Family or Friends? ${data[0][0]['CONFLICT']}</p>
        <p>Satisfied with Environment? ${data[0][0]['ENVSAT']}</p>
        <p>Faced threat? ${data[0][0]['THREAT']}</p>
        <p>Lost Someone? ${data[0][0]['LOST']}</p>
        <p>Average Hours in Social Network ${data[0][0]['TSSN']}</p>
        <p>Felt Cheated? ${data[0][0]['CHEAT']}</p>
        <p>Felt Abused? ${data[0][0]['ABUSED']}</p>
        `

        const financial = document.querySelector('.financial')

        financial.innerHTML = `
        <p>Had Debt? ${data[0][0]['DEBT']}</p>
        <p>Financially Stressed? ${data[0][0]['FINSTR']}</p>
        `

        const psychological = document.querySelector('.psychological')

        psychological.innerHTML = `
        <p>Feels Anxiety? ${data[0][0]['ANXI']}</p>
        <p>Feels Deprived? ${data[0][0]['DEPRI']}</p>
        <p>Satisfied with Current Position or Achievements? ${data[0][0]['POSSAT']}</p>
        <p>With Inferiority Complex? ${data[0][0]['INFER']}</p>
        <p>Having Suicidal Thoughts? ${data[0][0]['SUICIDE']}</p>
        <p>Has Work/Study Pressure? ${data[0][0]['WRKPRE']}</p>
        <p>Has eating Disorder? ${data[0][0]['EATDIS']}</p>
        `
        const ai = document.querySelector('.ai')

        ai.innerHTML = `
        <p>AI Prediction: ${((data[0][0]['DEPRESSED'])? "Depressed":"Not Depressed")}</p>
        `

        const final = document.querySelector('.final')

        final.innerHTML = `
        <p>Physician's Final Diagnosis: ${(data[1][0]['EVALUATION'])? "Depressed": ((data[1][0]['EVALUATION'] == false)? "Not Depressed": "To be evaluated")}</p>
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
