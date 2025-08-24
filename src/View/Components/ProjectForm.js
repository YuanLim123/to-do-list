function createProjectForm() {
  const form = document.createElement("form");
  form.classList.add("project-add-form");

  const titleInput = document.createElement("input");
  titleInput.placeholder = "Project Title";
  form.appendChild(titleInput);

  const dueDateInput = document.createElement("input");
  dueDateInput.type = "date";
  form.appendChild(dueDateInput);

  const submitButton = document.createElement("button");
  submitButton.textContent = "Add Project";
  form.appendChild(submitButton);

  return form;
}

export default createProjectForm;
