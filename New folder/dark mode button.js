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
