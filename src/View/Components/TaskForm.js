function createTaskForm(task = null, edit = false) {
  const form = document.createElement("form");
  form.classList.add("task-add-form");

  const titleInput = document.createElement("input");
  titleInput.placeholder = "Task Title";
  titleInput.id = "task-title";
  titleInput.value = task?.title ?? "";
  form.appendChild(titleInput);

  const dueDateInput = document.createElement("input");
  dueDateInput.type = "date";
  dueDateInput.id = "task-dueDate";
  dueDateInput.value = task?.dueDate ?? "";
  form.appendChild(dueDateInput);

  const descriptionInput = document.createElement("textarea");
  descriptionInput.placeholder = "Description";
  descriptionInput.rows = 4;
  descriptionInput.style.resize = "none";
  descriptionInput.id = "task-description";
  descriptionInput.value = task?.description ?? "";
  form.appendChild(descriptionInput);

  const noteInput = document.createElement("input");
  noteInput.placeholder = "Notes";
  noteInput.id = "task-notes";
  noteInput.value = task?.notes ?? "";
  form.appendChild(noteInput);

  if (edit) {
    const saveButton = document.createElement("button");
    saveButton.textContent = "Update";
    form.appendChild(saveButton);
    form.id = "taskEditForm";
  } else {
    const submitButton = document.createElement("button");
    submitButton.textContent = "Add Task";
    form.appendChild(submitButton);
    form.id = "taskAddForm";
  }

  return form;
}

export default createTaskForm;
