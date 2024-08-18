// Function to fetch and display the destinations
function fetchDestinations() {
    fetch('travel_recommendation_api.json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('searchButton').addEventListener('click', function () {
                const searchQuery = document.getElementById('search-bar').value.toLowerCase();
                const resultsContainer = document.getElementById('results-container');
                resultsContainer.innerHTML = ""; // Clear previous results

                let foundDestinations = false;
                console.log("1");

                data.countries.forEach(country => {
                    country.cities.forEach(city => {
                        console.log(city);
                        if (city.name.toLowerCase().includes(searchQuery)) {
                            console.log(city);
                            foundDestinations = true;
                            // Create the result card
                            const resultCard = document.createElement('div');
                            resultCard.classList.add('result-card');

                            // Image
                            const img = document.createElement('img');
                            img.src = city.imageUrl;
                            img.alt = city.name;

                            // Name
                            const name = document.createElement('h3');
                            name.textContent = city.name;

                            // Description
                            const description = document.createElement('p');
                            description.textContent = city.description;

                            // Visit Button
                            const visitButton = document.createElement('button');
                            visitButton.classList.add('btn-visit');
                            visitButton.textContent = 'Visit';
                            visitButton.addEventListener('click', () => {
                                alert(`You're visiting ${city.name}!`);
                            });
                            console.log("2");

                            // Append everything to the card
                            resultCard.appendChild(img);
                            resultCard.appendChild(name);
                            resultCard.appendChild(description);
                            resultCard.appendChild(visitButton);
                            console.log("3");

                            // Append the card to the results container
                            console.log("4");
                            resultsContainer.appendChild(resultCard);
                            console.log("5");
                            console.log(resultCard.name);
                        }
                    });
                });

                if (!foundDestinations) {
                    resultsContainer.innerHTML = "<p>No destinations found for your search query.</p>";
                }
            });
        })
        .catch(error => {
            console.error('Error fetching travel_recommendation.json:', error);
        });
        // Add event listener to the Clear button
document.getElementById('clearButton').addEventListener('click', function () {
    // Clear the search input field
    document.getElementById('search-bar').value = '';
    
    // Clear the search results
    document.getElementById('results-container').innerHTML = '';
});
}

// Call the function when the page loads
fetchDestinations();
