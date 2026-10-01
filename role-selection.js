function selectRole(role) {

    // Save the selected role
    localStorage.setItem("userRole", role);

    // Check which role was selected
    if (role === "Client") {

        window.location.href = "client-dashboard.html";

    }

    else if (role === "Lawyer") {

        window.location.href = "lawyer-dashboard.html";

    }

    else if (role === "Junior / Intern") {

        window.location.href = "junior-dashboard.html";

    }

}