document.addEventListener("DOMContentLoaded", function () {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
    let revenue = [20000, 25000, 32000, 40000, 55000, 70000];

    // Create input fields dynamically
    const inputFieldsDiv = document.getElementById("inputFields");
    months.forEach((month, index) => {
        let input = document.createElement("input");
        input.type = "number";
        input.value = revenue[index];
        input.placeholder = `${month} Revenue`;
        input.dataset.index = index;
        inputFieldsDiv.appendChild(input);
    });

    // Initialize Chart.js
    const revenueCtx = document.getElementById("revenueChart").getContext("2d");
    let revenueChart = new Chart(revenueCtx, {
        type: "line",
        data: {
            labels: months,
            datasets: [{
                label: "Projected Revenue ($)",
                data: revenue,
                borderColor: "#ff6b6b",
                backgroundColor: "rgba(255, 107, 107, 0.2)",
                borderWidth: 2,
                fill: true
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    labels: {
                        color: "white",
                        font: { size: 14 }
                    }
                },
                tooltip: {
                    backgroundColor: "rgba(255, 107, 107, 0.8)"
                }
            },
            scales: {
                x: { ticks: { color: "white" } },
                y: { ticks: { color: "white" } }
            }
        }
    });

    // Update chart and generate insights
    window.updateChart = function () {
        const inputs = document.querySelectorAll("#inputFields input");
        revenue = Array.from(inputs).map(input => parseInt(input.value) || 0);
        revenueChart.data.datasets[0].data = revenue;
        revenueChart.update();
        generateInsights();
    };

    // Generate basic insights
    function generateInsights() {
        const trendAnalysis = document.getElementById("trendAnalysis");
        let sum = revenue.reduce((a, b) => a + b, 0);
        let avg = sum / revenue.length;
        let max = Math.max(...revenue);
        let min = Math.min(...revenue);

        trendAnalysis.innerHTML = `
            <strong>Total Revenue:</strong> $${sum.toLocaleString()} <br>
            <strong>Average Monthly Revenue:</strong> $${avg.toLocaleString()} <br>
            <strong>Highest Revenue Month:</strong> $${max.toLocaleString()} <br>
            <strong>Lowest Revenue Month:</strong> $${min.toLocaleString()}
        `;
    }
});
