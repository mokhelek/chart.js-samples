// Load the CSV file using D3's d3.csv() method
// d3.csv("assets/assembly-district-breakdowns-1.csv").then(data => {
//     console.log(data)
// });

const ctx = document.getElementById("myChart");

new Chart(ctx, {
    type: "bar",
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
            {
                label: "# of Votes",
                data: [12, 19, 3, 5, 2, 3],
                borderWidth: 1,
            },
        ],
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    },
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
// ******************* PIE CHART ********************

// Sample data for the pie chart
const pieData = {
    labels: ["Housing", "Transportation", "Food", "Utilities", "Other"],
    datasets: [
        {
            data: [800, 300, 150, 500, 250], // Sample quantities for each fruit
            backgroundColor: ["yellow", "purple", "pink", "lightblue", "green"], // Colors for each slice
        },
    ],
};

const pieConfig = {
    type: "pie",
    data: pieData,
    options: {
        plugins: {
            legend: {
                position: "left", // Adjust legend position
            },
        },
    },
};

// Assuming you have a canvas element with an id "fruit-chart" in your HTML.
const pieElem = document.getElementById("pie-chart").getContext("2d");
const pieChart = new Chart(pieElem, pieConfig);

// ********************** Line Graph ***********************

// Sample data for the line graph for a whole year
const priceData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
        {
            label: "Stock Price (USD)",
            data: [50, 25, 30, 32, 58, 46, 70, 68, 43, 75, 65, 67],
            borderColor: "#88d9ffd2",
            fill: true,
            title: {
                display: true,
                text: "Yearly Stock Prices",
                color: "red",
            },
        },
    ],
};

const priceConfig = {
    type: "line",
    data: priceData,
    options: {
        scales: {
            x: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: "Months",
                    color: "pink",
                },
                ticks: {
                    color: "#c7c7c7", // Change the color of x-axis tick labels
                },
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: "Stock Price (USD)",
                    color: "pink",
                },
                ticks: {
                    color: "#c7c7c7", // Change the color of x-axis tick labels
                },
            },
        },
    },
};

// Assuming you have a canvas element with an id "stock-price-chart" in your HTML.
const priceElem = document.getElementById("price-chart").getContext("2d");
const priceChart = new Chart(priceElem, priceConfig);
