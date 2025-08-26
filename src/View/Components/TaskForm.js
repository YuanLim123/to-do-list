function createTaskForm() {
  const form = document.createElement("form");
  form.classList.add("task-add-form");
  form.id = "taskAddForm";

  const titleInput = document.createElement("input");
  titleInput.placeholder = "Task Title";
  titleInput.id = "task-title";
  form.appendChild(titleInput);

  const dueDateInput = document.createElement("input");
  dueDateInput.type = "date";
  dueDateInput.id = "task-dueDate";
  form.appendChild(dueDateInput);

  const descriptionInput = document.createElement("textarea");
  descriptionInput.placeholder = "Description";
  descriptionInput.rows = 4;
  descriptionInput.style.resize = "none";
  descriptionInput.id = "task-description";
  form.appendChild(descriptionInput);

  const noteInput = document.createElement("input");
  noteInput.placeholder = "Notes";
  noteInput.id = "task-notes";
  form.appendChild(noteInput);


  const submitButton = document.createElement("button");
  submitButton.textContent = "Add Task";
  form.appendChild(submitButton);

  return form;
}

export default createTaskForm;
