    // setup 
    const data = {
        labels: ['Not Depressed', 'Depressed'],
        datasets: [{
          label: 'Prediction Probabilities',
          data: [0.45, 0.55], //to insert results here
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
      const chartVersion = document.getElementById('chartVersion');
      chartVersion.innerText = Chart.version;