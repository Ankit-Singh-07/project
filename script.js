const menuButton = document.querySelector('.menu-button');
const dropdownMenu = document.querySelector('.dropdown-menu');

menuButton.addEventListener('mouseover', () => {
    dropdownMenu.style.display = 'block';
});

menuButton.addEventListener('mouseout', () => {
    setTimeout(() => {
        if (!dropdownMenu.matches(':hover')) {
            dropdownMenu.style.display = 'none';
        }
    }, 200);
});

dropdownMenu.addEventListener('mouseleave', () => {
    dropdownMenu.style.display = 'none';
});