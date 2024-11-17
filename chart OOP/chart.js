class ChartCreator {
    constructor(dataUrl) {
        this.dataUrl = dataUrl;
      
        this.pieCtx = document.getElementById('pieChart');
        this.lineCtx = document.getElementById('lineChart');
    }

    async fetchData() {
        try {
            const response = await fetch(this.dataUrl);
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return await response.json();
        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
        }
    }

    createPieChart(data) {
        new Chart(this.pieCtx, {
            type: 'pie',
            data: {
                labels: data.pieData.labels,
                datasets: [{
                    label: '# of Votes',
                    data: data.pieData.data,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'bottom',
                    },
                    tooltip: {
                        callbacks: {
                            label: (tooltipItem) => {
                                return tooltipItem.label + ': ' + tooltipItem.raw;
                            }
                        }
                    }
                }
            }
        });
    }

    createLineChart(data) {
        new Chart(this.lineCtx, {
            type: 'line',
            data: {
                labels: data.lineData.labels,
                datasets: [{
                    label: 'Monthly Data',
                    data: data.lineData.data,
                    borderColor: 'rgba(255, 99, 132, 1)',
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    fill: false,
                    borderWidth: 2
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    async init() {
        const data = await this.fetchData();
        if (data) {
            this.createPieChart(data);  
            this.createLineChart(data);
        }
    }
}

const chartCreator = new ChartCreator('chart.json');
chartCreator.init();
