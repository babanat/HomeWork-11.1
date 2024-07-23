function tableMultiplication(rows, columns) {
  const table = document.createElement("table");
  table.style.borderSpacing = "0px";
  table.style.borderCollapse = "collapse";
  for (let i = 1; i <= rows; i++) {
    const row = table.insertRow();
    for (let j = 1; j <= columns; j++) {
      const cell = row.insertCell();
      cell.textContent = i * j;
      cell.style.border = "2px solid black";
      cell.style.padding = "6px";
      cell.style.textAlign = "center";
    }
  }
  return table;
}
const newElementDiv = document.createElement("div");
document.body.appendChild(newElementDiv);
const multipleTable = tableMultiplication(10, 10);
newElementDiv.appendChild(multipleTable);
