function createDropdown(links = []) {
  const dropdownDiv = document.createElement("div");
  dropdownDiv.classList.add("dropdown");

  const dropbtn = document.createElement("button");
  dropbtn.textContent = "Dropdown";
  dropbtn.classList.add("dropbtn");

  const arrorwIcon = document.createElement("i");
  arrorwIcon.classList.add("fa", "fa-caret-down");

  dropbtn.appendChild(arrorwIcon);
  dropbtn.addEventListener("click", toggleDropdown);
  dropdownDiv.appendChild(dropbtn);

  const dropdownContent = document.createElement("div");
  dropdownContent.classList.add("dropdown-content");

  links.forEach((item) => {
    const link = document.createElement("a");
    link.textContent = item.text;
    link.id = item.id;
    dropdownContent.appendChild(link);
  });

  dropdownDiv.appendChild(dropdownContent);

  return dropdownDiv;
}

function toggleDropdown() {
  document.querySelector(".dropdown-content").classList.toggle("show");
}

export default createDropdown;
