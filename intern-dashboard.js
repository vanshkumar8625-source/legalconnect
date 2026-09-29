/* =========================================
   JUNIOR DASHBOARD JAVASCRIPT
========================================= */


/* =========================================
   GET DATA FROM LOCAL STORAGE
========================================= */

// Get internship opportunities
let opportunities =
    JSON.parse(localStorage.getItem("internshipOpportunities")) || [];

// Get applications submitted by the junior
let applications =
    JSON.parse(localStorage.getItem("internshipApplications")) || [];


/* =========================================
   DISPLAY OPPORTUNITIES
========================================= */

function displayOpportunities() {

    const opportunityList =
        document.getElementById("opportunityList");

    // Clear previous content
    opportunityList.innerHTML = "";

    // If there are no opportunities
    if (opportunities.length === 0) {

        opportunityList.innerHTML = `
            <p class="empty-message">
                No internship opportunities available right now.
            </p>
        `;

        updateStats();
        return;
    }


    // Create a card for every opportunity
    opportunities.forEach(function(opportunity) {

        const card = document.createElement("div");

        card.className = "opportunity-card";

        card.innerHTML = `
            <h3>${opportunity.title}</h3>

            <p>
                <strong>Lawyer:</strong>
                ${opportunity.lawyer}
            </p>

            <p>
                <strong>Duration:</strong>
                ${opportunity.duration}
            </p>

            <p>
                <strong>Skills:</strong>
                ${opportunity.skills}
            </p>

            <p>
                <strong>Stipend:</strong>
                ${opportunity.stipend}
            </p>

            <p>
                ${opportunity.description}
            </p>

            <button
                class="apply-btn"
                onclick="applyForInternship('${opportunity.id}')">

                Apply Now

            </button>
        `;

        opportunityList.appendChild(card);

    });

}


/* =========================================
   APPLY FOR INTERNSHIP
========================================= */

function applyForInternship(opportunityId) {

    // Find selected opportunity
    const opportunity =
        opportunities.find(function(item) {

            return item.id === opportunityId;

        });


    // If opportunity doesn't exist
    if (!opportunity) {

        alert("Opportunity not found.");

        return;
    }


    // Check if already applied
    const alreadyApplied =
        applications.some(function(application) {

            return application.opportunityId === opportunityId;

        });


    if (alreadyApplied) {

        alert("You have already applied for this opportunity.");

        return;
    }


    // Create application
    const application = {

        id: Date.now(),

        opportunityId: opportunity.id,

        opportunityTitle: opportunity.title,

        lawyer: opportunity.lawyer,

        status: "Pending"

    };


    // Add application
    applications.push(application);


    // Save application
    localStorage.setItem(
        "internshipApplications",
        JSON.stringify(applications)
    );


    alert("Application submitted successfully! 🎉");


    // Refresh dashboard
    displayApplications();

    updateStats();

}


/* =========================================
   DISPLAY APPLICATIONS
========================================= */

function displayApplications() {

    const applicationList =
        document.getElementById("applicationList");


    applicationList.innerHTML = "";


    // No applications
    if (applications.length === 0) {

        applicationList.innerHTML = `
            <p class="empty-message">
                No applications yet.
            </p>
        `;

        return;
    }


    // Display every application
    applications.forEach(function(application) {

        const card =
            document.createElement("div");

        card.className = "application-card";


        card.innerHTML = `

            <div>

                <h3>
                    ${application.opportunityTitle}
                </h3>

                <p>
                    Lawyer: ${application.lawyer}
                </p>

            </div>


            <span
                class="status ${application.status.toLowerCase()}">

                ${application.status}

            </span>

        `;


        applicationList.appendChild(card);

    });

}


/* =========================================
   UPDATE STATISTICS
========================================= */

function updateStats() {

    document.getElementById("opportunityCount")
        .textContent = opportunities.length;


    document.getElementById("applicationCount")
        .textContent = applications.length;


    const acceptedApplications =
        applications.filter(function(application) {

            return application.status === "Accepted";

        });


    document.getElementById("acceptedCount")
        .textContent = acceptedApplications.length;

}


/* =========================================
   LOGOUT
========================================= */

function logout() {

    // Remove login information
    localStorage.removeItem("loggedIn");

    // Go back to login page
    window.location.href = "login.html";

}


/* =========================================
   LOAD DASHBOARD
========================================= */

displayOpportunities();

displayApplications();

updateStats();