(function() {
  const root = document.documentElement;
  const img = document.getElementById('light-dark-toggle');
  const saved = localStorage.getItem('theme');
  let dark = saved === 'dark';

  function applyTheme(isDark) {
    if (isDark) {
      root.classList.remove('light-theme');
      if (img) img.src = 'images/dark.svg';
    } else {
      root.classList.add('light-theme');
      if (img) img.src = 'images/bright.svg';
    }
  }

  // Apply theme immediately when page loads
  applyTheme(dark);

  // If button exists, enable toggle
  if (img) {
    img.addEventListener('click', () => {
      dark = !dark;
      applyTheme(dark);
      localStorage.setItem('theme', dark ? 'dark' : 'light');
    });
  }
})();
