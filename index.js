  document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const menu = document.querySelector('.menu-container');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');

    const dropdownParents = document.querySelectorAll('.navbar ul li');

    function closeAllDropdowns() {
      dropdownParents.forEach(parent => parent.classList.remove('active'));
    }

    hamburger.addEventListener('click', (e) => {
      e.stopPropagation();
      menu.classList.toggle('active');
      const isOpen = menu.classList.contains('active');
      menuIcon.style.display = isOpen ? 'none' : 'block';
      closeIcon.style.display = isOpen ? 'block' : 'none';
      if (!isOpen) closeAllDropdowns();
    });

    dropdownParents.forEach(parent => {
      const dropdown = parent.querySelector('.dropdown');
      if (dropdown) {
        parent.addEventListener('click', (e) => {
          if (window.innerWidth <= 768) {
            e.stopPropagation();
            e.preventDefault();
            parent.classList.toggle('active');
          }
        });
      }
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
        menu.classList.remove('active');
        closeAllDropdowns();
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
      }
    });
  });
