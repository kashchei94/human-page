document.addEventListener('DOMContentLoaded', function() {
    var menuButton = document.querySelector('.main__wrapper__nav-menu__menu-button');
    var menuContent = document.querySelector('.main__wrapper__nav-menu__content');
    var isMenuOpen = false;

    function toggleMenu() {
        if (isMenuOpen) {
            menuContent.style.display = "none";
            isMenuOpen = false;
        } else {
            menuContent.style.display = "flex";
            isMenuOpen = true;
        }
    }

    menuContent.style.display = "none";

    menuButton.addEventListener('click', function() {
        toggleMenu();
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

