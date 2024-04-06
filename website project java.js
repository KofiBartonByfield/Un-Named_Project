// website project java.js



// Get reference to input box and list container
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const completedCounter = document.getElementById("completed-counter");
const uncompletedCounter = document.getElementById("uncompleted-counter");

// Function to update task counters
function updateCounters() {
  const completedTasks = document.querySelectorAll(".completed").length;
  const uncompletedTasks = document.querySelectorAll("li:not(.completed)").length;

  completedCounter.textContent = completedTasks;
  uncompletedCounter.textContent = uncompletedTasks;
}

// Function to add a new task
function addTask() {
  const task = inputBox.value.trim();
  if (!task) {
    alert("Please write down a task");
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `
    <label>
      <input type="checkbox">
      <span>${task}</span>
    </label>
    <span class="edit-btn">Edit</span>
    <span class="delete-btn">Delete</span>
  `;
  
  listContainer.appendChild(li);
  inputBox.value = "";

  // Update counters
  updateCounters();
}

// Event listener for adding task button
document.getElementById("input-button").addEventListener("click", addTask);

// Event listener for checkbox
listContainer.addEventListener("click", function(event) {
  const target = event.target;
  if (target.tagName === "INPUT") {
    const li = target.closest("li");
    li.classList.toggle("completed", target.checked);
    updateCounters();
  }
});

// Event listener for edit button
listContainer.addEventListener("click", function(event) {
  const target = event.target;
  if (target.classList.contains("edit-btn")) {
    const span = target.previousElementSibling;
    const update = prompt("Edit task:", span.textContent);
    if (update !== null) {
      span.textContent = update;
      const li = target.closest("li");
      li.classList.remove("completed");
      const checkbox = li.querySelector("input[type='checkbox']");
      checkbox.checked = false;
      updateCounters();
    }
  }
});

// Event listener for delete button
listContainer.addEventListener("click", function(event) {
  const target = event.target;
  if (target.classList.contains("delete-btn")) {
    if (confirm("Are you sure you want to delete this task?")) {
      const li = target.closest("li");
      li.remove();
      updateCounters();
    }
  }
});

// Update counters initially
updateCounters();
