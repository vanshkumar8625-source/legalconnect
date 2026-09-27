// ================= LAWYER DATA =================

const lawyers = [

    {
        name: "Adv. Ananya Sharma",
        initials: "AS",
        specialization: "Corporate Law",
        experience: "8 Years Experience"
    },

    {
        name: "Adv. Rahul Kapoor",
        initials: "RK",
        specialization: "Criminal Law",
        experience: "10 Years Experience"
    },

    {
        name: "Adv. Priya Nair",
        initials: "PN",
        specialization: "Family Law",
        experience: "6 Years Experience"
    }

];


// ================= GET SELECTED LAWYER =================

// Get lawyer selected on the previous page

const selectedLawyerName =
    localStorage.getItem("selectedLawyer");


// Find lawyer

const selectedLawyer = lawyers.find(function(lawyer) {

    return lawyer.name === selectedLawyerName;

});


// ================= DISPLAY LAWYER =================

if (selectedLawyer) {

    document.getElementById("lawyerInitials").textContent =
        selectedLawyer.initials;

    document.getElementById("lawyerName").textContent =
        selectedLawyer.name;

    document.getElementById("lawyerSpecialization").textContent =
        selectedLawyer.specialization;

    document.getElementById("lawyerExperience").textContent =
        "💼 " + selectedLawyer.experience;
}


// ================= SET MINIMUM DATE =================

// Get today's date

const today = new Date();


// Convert date to YYYY-MM-DD

const year = today.getFullYear();

const month = String(today.getMonth() + 1).padStart(2, "0");

const day = String(today.getDate()).padStart(2, "0");

const todayString =
    year + "-" + month + "-" + day;


// Prevent selecting a past date

document.getElementById("appointmentDate").min =
    todayString;


// ================= BACK BUTTON =================

function goBack() {

    window.history.back();

}


// ================= CONFIRM APPOINTMENT =================

function confirmAppointment() {

    // Get form values

    const date =
        document.getElementById("appointmentDate").value;

    const time =
        document.getElementById("appointmentTime").value;

    const consultationType =
        document.getElementById("consultationType").value;

    const legalIssue =
        document.getElementById("legalIssue").value.trim();


    // ================= VALIDATION =================

    if (!date) {

        alert("Please select an appointment date.");

        return;
    }


    if (!time) {

        alert("Please select an appointment time.");

        return;
    }


    if (!consultationType) {

        alert("Please select a consultation type.");

        return;
    }


    if (!legalIssue) {

        alert("Please describe your legal issue.");

        return;
    }


    // ================= CREATE APPOINTMENT =================

    const appointment = {

        lawyer: selectedLawyerName,

        date: date,

        time: time,

        consultationType: consultationType,

        legalIssue: legalIssue

    };


    // ================= SAVE APPOINTMENT =================

    localStorage.setItem(
        "appointment",
        JSON.stringify(appointment)
    );


    // ================= SUCCESS =================

    alert(
        "Appointment Confirmed! ✅\n\n" +

        "Lawyer: " + selectedLawyerName + "\n" +

        "Date: " + date + "\n" +

        "Time: " + time + "\n" +

        "Type: " + consultationType
    );


    // Go back to client dashboard

    window.location.href =
        "client-dashboard.html";

}