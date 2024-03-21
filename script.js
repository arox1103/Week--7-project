document.addEventListener("DOMContentLoaded", function() {
    fetchCityData();
  });
  
  function fetchCityData() {
    // Fetch JSON data
    fetch("https://api.npoint.io/7bbd3a59c401f616bb89")
      .then(response => response.json())
      .then(data => {
        // Get the container element
        const cityInfoContainer = document.getElementById("cities");
  
        // Iterate over each place in the JSON data
        data.places.forEach(place => {
          // Create elements for city name and info
          const cityNameElement = document.createElement("h2");
          cityNameElement.textContent = place.name;
  
          const cityInfoElement = document.createElement("p");
          cityInfoElement.textContent = place.info;
  
          // Append city name and info to container
          cityInfoContainer.appendChild(cityNameElement);
          cityInfoContainer.appendChild(cityInfoElement);
  
          // Create image element
          const cityImageElement = document.createElement("img");
          cityImageElement.src = place.image;
  
          // Append image to container
          cityInfoContainer.appendChild(cityImageElement);
        });
      })
      .catch(error => {
        console.error("Error fetching city data:", error);
      });
  }
  