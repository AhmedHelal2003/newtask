document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");
  
    // Set initial theme from localStorage
    const currentTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", currentTheme);
    themeIcon.className = currentTheme === "light" ? "fas fa-sun" : "fas fa-moon";
  
    // Toggle theme on button click
    toggleButton.addEventListener("click", () => {
      const newTheme = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", newTheme);
      themeIcon.className = newTheme === "light" ? "fas fa-sun" : "fas fa-moon";
      localStorage.setItem("theme", newTheme);
    });
  });
  