document.addEventListener("DOMContentLoaded", function() {
    const taskForm = document.getElementById("task-form");
    const taskTitle = document.getElementById("task-title");
    const taskEmail = document.getElementById("task-email");
    const taskDueDate = document.getElementById("task-due-date");
    const taskDueTime = document.getElementById("task-due-time");
    const addTaskButton = document.getElementById("add-task");
    const taskList = document.getElementById("task-list");

    addTaskButton.addEventListener("click", function() {
      const title = taskTitle.value;
      const email = taskEmail.value;
      const dueDate = taskDueDate.value;
      const dueTime = taskDueTime.value;

      // Create a new task element and add it to the task list
      const taskElement = document.createElement("li");
      taskElement.innerHTML = `${title} (Due on ${dueDate} at ${dueTime}) <button class="remove-task">Remove</button><br></br>`;
      taskList.appendChild(taskElement);

      // Add a click event listener to the "Remove" button
      const removeButton = taskElement.querySelector(".remove-task");
      removeButton.addEventListener("click", function() {
        taskList.removeChild(taskElement);
      });

      // Calculate the time until the task is due
      const dueDateTime = new Date(`${dueDate} ${dueTime}`);
      const currentTime = new Date();
      const timeUntilDue = dueDateTime - currentTime;

      if (timeUntilDue > 0) {
        // Schedule a popup reminder
        setTimeout(() => {
          alert(`Reminder: ${title}`);
        }, timeUntilDue);
      } else {
        alert(`Task is already overdue: ${title}`);
      }

      // Clear input fields
      taskTitle.value = "";
      taskEmail.value = "";
      taskDueDate.value = "";
      taskDueTime.value = "";
    });
  });