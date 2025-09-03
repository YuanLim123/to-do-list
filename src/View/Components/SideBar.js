import createSideBarLink from "./SideBarLink";
import createDropdown from "./Dropdown";

function createSideBar() {
  const sideBarDiv = document.createElement("div");
  sideBarDiv.classList.add("sidebar");

  const sideBarLinks = [
    createSideBarLink("Home", "homeBtn"),
    createSideBarLink("Projects", "projectsBtn"),
    createSideBarLink("Add Project", "addProjectBtn"),
  ];

  sideBarLinks.forEach((link) => {
    sideBarDiv.appendChild(link);
  });

    const links = [
    { text: "Projects", id: "dropdown-link-projects" },
    { text: "Add Project", id: "dropdown-link-add-project" },
  ];

  sideBarDiv.appendChild(createDropdown(links));

  return sideBarDiv;
}

export default createSideBar;
