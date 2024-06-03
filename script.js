//your JS code here. If required.
// Create a function that returns a promise with the input array after 3 seconds
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000);
  });
}

// Chain the promises
fetchData()
  .then((data) => {
    // Filter out odd numbers
    const filteredArray = data.filter((num) => num % 2 === 0);
    return filteredArray;
  })
  .then((filteredArray) => {
    // Multiply even numbers by 2
    const multipliedArray = filteredArray.map((num) => num * 2);
    return multipliedArray;
  })
  .then((finalResult) => {
    // Update the text of the HTML element with ID "output"
    const outputElement = document.getElementById("output");
    outputElement.textContent = finalResult.join(", ");
  })
  .catch((error) => {
    console.error("Error:", error);
  });