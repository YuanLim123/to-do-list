function removeProject(projects, index) {
  if (!projects || index < 0 || index >= projects.length) return projects;
  projects.splice(index, 1);
  return projects;
}

export { removeProject };
