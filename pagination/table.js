// Define the data source as an array of objects
const dataSource = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 35 },
  { id: 4, name: "Dave", age: 40 },
  { id: 5, name: "Eve", age: 45 },
  { id: 6, name: "Frank", age: 50 },
  { id: 7, name: "Grace", age: 55 },
  { id: 8, name: "Heidi", age: 60 },
  { id: 9, name: "Ivan", age: 65 },
  { id: 10, name: "Jack", age: 70 },
];

// Define the page size
const pageSize = 3;

// Define the current page
let currentPage = 1;

// Define the function to display the data in a table
function displayData(data) {
  // Clear the previous data
  const tableBody = document.getElementById("data-container");
  tableBody.innerHTML = "";

  // Loop through the data and add it to the table
  for (const element of data) {
    const dataItem = element;
    const tableRow = document.createElement("tr");
    const idCell = document.createElement("td");
    const nameCell = document.createElement("td");
    const ageCell = document.createElement("td");
    idCell.textContent = dataItem.id;
    nameCell.textContent = dataItem.name;
    ageCell.textContent = dataItem.age;
    tableRow.appendChild(idCell);
    tableRow.appendChild(nameCell);
    tableRow.appendChild(ageCell);
    tableBody.appendChild(tableRow);
  }
}

// Define the function to handle pagination
function paginate() {
  // Calculate the start index and end index of the current page
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  // Get the data for the current page
  const data = dataSource.slice(startIndex, endIndex);

  // Display the data in the table
  displayData(data);

  // Update the page navigation
  const totalPages = Math.ceil(dataSource.length / pageSize);
  document.getElementById(
    "page-navigation"
  ).innerHTML = `Page ${currentPage} of ${totalPages}`;

  // Disable or enable the previous and next buttons as needed
  if (currentPage === 1) {
    document.getElementById("previous-button").disabled = true;
  } else {
    document.getElementById("previous-button").disabled = false;
  }
  if (currentPage === totalPages) {
    document.getElementById("next-button").disabled = true;
  } else {
    document.getElementById("next-button").disabled = false;
  }
}

// Initialize the pagination
paginate();

// Add event listeners to the previous and next buttons
document.getElementById("previous-button").addEventListener("click", () => {
  currentPage--;
  paginate();
});
document.getElementById("next-button").addEventListener("click", () => {
  currentPage++;
  paginate();
});
