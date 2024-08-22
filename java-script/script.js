document.addEventListener('DOMContentLoaded', function() {
    const menuBar = document.getElementById('menuBar');
    const navLinks = document.getElementById('navLinks');
    const menuItems = document.querySelectorAll('#navLinks .item a');

    // Toggle menu visibility when menu bar is clicked
    menuBar.addEventListener('click', function() {
        if (navLinks.style.display === 'block') {
            navLinks.style.display = 'none';
            menuBar.checked = true; // Uncheck the checkbox
            navLinks.style.display = 'block';
            
            // navLinks.style.display = 'none';


        } else {
            navLinks.style.display = 'block';
        }
    });

    // Close menu and scroll to section when a menu item is clicked
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            // Hide the menu
            navLinks.style.display = 'none';

            // Scroll to the section
            const section = document.querySelector(item.getAttribute('href'));
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
