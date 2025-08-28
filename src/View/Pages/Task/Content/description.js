function createDescriptionComponent(description) {

    const descriptionDiv = document.createElement("div");
    descriptionDiv.classList.add("description-container");

    const descriptionLabel = document.createElement("p");
    descriptionLabel.textContent = "Description:";
    descriptionLabel.classList.add("description-label");
    descriptionDiv.appendChild(descriptionLabel);

    const descriptionText = document.createElement("p");
    descriptionText.textContent = description ?? "";
    descriptionText.classList.add("description-content");

    descriptionDiv.appendChild(descriptionText);

    return descriptionDiv;
}

export default createDescriptionComponent;