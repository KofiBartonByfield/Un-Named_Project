// website_java.js


document.addEventListener("DOMContentLoaded", function() {
 // Check if the current page is the home page
    if (window.location.pathname === "/") {
    
// Prompt the user for their name
    var userName = prompt("What's your name?");
    
    // Update the title with the user's name
    if (userName !== null && userName !== "") {
        document.getElementById("pageTitle").innerText = "Welcome " + userName + "!";
    }
}
});
