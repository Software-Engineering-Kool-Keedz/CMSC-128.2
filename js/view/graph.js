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
      
      const sentence  = document.querySelector('.sentence');
      sentence.innerHTML = `
      The model suggests that the patient has a ${(dat[0].YES*100).toFixed(2)}%
      chance of having depression. This is based on the patient's response to the 
      questions related to the following:
      `
    })
    
    // setup 
