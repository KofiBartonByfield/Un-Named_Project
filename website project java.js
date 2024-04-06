// website project java.js



// website_java.js



// Function to add a new task
function addTask() {
    var input = document.getElementById("taskInput");
    var task = input.value;
    if (task.trim() !== "") {
        var ul = document.getElementById("taskList");
        var li = document.createElement("li");
        li.textContent = task;
        var removeButton = document.createElement("button");
        removeButton.textContent = "❌"; // "X" symbol
        removeButton.classList.add("remove-button"); // Add class
        removeButton.onclick = function() {
            li.remove();
        };
        li.appendChild(removeButton);
        ul.appendChild(li);
        input.value = "";
    } else {
        alert("Please enter a task!");
    }
}



function toggleDropdown() {
    var dropdownContent = document.getElementById("dropdown-content");
    var arrow = document.getElementById("arrow");
    
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
        arrow.innerHTML = "&#9660;"; // Downward arrow
    } else {
        dropdownContent.style.display = "block";
        arrow.innerHTML = "&#9650;"; // Upward arrow
    }
}







var input = document.getElementById("taskInput");

input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask(); // Call the addTask function when Enter is pressed
    }
});



