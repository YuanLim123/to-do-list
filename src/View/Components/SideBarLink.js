function createSideBarLink(text, elementId) {
    const linkButton = document.createElement("button");
    linkButton.classList.add("sidebar-link");
    linkButton.textContent = text;
    linkButton.id = elementId;
    return linkButton;
}

export default createSideBarLink;