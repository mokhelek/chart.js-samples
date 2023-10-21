// Load the CSV file using D3's d3.csv() method
// d3.csv("assets/assembly-district-breakdowns-1.csv").then(data => {
//     console.log(data)
// });

const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1
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

const data = {
    labels: ["Western Cape", "Eastern Cape", "Northern Cape", "Free State", "KwaZulu-Natal", "Gauteng", "North West", "Mpumalanga", "Limpopo"],
    datasets: [
        {
            label: "Female",
            backgroundColor: "pink",
            data: [1600000, 1300000, 850000, 620000, 2300000, 3700000, 920000, 720000, 1020000],
        },
        {
            label: "Male",
            backgroundColor: "lightblue",
            data: [1500000, 1200000, 800000, 600000, 2200000, 3500000, 900000, 700000, 1000000],
        },
    ],
};

const config = {
    type: "bar",
    data: data,
    options: {
        scales: {
            x: {
                stacked: false, // Stack the bars for each province
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: "Population",
                },
            },
        },
    },
};

// Assuming you have a canvas element with an id "population-chart" in your HTML.
const populationStats = document.getElementById("population").getContext("2d");
const initChart = new Chart(populationStats, config);