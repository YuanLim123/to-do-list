function createProjectTable(projects = [], fieldsTitle = ["Name", "Action"]) {
    const tbl = document.createElement("table");

    const thead = document.createElement("thead");
    const thr = document.createElement("tr");

    fieldsTitle.forEach((title) => {
        const th = document.createElement("th");
        th.appendChild(document.createTextNode(title));
        thr.appendChild(th);
    });

    thead.appendChild(thr);
    tbl.appendChild(thead);

    const tblBody = document.createElement("tbody");

    for (let i = 0; i < projects.length; i++) {
        const row = document.createElement("tr");

        for (let j = 0; j < 1; j++) {
            const cell = document.createElement("td");
            const cellText = document.createTextNode(projects[i].name);
            cell.appendChild(cellText);

            const cell2 = document.createElement("td");

            const buttonContainer = document.createElement("div");
            buttonContainer.classList.add("button-container");

            const viewButton = document.createElement("button");
            const deleteButton = document.createElement("button");

            deleteButton.textContent = "Delete";
            deleteButton.classList.add("delete-project-button");
            deleteButton.dataset.index = i;

            viewButton.textContent = "View";
            viewButton.classList.add("view-project-button");
            viewButton.dataset.index = i;

            buttonContainer.appendChild(viewButton);
            buttonContainer.appendChild(deleteButton);

            cell2.appendChild(buttonContainer);

            row.appendChild(cell);
            row.appendChild(cell2);
        }

        tblBody.appendChild(row);
    }

    tbl.appendChild(tblBody);
    tbl.id = "projectTable";
    return tbl;
}

export default createProjectTable;