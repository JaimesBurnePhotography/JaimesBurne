<script>
  const toggleButton = document.getElementById('theme-toggle');
  const body = document.body;

  // Apply saved theme on load
  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    toggleButton.checked = true;
  }

  toggleButton.addEventListener('change', () => {
    body.classList.toggle('dark-mode');
    const mode = body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', mode);
  });
</script>

<script>
  const toggleButton = document.getElementById('theme-toggle');
  const body = document.body;

  // Set theme on load
  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    toggleButton.checked = true;
  }

  // Toggle on change
  toggleButton.addEventListener('change', () => {
    body.classList.toggle('dark-mode');
    const mode = body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', mode);
  });
</script>

<script>
  const toggleButton = document.getElementById('theme-toggle');
  const body = document.body;

  // Apply saved theme on load
  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    toggleButton.checked = true;
  }

  toggleButton.addEventListener('change', () => {
    body.classList.toggle('dark-mode');
    const mode = body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', mode);
  });
</script>

<script>
  const toggleBtn = document.getElementById("dropdownToggle");
  const dropdownContent = document.querySelector(".dropdown-content");
  const arrow = document.getElementById("arrow");

  toggleBtn.addEventListener("click", () => {
    const isOpen = dropdownContent.style.display === "block";

    // Toggle visibility
    dropdownContent.style.display = isOpen ? "none" : "block";

    // Toggle arrow direction
    arrow.innerHTML = isOpen ? "&#9662;" : "&#9652;";
  });

  // Optional: Close dropdown when clicking outside
  window.addEventListener("click", function(e) {
    if (!toggleBtn.contains(e.target) && !dropdownContent.contains(e.target)) {
      dropdownContent.style.display = "none";
      arrow.innerHTML = "&#9662;";
    }
  });
</script>
