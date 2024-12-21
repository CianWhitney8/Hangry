// JavaScript for Hangry Restaurant Website

document.addEventListener("DOMContentLoaded", () => {
    // Highlight Active Navigation Link
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.style.fontWeight = "bold";
            link.style.textDecoration = "underline";
        }
    });

    // Interactive Menu Feature
    const menuItems = document.querySelectorAll("table tr");
    menuItems.forEach((item, index) => {
        if (index > 0) { // Skip the header row
            item.addEventListener("mouseover", () => {
                item.style.backgroundColor = "#dff0d8";
            });
            item.addEventListener("mouseout", () => {
                item.style.backgroundColor = index % 2 === 0 ? "#ffffff" : "#f9f9f9";
            });
        }
    });

    // Back to Top Button
    const backToTopButton = document.createElement("button");
    backToTopButton.textContent = "Back to Top";
    backToTopButton.style.position = "fixed";
    backToTopButton.style.bottom = "20px";
    backToTopButton.style.right = "20px";
    backToTopButton.style.padding = "10px 20px";
    backToTopButton.style.backgroundColor = "#5cb85c";
    backToTopButton.style.color = "white";
    backToTopButton.style.border = "none";
    backToTopButton.style.borderRadius = "5px";
    backToTopButton.style.cursor = "pointer";
    backToTopButton.style.display = "none";
    document.body.appendChild(backToTopButton);

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    backToTopButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Dynamic Review Submission Placeholder
    const reviewForm = document.querySelector("form[action='/submit-review']");
    if (reviewForm) {
        reviewForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = reviewForm.querySelector("#name").value;
            const review = reviewForm.querySelector("#review").value;
            if (name && review) {
                const reviewSection = document.querySelector("#reviews");
                const newReview = document.createElement("div");
                newReview.className = "review";
                newReview.innerHTML = `<h3>${name}</h3><p>${review}</p>`;
                reviewSection.appendChild(newReview);
                alert("Thank you for your review!");
                reviewForm.reset();
            } else {
                alert("Please fill out both fields.");
            }
        });
    }
});
