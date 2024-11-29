document.addEventListener("DOMContentLoaded", () => {
    const venueDetail = document.getElementById("venue-detail");
    const urlParams = new URLSearchParams(window.location.search);
    const venueId = urlParams.get("id");

    // Fetch venue data from JSON
    fetch("data/venues.json")
        .then(response => response.json())
        .then(data => {
            const venue = data.find(v => v.id === parseInt(venueId));
            if (venue) {
                venueDetail.innerHTML = `
                    <div class="col-md-8">
                        <img src="${venue.image}" class="img-fluid rounded mb-4" alt="${venue.name}">
                        <h2>${venue.name}</h2>
                        <p><strong>Location:</strong> ${venue.location}</p>
                        <p>${venue.details}</p>
                        <h3>Highlights</h3>
                        <ul class="list-group">
                            <li class="list-group-item"><strong>Food Type:</strong> ${venue.highlights.foodType}</li>
                            <li class="list-group-item"><strong>Rooms:</strong> ${venue.highlights.rooms}</li>
                            <li class="list-group-item"><strong>Capacity:</strong> ${venue.highlights.capacity}</li>
                            <li class="list-group-item"><strong>Parking:</strong> ${venue.highlights.parking}</li>
                        </ul>
                    </div>
                    <div class="col-md-4">
                        <div class="bg-light p-4 rounded shadow-sm">
                            <h4>Price per person</h4>
                            <p><strong>₹${venue.price}</strong></p>
                            <button class="btn btn-primary w-100">Check Availability</button>
                        </div>
                    </div>
                `;
            } else {
                venueDetail.innerHTML = "<p>Venue not found.</p>";
            }
        });
});
