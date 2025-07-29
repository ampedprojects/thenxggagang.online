// Single dropdown nav menu
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelector('.nav-toggle');
  const navDropdown = document.querySelector('.nav-dropdown');
  navToggle.addEventListener('click', function() {
    const isOpen = navDropdown.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });
  // Optional: close menu when clicking outside
  document.addEventListener('click', function(e) {
    if (!navToggle.contains(e.target) && !navDropdown.contains(e.target)) {
      navDropdown.classList.remove('open');
      navToggle.setAttribute('aria-expanded', false);
    }
  });
  // Optional: close menu on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      navDropdown.classList.remove('open');
      navToggle.setAttribute('aria-expanded', false);
    }
  });
});
