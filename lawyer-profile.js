// ================= LAWYER DATA =================

const lawyers = [
    {
        name: "Adv. Ananya Sharma",
        initials: "AS",
        specialization: "Corporate Law",
        experience: "8 Years Experience",
        rating: "4.8",
        about: "Adv. Ananya Sharma is an experienced legal professional specializing in Corporate Law. She provides legal consultation and guidance to clients regarding business and corporate matters.",
        practice: [
            "Corporate Law",
            "Business Law",
            "Contract Law",
            "Company Law"
        ]
    },

    {
        name: "Adv. Rahul Kapoor",
        initials: "RK",
        specialization: "Criminal Law",
        experience: "10 Years Experience",
        rating: "4.7",
        about: "Adv. Rahul Kapoor is an experienced legal professional specializing in Criminal Law. He provides legal guidance and consultation for criminal and related legal matters.",
        practice: [
            "Criminal Law",
            "Bail Matters",
            "Cyber Crime",
            "Criminal Litigation"
        ]
    },

    {
        name: "Adv. Priya Nair",
        initials: "PN",
        specialization: "Family Law",
        experience: "6 Years Experience",
        rating: "4.9",
        about: "Adv. Priya Nair specializes in Family Law and provides legal consultation regarding family disputes, matrimonial matters and related legal issues.",
        practice: [
            "Family Law",
            "Divorce Matters",
            "Child Custody",
            "Matrimonial Law"
        ]
    }
];


// ================= GET SELECTED LAWYER =================

// Get the lawyer name saved from dashboard
const selectedLawyerName =
    localStorage.getItem("selectedLawyer");


// Find the selected lawyer
const selectedLawyer = lawyers.find(function(lawyer) {

    return lawyer.name === selectedLawyerName;

});


// ================= DISPLAY LAWYER =================

if (selectedLawyer) {

    // Lawyer name
    document.getElementById("lawyerName").textContent =
        selectedLawyer.name;

    // Initials
    document.getElementById("lawyerInitials").textContent =
        selectedLawyer.initials;

    // Specialization
    document.getElementById("lawyerSpecialization").textContent =
        selectedLawyer.specialization;

    // Rating
    document.getElementById("lawyerRating").textContent =
        "⭐ " + selectedLawyer.rating;

    // Experience
    document.getElementById("lawyerExperience").textContent =
        "💼 " + selectedLawyer.experience;

    // About
    document.getElementById("lawyerAbout").textContent =
        selectedLawyer.about;


    // Practice areas

    const practiceList =
        document.getElementById("practiceList");

    practiceList.innerHTML = "";

    selectedLawyer.practice.forEach(function(area) {

        const span = document.createElement("span");

        span.textContent = area;

        practiceList.appendChild(span);

    });

}


// ================= BACK TO DASHBOARD =================

function goBack() {

    window.history.back();

}


// ================= BOOK APPOINTMENT =================

function bookAppointment() {

    window.location.href = "appointment.html";

}