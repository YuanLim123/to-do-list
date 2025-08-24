import createSideBarLink from "./SideBarLink";

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

  return sideBarDiv;
}

export default createSideBar;
