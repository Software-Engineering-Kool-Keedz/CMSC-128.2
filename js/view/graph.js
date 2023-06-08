    const recordno = sessionStorage.getItem('recordno');
    
    fetch(`/get/ai-result/${recordno}`, {
      method: 'GET',
      headers: new Headers({'Content-Type': 'application/json'})
    })
    .then(res => res.json())
    .then(dat => {
      const data = {
        labels: ['Not Depressed', 'Depressed'],
        datasets: [{
          label: 'Prediction Probabilities',
          data: [dat[0].NO, dat[0].YES], //to insert results here
          backgroundColor: [
            'rgba(255, 26, 104, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(0, 0, 0, 0.2)'
          ],
          borderColor: [
            'rgba(255, 26, 104, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(0, 0, 0, 1)'
          ],
          borderWidth: 1
        }]
      };
  
      // config 
      const config = {
        type: 'bar',
        data,
        options: {
          indexAxis: 'y',
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      };
  
      // render init block
      const myChart = new Chart(
        document.getElementById('myChart'),
        config
      );
  
      // Instantly assign Chart.js version
      // const chartVersion = document.getElementById('chartVersion');
      // chartVersion.innerText = myChart.version;

      var features = dat[0].FEATURES 
      var features2 = features.replace(/[0-9]+/g, '')
      var features3 = features2.replace(/\W/g, ' ')
      var features4 = features3.split(' ')
      var features5 = []
      for (let i = 0; i < features4.length; i++){
        if (features4[i] != '') features5.push(features4[i]) 
      }

      fetch(`/get/features?patient_record=${recordno}&features=${features5.join(',')}`, {
        method: 'GET',
        headers: new Headers({'Content-Type': 'application/json'})
      })
      .then(res => res.json())
      .then(data => {
        var feats = data[0]
        const tableBody = document.querySelector('#tableData')
        for (var f in feats) {
          const tdata = document.createElement('tr')
          tdata.innerHTML = `
          <td>${convertAbbreviation(f)}</td>
          <td>${feats[f]}</td>`
          tableBody.appendChild(tdata)
        }
        const sentence  = document.querySelector('.sentence');
        sentence.innerHTML = `
        The model suggests that the patient has a ${(dat[0].YES*100).toFixed(2)}%
        chance of having depression. This is based on the patient's response to the 
        questions related to what is shown in the table. 
        `
      })    
    })

    const convertAbbreviation = (abbr) => {
      if (abbr === 'AGERNG') return 'Age Range'
      else if (abbr === 'GENDER') return 'Gender'
      else if (abbr === 'EDU') return 'Highest Educational Attainment'
      else if (abbr === 'PROF') return 'Professional Status'
      else if (abbr === 'MARSTS') return 'Marital Status'
      else if (abbr === 'RESDPL') return 'Type of Residence'
      else if (abbr === 'LIVWITH') return 'Lives with Family or Not'  
      else if (abbr === 'ENVSAT') return 'Satisfied with Environemnt or Not'
      else if (abbr === 'POSSAT') return 'Satisfied with Current Position/Achievements or Not'
      else if (abbr === 'FINSTR') return 'Financial Stress'
      else if (abbr === 'DEBT') return 'Had Debt'
      else if (abbr === 'PHYEX') return 'Physical Exercise'
      else if (abbr === 'SMOKE') return 'Smoker'
      else if (abbr === 'DRINK') return 'Alcohol Drinker'
      else if (abbr === 'ILLNESS') return 'With Illness'
      else if (abbr === 'PREMED') return 'Taking Prescribed Med'
      else if (abbr === 'EATDIS') return 'Has Eating Disorder'
      else if (abbr === 'AVGSLP') return 'Average Sleep Hours'
      else if (abbr === 'INSOM') return 'Has Insomnia'
      else if (abbr === 'TSSN') return 'Average Hours in Social Network'
      else if (abbr === 'WRKPRE') return 'Has Work/Study Pressure'
      else if (abbr === 'ANXI') return 'Feels Anxiety'
      else if (abbr === 'DEPRI') return ''
      else if (abbr === 'ABUSED') return ''
      else if (abbr === 'CHEAT') return ''
      

    }
    
    // setup 
