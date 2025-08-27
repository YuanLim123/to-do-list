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
            const cellButton = document.createElement("button");
            cellButton.textContent = "View";
            cellButton.classList.add("view-project-button");
            cellButton.dataset.index = i;
            cell2.appendChild(cellButton);
            
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