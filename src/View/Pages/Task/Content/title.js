function createTitleComponent(title) {
    const titleText = document.createElement("h2");
    titleText.textContent = `Task: ${title ?? ""}`;
    titleText.classList.add("title");

    return titleText;
}
export default createTitleComponent;