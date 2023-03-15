// Define the data source as an array
const dataSource = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Define the page size
const pageSize = 3;

// Define the current page
let currentPage = 1;

// Define the function to display the data
function displayData(data) {
  // Clear the previous data
  document.getElementById("data-container").innerHTML = "";
  // Loop through the data and add it to the container
  for (const element of data) {
    const dataItem = element;
    const dataNode = document.createElement("div");
    dataNode.textContent = dataItem;
    document.getElementById("data-container").appendChild(dataNode);
  }
}

// Define the function to handle pagination
function paginate() {
  // Calculate the start index and end index of the current page
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  // Get the data for the current page
  const data = dataSource.slice(startIndex, endIndex);

  // Display the data
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
