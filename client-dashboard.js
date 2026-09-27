// ================= LAWYER DATA =================

// Temporary lawyer data
// Later this can come from a database/backend

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

// ================= SEARCH =================

// Get search input
const searchInput = document.getElementById(“lawyerSearch”);

// Get search button
const searchButton = document.getElementById(“searchBtn”);

// Run search when button is clicked
searchButton.addEventListener(“click”, function() {

// Get the text entered by the user
const searchText = searchInput.value.toLowerCase().trim();
// Find matching lawyers
const results = lawyers.filter(function(lawyer) {
    return lawyer.specialization
        .toLowerCase()
        .includes(searchText);
});
// Display the results
displayLawyers(results);

});

// ================= DISPLAY LAWYERS =================

function displayLawyers(lawyerList) {

// Get the lawyer grid
const lawyerGrid = document.querySelector(".lawyer-grid");
// Clear existing cards
lawyerGrid.innerHTML = "";
// If no lawyer is found
if (lawyerList.length === 0) {
    lawyerGrid.innerHTML = `
        <p class="no-results">
            No lawyers found for your search.
        </p>
    `;
    return;
}
// Create a card for every lawyer
lawyerList.forEach(function(lawyer, index) {
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
        <button onclick="viewProfile(${index})">
            View Profile
        </button>
    `;
    lawyerGrid.appendChild(card);
});

}

// ================= VIEW PROFILE =================

function viewProfile(index) {

// Get selected lawyer
const lawyer = lawyers[index];
// Show lawyer information
alert(
    "Lawyer Profile\n\n" +
    "Name: " + lawyer.name + "\n" +
    "Specialization: " + lawyer.specialization + "\n" +
    "Experience: " + lawyer.experience + "\n" +
    "Rating: ⭐ " + lawyer.rating
);

}

// ================= USER ROLE =================

// Get role saved during role selection
const userRole = localStorage.getItem(“userRole”);

// Check if role exists
if (userRole) {

console.log("Logged in as:", userRole);

}