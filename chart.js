const DATA_COUNT = 13;
const labels = ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'];

const data = {
    labels: labels,
    datasets: [
        {
            label: '1st Generation',
            data: [10, 30, 39, 20, 25, 34, 67, 89, 55, 12, 44, 78, 91],
            borderColor: 'rgba(0, 0, 255, 1)',
            backgroundColor: 'rgba(238, 130, 238, 0.2)',
        },
        {
            label: '2nd Generation',
            data: [5, 18, 42, 76, 29, 50, 88, 14, 37, 63, 81, 46, 70],
            borderColor: 'rgba(0, 0, 255, 1)',
            backgroundColor: 'rgba(255, 255, 0, 0.2)',
        },
        {
            label: '3rd Generation',
            data: [5, 12, 84, 3, 77, 15, 91, 8, 64, 22, 85, 41, 59],
            borderColor: 'rgba(0, 0, 255, 1)',
            backgroundColor: 'rgba(0, 255, 0, 0.2)',
        },
        {
            label: '4th Generation',
            data: [8, 45, 6, 32, 72, 83, 21, 90, 54, 79, 17, 86, 43],
            borderColor: 'rgba(0, 0, 255, 1)',
            backgroundColor: 'rgba(0, 0, 255, 0.2)',
        },


    ]
};

const config = {
    type: 'line',
    data: data,
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,


            }
        },
        scales: {
            y: {
                suggestedMin: 30,
                suggestedMax: 100,
            }
        }
    },
};

const myChart = new Chart(document.getElementById('myChart'), config
);