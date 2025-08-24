function createProjectAdd() {
  const form = document.createElement("form");
  form.classList.add("project-add-form");

  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.placeholder = "Project Title";
  titleInput.required = true;

  const dateInput = document.createElement("input");
  dateInput.type = "date";
  dateInput.required = true;

  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.textContent = "Add Project";

  form.appendChild(titleInput);
  form.appendChild(dateInput);
  form.appendChild(submitButton);

  return form;
}

export default createProjectAdd;
