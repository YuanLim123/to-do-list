function createShowTaskList() {
  const list = document.createElement("ul");
  list.classList.add("task-list");
  return list;
}

export default createShowTaskList;