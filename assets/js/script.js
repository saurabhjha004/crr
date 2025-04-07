document.addEventListener("DOMContentLoaded", function () {
    const user = JSON.parse(localStorage.getItem("user"));
    const loginBtn = document.getElementById("loginBtn");
  
    if (user && user.name) {
      // Hide the login button
      if (loginBtn) loginBtn.style.display = "none";
  
      // Create a profile section
      const profileDiv = document.createElement("div");
      profileDiv.id = "userProfile";
      profileDiv.style.display = "flex";
      profileDiv.style.alignItems = "center";
      profileDiv.style.gap = "8px";
      profileDiv.style.color = "#fff";
  
      // Profile Picture
      const img = document.createElement("img");
      img.src = user.picture || "https://via.placeholder.com/40";
      img.alt = "Profile";
      img.style.width = "32px";
      img.style.height = "32px";
      img.style.borderRadius = "50%";
  
      // Name
      const name = document.createElement("span");
      name.textContent = user.name;
  
      // Logout button
      const logoutBtn = document.createElement("button");
      logoutBtn.textContent = "Logout";
      logoutBtn.style.padding = "4px 8px";
      logoutBtn.style.background = "transparent";
      logoutBtn.style.color = "#fff";
      logoutBtn.style.border = "1px solid #fff";
      logoutBtn.style.borderRadius = "4px";
      logoutBtn.style.cursor = "pointer";
  
      logoutBtn.addEventListener("click", function () {
        localStorage.removeItem("user");
        location.reload();
      });
  
      // Append to header/nav
      profileDiv.appendChild(img);
      profileDiv.appendChild(name);
      profileDiv.appendChild(logoutBtn);
  
      const header = document.querySelector("header") || document.body;
      header.appendChild(profileDiv);
    } else {
      // Show login if not logged in
      if (loginBtn) loginBtn.style.display = "inline-block";
    }
  });
    