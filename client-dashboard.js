// ================= LAWYER DATA =================

// Temporary lawyer data
// Later this data can come from a backend/database

const lawyers = [
    {
        name: "Adv. Ananya Sharma",
        initials: "AS",
        specialization: "Corporate Law",
        experience: "8 Years Experience",
        rating: "4.8"
    },

    {
        name: "Adv. Rahul Kapoor",
        initials: "RK",
        specialization: "Criminal Law",
        experience: "10 Years Experience",
        rating: "4.7"
    },

    {
        name: "Adv. Priya Nair",
        initials: "PN",
        specialization: "Family Law",
        experience: "6 Years Experience",
        rating: "4.9"
    }
];


// ================= GET HTML ELEMENTS =================

// Search input
const searchInput = document.getElementById("lawyerSearch");

// Search button
const searchButton = document.getElementById("searchBtn");

// Lawyer cards container
const lawyerGrid = document.querySelector(".lawyer-grid");


// ================= DISPLAY LAWYERS =================

function displayLawyers(lawyerList) {

    // Remove existing lawyer cards
    lawyerGrid.innerHTML = "";

    // Check if no lawyer was found
    if (lawyerList.length === 0) {

        lawyerGrid.innerHTML = `
            <p class="no-results">
                No lawyers found for your search.
            </p>
        `;

        return;
    }

    // Create a card for every lawyer
    lawyerList.forEach(function(lawyer) {

        const card = document.createElement("div");

        card.classList.add("lawyer-card");

        card.innerHTML = `
            <div class="lawyer-avatar">
                ${lawyer.initials}
            </div>

            <h3>
                ${lawyer.name}
            </h3>

            <p class="specialization">
                ${lawyer.specialization}
            </p>

            <p class="experience">
                ⭐ ${lawyer.rating} · ${lawyer.experience}
            </p>

            <button onclick="viewProfile('${lawyer.name}')">
                View Profile
            </button>
        `;

        lawyerGrid.appendChild(card);
    });
}


// ================= SEARCH LAWYERS =================

searchButton.addEventListener("click", function() {

    // Get search text
    const searchText = searchInput.value
        .toLowerCase()
        .trim();

    // Find matching lawyers
    const results = lawyers.filter(function(lawyer) {

        return lawyer.specialization
            .toLowerCase()
            .includes(searchText);

    });

    // Display results
    displayLawyers(results);
});


// ================= SEARCH USING ENTER =================

searchInput.addEventListener("keypress", function(event) {

    if (event.key === "Enter") {
        searchButton.click();
    }

});


// ================= VIEW LAWYER PROFILE =================

function viewProfile(lawyerName) {

    // Save selected lawyer
    localStorage.setItem("selectedLawyer", lawyerName);

    // Open lawyer profile page
    window.location.href = "lawyer-profile.html";
}


// ================= INITIAL DISPLAY =================

// Show all lawyers when dashboard opens
displayLawyers(lawyers);


// ================= USER ROLE =================

// Get the role saved during role selection
const userRole = localStorage.getItem("userRole");

// Check whether a role exists
if (userRole) {

    console.log("Logged in as:", userRole);

}