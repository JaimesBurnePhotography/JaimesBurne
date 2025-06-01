const body = document.body;

// Fade in on page load
window.addEventListener("DOMContentLoaded", () => {
  body.classList.add("fade-in");

  // Intercept internal link clicks for fade-out
  document.querySelectorAll("a[href]").forEach((link) => {
    const href = link.getAttribute("href");

    if (
      href.startsWith("http") ||
      href.startsWith("#") ||
      href.startsWith("javascript:")
    ) return;

    link.addEventListener("click", (e) => {
      e.preventDefault();
      body.classList.remove("fade-in");
      body.classList.add("fade-out");

      setTimeout(() => {
        window.location.href = href;
      }, 500); // Match to CSS transition time
    });
  });
});
