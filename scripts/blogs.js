document.addEventListener("DOMContentLoaded", () => {
    const blogsContainer = document.getElementById("blogs-container");

    // Fetch blogs from JSON
    fetch("data/blogs.json")
        .then(response => response.json())
        .then(blogs => {
            blogs.forEach(blog => {
                const blogCard = document.createElement("div");
                blogCard.classList.add("col-md-6", "mb-4");
                blogCard.innerHTML = `
                    <div class="card border-0">
                        <div class="row g-0">
                            <div class="col-4">
                                <img src="${blog.image}" class="img-fluid rounded-start" alt="${blog.title}">
                            </div>
                            <div class="col-8">
                                <div class="card-body">
                                    <h5 class="card-title"><a href="blog-details.html?id=${blog.id}" class="text-decoration-none text-dark">${blog.title}</a></h5>
                                    <p class="card-text text-muted small">${blog.date} | ${blog.views} views</p>
                                    <p class="card-text text-truncate">${blog.excerpt}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                blogsContainer.appendChild(blogCard);
            });
        })
        .catch(error => {
            console.error("Error loading blogs:", error);
            blogsContainer.innerHTML = `<p class="text-center text-danger">Error loading blogs. Please try again later.</p>`;
        });
});
