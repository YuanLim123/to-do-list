function createNotesComponent(notes) {
    const notesDiv = document.createElement("div");
    notesDiv.classList.add("notes-container");

    const notesLabel = document.createElement("p");
    notesLabel.textContent = "Notes:";
    notesLabel.classList.add("notes-label");
    notesDiv.appendChild(notesLabel);

    const notesText = document.createElement("p");
    notesText.textContent = notes ?? "";
    notesText.classList.add("status-content");
    notesDiv.appendChild(notesText);

    return notesDiv;
}
export default createNotesComponent;