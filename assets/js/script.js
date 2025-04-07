document.addEventListener("DOMContentLoaded", function () {
    const user = JSON.parse(localStorage.getItem("user"));
    const loginBtn = document.getElementById("loginBtn");

    if (user && user.name) {
        // Hide login button
        if (loginBtn) loginBtn.style.display = "none";

        // Create a profile container
        const profileDiv = document.createElement("div");
        profileDiv.id = "userProfile";
        profileDiv.style.display = "flex";
        profileDiv.style.alignItems = "center";
        profileDiv.style.gap = "10px";
        profileDiv.style.color = "#fff";

        // User image
        const img = document.createElement("img");
        img.src = user.picture || "https://via.placeholder.com/40";
        img.alt = "Profile";
        img.style.width = "35px";
        img.style.height = "35px";
        img.style.borderRadius = "50%";

        // Name
        const name = document.createElement("span");
        name.textContent = user.name;

        // Logout button
        const logoutBtn = document.createElement("button");
        logoutBtn.textContent = "Logout";
        logoutBtn.style.padding = "5px 10px";
        logoutBtn.style.border = "1px solid #fff";
        logoutBtn.style.background = "transparent";
        logoutBtn.style.color = "#fff";
        logoutBtn.style.borderRadius = "6px";
        logoutBtn.style.cursor = "pointer";

        logoutBtn.addEventListener("click", function () {
            localStorage.removeItem("user");
            location.reload(); // or redirect to login.html
        });

        // Append to DOM
        profileDiv.appendChild(img);
        profileDiv.appendChild(name);
        profileDiv.appendChild(logoutBtn);

        // Append to nav or body
        const nav = document.querySelector(".navbar") || document.body;
        nav.appendChild(profileDiv);
    } else {
        // Show login button if not logged in
        if (loginBtn) loginBtn.style.display = "inline-block";
    }
});
