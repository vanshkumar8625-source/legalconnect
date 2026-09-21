// This function runs when the user selects a role
function selectRole(role) {

    // Save the selected role in browser storage
    localStorage.setItem("userRole", role);

    // Show the selected role
    alert("You selected: " + role);

}