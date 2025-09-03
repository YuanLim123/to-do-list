import createImageSlider from "../../Components/ImageSlider";

function createHomeIndex() {
    const containerDiv = document.createElement("div");
    containerDiv.classList.add("home-index-container");
    const title = document.createElement("h2");
    title.classList.add("title");
    title.textContent = "Welcome User";
    containerDiv.appendChild(title);

    const imageSlider = createImageSlider();
    containerDiv.appendChild(imageSlider);

    return containerDiv;
}

export default createHomeIndex;