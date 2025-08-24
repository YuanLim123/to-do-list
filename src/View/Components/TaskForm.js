function createTaskForm() {
  const form = document.createElement("form");
  form.classList.add("task-add-form");

  const titleInput = document.createElement("input");
  titleInput.placeholder = "Task Title";
  form.appendChild(titleInput);

  const dueDateInput = document.createElement("input");
  dueDateInput.type = "date";
  form.appendChild(dueDateInput);

  const submitButton = document.createElement("button");
  submitButton.textContent = "Add Task";
  form.appendChild(submitButton);

  return form;
}

export default createTaskForm;
