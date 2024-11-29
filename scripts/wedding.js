document.addEventListener("DOMContentLoaded", () => {
    const venueCards = document.getElementById("venue-cards");

    // Fetch venue data from the JSON file
    fetch("data/venues.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to load venue data");
            }
            return response.json();
        })
        .then(data => {
            if (data.length === 0) {
                venueCards.innerHTML = "<p class='text-center'>No venues available at the moment.</p>";
                return;
            }

            // Render venue cards dynamically
            data.forEach(venue => {
                const card = document.createElement("div");
                card.classList.add("col-md-6", "mb-4");
                card.innerHTML = `
                    <div class="card shadow-sm">
                        <img src="${venue.image}" class="card-img-top" alt="${venue.name}" style="max-height: 200px; object-fit: cover;">
                        <div class="card-body">
                            <h5 class="card-title">${venue.name}</h5>
                            <p class="card-text text-muted">${venue.location}</p>
                            <p class="text-success"><strong>₹${venue.price}</strong> per person</p>
                            <button class="btn btn-primary w-100" onclick="viewDetails(${venue.id})">View Details</button>
                        </div>
                    </div>
                `;
                venueCards.appendChild(card);
            });
        })
        .catch(error => {
            console.error(error);
            venueCards.innerHTML = `<p class='text-center text-danger'>Error loading venues. Please try again later.</p>`;
        });
});

// Redirect to the detail page
function viewDetails(id) {
    window.location.href = `venue-detail.html?id=${id}`;
}
