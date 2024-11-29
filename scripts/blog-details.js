document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const blogId = urlParams.get("id");

    const blogContent = document.getElementById("blog-content");

    // Fetch blog details from JSON
    fetch("data/blogs.json")
        .then(response => response.json())
        .then(blogs => {
            const blog = blogs.find(b => b.id === parseInt(blogId));

            if (blog) {
                blogContent.innerHTML = `
                    <h1 class="mb-4">${blog.title}</h1>
                    <img src="${blog.image}" class="img-fluid mb-4" alt="${blog.title}">
                    <p class="text-muted">${blog.date} | ${blog.views} views</p>
                    <p>${blog.content}</p>
                `;
            } else {
                blogContent.innerHTML = `<p class="text-center text-danger">Blog not found.</p>`;
            }
        })
        .catch(error => {
            console.error("Error loading blog details:", error);
            blogContent.innerHTML = `<p class="text-center text-danger">Error loading blog details. Please try again later.</p>`;
        });
});
