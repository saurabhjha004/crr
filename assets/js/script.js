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
      profileDiv.style.gap = "12px";
      profileDiv.style.marginLeft = "auto"; // Push to right
      profileDiv.style.color = "#000"; // Assuming dark text on white bg
  
      // Profile Picture
      const img = document.createElement("img");
      img.src = user.picture || "https://via.placeholder.com/40";
      img.alt = "Profile";
      img.style.width = "36px";
      img.style.height = "36px";
      img.style.borderRadius = "50%";
      img.style.objectFit = "cover";
  
      // Name
      const name = document.createElement("span");
      name.textContent = user.name;
      name.style.fontWeight = "bold";
  
      // Logout button
      const logoutBtn = document.createElement("button");
      logoutBtn.textContent = "Logout";
      logoutBtn.style.padding = "6px 10px";
      logoutBtn.style.background = "#4CAF50";
      logoutBtn.style.color = "#fff";
      logoutBtn.style.border = "none";
      logoutBtn.style.borderRadius = "4px";
      logoutBtn.style.cursor = "pointer";
  
      logoutBtn.addEventListener("click", function () {
        localStorage.removeItem("user");
        location.reload();
      });
  
      // Append to profile div
      profileDiv.appendChild(img);
      profileDiv.appendChild(name);
      profileDiv.appendChild(logoutBtn);
  
      // Append to navbar container (replace this line as needed)
      const navContainer = document.querySelector("nav") || document.body;
      navContainer.appendChild(profileDiv);
    } else {
      // Show login if not logged in
      if (loginBtn) loginBtn.style.display = "inline-block";
    }
  });
  