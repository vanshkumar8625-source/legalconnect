// =========================================
// POST INTERNSHIP
// =========================================

function postInternship() {

    // Get values from the form
    let title = document.getElementById("internshipTitle").value;
    let description = document.getElementById("internshipDescription").value;
    let duration = document.getElementById("internshipDuration").value;
    let stipend = document.getElementById("internshipStipend").value;


    // Check if any field is empty
    if (
        title === "" ||
        description === "" ||
        duration === "" ||
        stipend === ""
    ) {

        alert("Please fill all the fields.");

        return;
    }


    // Create internship object
    let internship = {

        title: title,

        description: description,

        duration: duration,

        stipend: stipend,

        lawyer: "Adv. Ananya Sharma"

    };


    // Get old internships
    let opportunities =
        JSON.parse(localStorage.getItem("internshipOpportunities")) || [];


    // Add new internship
    opportunities.push(internship);


    // Save internships
    localStorage.setItem(
        "internshipOpportunities",
        JSON.stringify(opportunities)
    );


    // Show success message
    alert("Internship posted successfully!");


    // Clear the form
    document.getElementById("internshipTitle").value = "";
    document.getElementById("internshipDescription").value = "";
    document.getElementById("internshipDuration").value = "";
    document.getElementById("internshipStipend").value = "";
}

// =========================================
// DISPLAY POSTED INTERNSHIPS
// =========================================

function displayInternships() {

    // Get internships from localStorage
    let opportunities =
        JSON.parse(localStorage.getItem("internshipOpportunities")) || [];

    // Get the HTML container
    let container =
        document.getElementById("postedInternships");

    // Clear old content
    container.innerHTML = "";


    // Show message if there are no internships
    if (opportunities.length === 0) {

        container.innerHTML = "<p>No internships posted yet.</p>";

        return;
    }


    // Loop through internships
    for (let i = 0; i < opportunities.length; i++) {

        let internship = opportunities[i];


        // Create internship card
        let card = document.createElement("div");

        card.className = "internship-card";


        card.innerHTML = `
            <h3>${internship.title}</h3>

            <p>${internship.description}</p>

            <p><strong>Duration:</strong> ${internship.duration}</p>

            <p><strong>Stipend:</strong> ${internship.stipend}</p>

            <p><strong>Lawyer:</strong> ${internship.lawyer}</p>
        `;


        // Add card to page
        container.appendChild(card);
    }
}


// Display internships when page loads
displayInternships();