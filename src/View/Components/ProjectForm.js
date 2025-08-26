function createProjectForm() {
  const form = document.createElement("form");
  form.classList.add("project-add-form");
  form.id = "projectAddForm";
  const titleInput = document.createElement("input");
  titleInput.placeholder = "Project Title";
  titleInput.id = "title";
  form.appendChild(titleInput);

  const dueDateInput = document.createElement("input");
  dueDateInput.type = "date";
  dueDateInput.id = "dueDate";
  form.appendChild(dueDateInput);

  const submitButton = document.createElement("button");
  submitButton.textContent = "Add Project";
  form.appendChild(submitButton);

  return form;
}

export default createProjectForm;
