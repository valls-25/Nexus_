document.addEventListener("DOMContentLoaded", function () {
    if (window.location.pathname.includes("insights.html")) {
        loadInsights();
    }
});

function loadInsights() {
    const networkingProfiles = [
        { name: "Investor A", field: "Tech", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYACsSZODwTx98u0uoq6b10f405WX31ebqTw&s" },
        { name: "Investor B", field: "Finance", image: "https://miro.medium.com/v2/resize:fit:1400/1*ooHbUo255gGy5W0HOp6Dmw.jpeg" },
    ];

    const startups = [
        { name: "Startup X", industry: "AI", funding: "₹50 Crore", logo: "https://cdn.prod.website-files.com/5fce0f6bc9af69423eefaa13/65d27d39bdd8178aed99d8fe_New%20Project%20(1).webp" },
        { name: "Startup Y", industry: "E-commerce", funding: "₹75 Crore", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStrGRMzvpulOT0O7eKhomLNu96shIN8QaAmg&s" },
    ];

    const investors = [
        { name: "Raj Malhotra", field: "AI & Tech", investment: "₹50 Crore" },
        { name: "Anita Desai", field: "Green Energy", investment: "₹40 Crore" }
    ];

    document.getElementById("networkingProfiles").innerHTML = networkingProfiles.map(p =>
        `<div class="profile-card">
            <img src="${p.image}" alt="${p.name}">
            <p>${p.name}</p>
            <p>${p.field}</p>
        </div>`
    ).join("");

    document.getElementById("startupsList").innerHTML = startups.map(s =>
        `<tr>
            <td><img src="${s.logo}" alt="${s.name}"></td>
            <td>${s.name}</td>
            <td>${s.industry}</td>
            <td><strong>${s.funding}</strong></td>
        </tr>`
    ).join("");

    document.getElementById("fundedStartups").innerHTML = startups.map(s =>
        `<tr>
            <td>${s.name}</td>
            <td><strong>${s.funding}</strong></td>
        </tr>`
    ).join("");

    document.getElementById("investors").innerHTML = investors.map(i =>
        `<tr>
            <td>${i.name}</td>
            <td>${i.field}</td>
            <td><strong>${i.investment}</strong></td>
        </tr>`
    ).join("");

    document.getElementById("investorSelect").innerHTML = investors.map(i =>
        `<option value="${i.name}">${i.name}</option>`
    ).join("");
}

function submitPitch() {
    alert(`Pitch submitted to ${document.getElementById("investorSelect").value} for ₹${document.getElementById("fundingAmount").value} funding!`);
}
